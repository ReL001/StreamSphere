import mongoose, { model } from 'mongoose';

const videoSchema = new mongoose.Schema (
    {
        id:{
            type: Number,
            unique: true,
            required: true
        },
        videoFile:{
            type: String,  // URL of video
            trim:true,
            required: [true, "Video is mendatory"]
        },
        thumbnail:{
            type: String,  //URL of image
            required: true,
            trim: true
        },
        title:{
            type: String,
            requrired: true,
            unique: true,
            index: true
        },
        description:{
            type: String,
            required: true,
            trim: true,
        },
        duration:{
            type: Number,
            required: true,
        },
        views:{
            type:Number,
            default: 0
        },
        isPublished:{
            type:Boolean,
            default: true,
            required: true
        },
        owner:{
            type:Schema.Type.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)


export const Video = mongoose.model ("Video", videoSchema) 