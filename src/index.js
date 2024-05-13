// require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working

import dotenv from "dotenv"   // for working of this new importing of dotenv we need to add "type": "module" in package.json and also need to add {"dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"} into scripts in package.json
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/DBconnect.js";
dotenv.config({     // calling the config method of the dotenv object to load the environment variables from the .env file
    path:'./env'
})

connectDB() // calling the connectDB function to connect to the database

/*
//First Approach - 

import express from "express"; // import express module
const app = express(); // create an express application
// IFFE - Immediately Invoked Function Expression - An IIFE is a JavaScript design pattern where a function is defined and then immediately invoked.
;( async () => {       // async function to connect to the database
    try {      // try block to handle exceptions - always use try-catch block when connecting to the database
        await mongoose.connect('${process.env.MONGO_URI}/${DB_NAME')   // connect to the database using the connection string and database name. added await to wait for the connection to be established before moving forward 
        
        //event listner for the connection event 
        app.on("error",error =>{
            console.error("Listner ERROR:",error )
        })              //we have an event listener for the "error" event of the app object. This code is assuming that app is an instance of an Express.js application. If an error occurs during the connection, this listener will be triggered and the error will be logged to the console using console.error().
    
        app.listner(process.env.PORT,()=>{
            console.log('Server is running on port ${process.env.PORT}')
        })  //we have a listener for the "listening" event of the app object. This code is assuming that app is an instance of an Express.js application. When the server starts listening on the specified port, this listener will be triggered and a message will be logged to the console using console.log().
    }catch(error){ 
        console.error("ERROR:",error) // log the error to the console
        throw err // throw the error to stop the execution of the program
    }
}) ()
*/