"use client";
import React from 'react'
import ImageWrapper from './ImageWrapper';
const Server_component = () => {
    return (
        <div>
            <ImageWrapper
                src="https://www.rackssolutions.com/news/app/uploads/AdobeStock_90603827-scaled.jpeg" 
                alt="Hero Image" 
                className="image-wrapper"
                fallbackSrc="https://www.racksolutions.com/news/app/uploads/AdobeStock_90603827-scaled.jpeg"
            />
        </div>
    )
}

export default Server_component