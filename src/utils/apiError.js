class apiError extends Error {  // Standardizing the error response by creating a custom error class that extends the Error class in Node.js
    constructor(  // The constructor method is a special method for creating and initializing an object created within a class.
        statusCode, // The status code of the error
        message = "Something went wreong ",     
        errors = [], // the errors array to store the error messages
        statck = "" // The stack trace of the error
    ){
        super(message)  //super keyword is used to access and call functions on an object's parent. and we rewritting the message property of the Error class
        this.statusCode = statusCode // rewriting the statusCode property of the Error class
        this.data = null // setting the data property to null
        this.message= message   // setting the message property to the message passed in the constructor
        this.success = false // setting the success property to false
        this.errors = errors // setting the errors property to the errors passed in the constructor

        if (statck){  // checking if the stack trace is passed in the constructor and setting the stack property to the stack trace
            this.stack = statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {apiError}