// 
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).reject((err) => next(err))    //Promise.resolve() is a method that returns a Promise object that is resolved with the given value. In this case, the given value is the result of calling the requestHandler function with the req, res, and next arguments. The reject() method is called on the Promise object to handle any errors that might occur during the execution of the requestHandler function. If an error occurs, the error is passed to the next() function to handle the error in the Express error-handling middleware.
    }
}

export {asyncHandler}



// Higher order Function - Afunction which can take one or more functions as an arguments and returns a function as its result  
// const asyncHandler = (func) => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = () => async() => {}


// const asyncHandler = (fn) => async(req,res,next) => {  //asyncHandler is a higher order function that takes a function as an argument and returns a new function that wraps the original function in a try-catch block. The new function is an asynchronous function that takes three arguments: req, res, and next. The new function calls the original function with the req, res, and next arguments and awaits the result. If the original function throws an error, the new function catches the error and sends a response with the error message and status code.
//     try{
//         await fn(req,res,next)
//     }catch{
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
// // we impleted asyncHandler using try-catch block to handle the errors that might occur in the asynchronous function.  