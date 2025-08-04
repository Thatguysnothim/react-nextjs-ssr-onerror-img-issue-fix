"use client";
import React from 'react'
const Server_component = () => {
    return (
        <>
            <h1>I am server</h1>
            <img 
                src="https://www.wrong-link.com/image.jpg" 
                alt="Wrong Image Link" 
                className='image-wrapper'
                onError={(e) => {
                    // This will never execute
                    console.log("Onerror handler executed");
                    e.target.onerror = null;
                    e.target.src = 'https://www.racksolutions.com/news/app/uploads/AdobeStock_90603827-scaled.jpeg';
                }}
            />
        </>
    )
}

export default Server_component