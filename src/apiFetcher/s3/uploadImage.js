import AWS from 'aws-sdk'
import {useState} from "react";

export const uploadImage = async (formData) => {
    const S3_REGION = import.meta.env.VITE_S3_REGION;
    const S3_ACCESS_KEY = import.meta.env.VITE_S3_ACCESS_KEY;
    const S3_SECRET_KEY = import.meta.env.VITE_S3_SECRET_KEY;
    const S3_BUCKET_NAME = import.meta.env.VITE_S3_BUCKET_NAME;

    let imageURL = '';

    AWS.config.update({
        region: S3_REGION,
        accessKeyId: S3_ACCESS_KEY,
        secretAccessKey: S3_SECRET_KEY
    });

    const upload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: S3_BUCKET_NAME,
            Key: `upload/${formData.get("imageName")}`,
            Body: formData.get("imageFile")
        }
    })

    await upload.promise()
        .then((response) => {
            imageURL = response.Location;
        })
    return imageURL;
}