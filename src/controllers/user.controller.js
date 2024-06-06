import { asyncHandler } from "../utils/asyncHandler.js";
import {apiError} from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { apiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async(req,res) => {    // asyncHandler is a middleware function that takes an async function as an argument and returns a new function that calls the async function and catches any errors that occur during its execution.
//Pseudo code for registerUser controller function
    // get user detailes from frontend
    // verify details - 
    // user already exists or not 
    // cheak images / avatar files
    // upload and cheak images / avatar upload at cloudinary
    // create user object - create entry in db
    // remove password and refresh token from reponse
    // cheak for user creation 
    // return response<


    //get the user details from the request body
    const {fullname, email, username, password } = req.body 
    // console.log("email: ", email);

    // if (fullname === ""){    //verify that the fullname field is not empty. We can implement this for all fields OR ->
    //     throw new apiError(400, "Full Name is Required field");
    // }  //Do validation for every field OR ->

    if (        //verify that all fields are not empty and throw an error if any field is empty. we cheaked all required fields  at once. 
        [fullname, email, username, password].some((field)=>field?.trim() === "true")
    ){
        throw new apiError(400, "All fields are required")
    }

    //verify that the user does not already exist in the database by checking the username and email fields
    const existingUser = User.findOne({
        $or: [{username}, {email}]  //check if the username or email already exists in the database
    })

    if(existingUser){
        throw new apiError(409, "User already exists")
    }

    //check if the avatar and cover image files are present in the request
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    //create a new user object with the user details and save it to the database
    const user = await User.create({
        fullname,
        avatar: avatar?.url || "",
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    //remove the password and refresh token fields from the user object
    const creactedUser = await User.findById(user._id).select(
        "-password - refreshTocken"
    )

    //check if the user was created successfully and return the response
    if (!creactedUser){
        throw new apiError(500, "User Registration failed")
    }

    //return the response with the created user object
    return res.status(201).json(
        new apiResponse(200, creactedUser, "User Registration Successfull")
    )

} )

export {registerUser}
