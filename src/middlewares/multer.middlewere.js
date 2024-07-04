import multer from "multer"


const storage = multer.diskStorage({  //multer.diskStorage() creates a storage space for storing files. 
    destination: function (req, file, cb) {  //destination is a function that determines where the files should be stored. req is the request object, file is the file, and cb is a callback function that should be called when the destination is determined. 
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {  //filename is a function that determines what the file should be named.
      cb(null, file.originalname) //The file will be named with its original name.
    }
  })
  
  export const upload = multer({   //multer() creates a middleware function that can be used to handle file uploads.
    storage  ,
  })
