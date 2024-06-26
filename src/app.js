import express from 'express';
import cookieParser from 'cookie-parser';  //coocie-parser is a middleware that parses cookies attached to the client request object and makes them available in the request object as req.cookies.
import cors from "cors"    //cors is a middleware that allows cross-origin requests to your server. It is used to enable communication between the client and the server when they are running on different domains.

const app = express()   

app.use(cors({  //use the cors middleware to enable cross-origin requests to the server. The cors middleware takes an options object as an argument. The options object specifies the origin of the client that is allowed to make requests to the server.
    origin: process.env.CORS_ORIGIN,
    credentials: true        //In this case, the origin is set to the value of the CORS_ORIGIN environment variable. The credentials option is set to true to allow cookies to be sent with the requests.
}))

app.use(express.json({limit: '32kb'})) // express.json() is a middleware that parses incoming requests with JSON payloads. It is based on body-parser. It is used to parse the incoming request body in JSON format. The limit option is used to limit the size of the JSON payload that can be sent in the request body. In this case, the limit is set to 50kb.
app.use(express.urlencoded({extended: true, limit:'32kb'}))
// express.urlencoded() is a middleware that parses incoming requests with URL-encoded payloads. It is based on body-parser. It is used to parse the incoming request body in URL-encoded format. The extended option is set to true to allow the use of nested objects in the request body.  
app.use(express.static("public")) // express.static() is a middleware that serves static files and is based on the serve-static package. It is used to serve static files such as images, CSS, JavaScript, and other assets. In this case, it serves files from the public directory.
app.use(cookieParser()) // use the cookie-parser middleware to parse cookies attached to the client request object and make them available in the request object as req.cookies.

//routes import  //import the userRouter from the user.routes.js file and use it as a middleware in the app object.
import userRouter from './routes/user.routes.js';

app.use("/api/v1/user", userRouter)  //use the userRouter middleware for all requests that start with the /api/v1/user path. The requests will be forwarded to the userRouter middleware..

export { app } //export the app object to make it available to other modules.