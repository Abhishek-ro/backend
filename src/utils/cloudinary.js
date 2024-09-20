import {v2 as cloudinary} from "Cloudinary"
import fs from "fs"

 
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET
});

const uploadOnCloudinary= async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log(response.url,response);
        console.log(response)
        return response
    }
    catch(e){
        fs.unlink(localFilePath)
        return null
    }
}

export {uploadOnCloudinary}