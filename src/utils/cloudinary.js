import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'; // Import the fs module
          
cloudinary.config({   //Configuring cloudinary with the cloud_name, api_key and api_secret 
  cloud_name: process.env.CLOUDINARY_cloud_name, 
  api_key: process.env.CLOUDINARY_api_key, 
  api_secret: process.env.CLOUDINARY_api_secret 
});

const uploadOnCloudinary = async (localFile) => {  //Function to upload file on cloudinary. It takes local file path as input. 
    try {
        if (!localFile) return null
        //Uploading file on cloudinary 
        const response = await cloudinary.uploader.upload(localFile,{  
            resource_type: "auto"
        })
        //Display success message-
        // console.log("File Uploaded Successfully");  //

        fs.unlinkSync(localFile)    //Removing local file after file upload
        return response;
    } catch (error) {
        fs.unlinkSync(localFile)    //Removing local file if file upload failed
        return null;
    }
}

export {uploadOnCloudinary}  //Exporting the uploadOnCloudinary function
