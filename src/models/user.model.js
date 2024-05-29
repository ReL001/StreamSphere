import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,  //
            index: true   //
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullname:{
            type: String,
            required: true,
            trim: true,
        },
        avatar:{
            type: String, //cloudnery url
            required: false
        },
        coverImage:{
            type: String //cloudnery url
        },
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password:{
            type: String,
            required: [true, 'Password is Required'] ,
        },
        refreshToken:{
            type: String, 
        }
    },
    {
        timestamps:true
    }
)

export const User = mongoose.model("User", userSchema)