import mongoose, { model } from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';  //importing the mongoose-aggregate-paginate-v2 package to add pagination to the video schema

const videoSchema = new mongoose.Schema (
    {
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

videoScrema.plugin(mongooseAggregatePaginate)  //mongoose plugin to add pagination to the video schema. pagination is a technique used to divide a large set of data into smaller parts called pages. This makes it easier to navigate and manage the data.

export const Video = mongoose.model ("Video", videoSchema) 