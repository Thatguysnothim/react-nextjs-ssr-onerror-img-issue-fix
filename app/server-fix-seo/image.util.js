const getImgSrc = async (src, fallbackImgSrc) => {
    const isHttpUrl = (url) => url.startsWith('http');
    const baseURL = 'http://localhost:3000/';

    // Construct the full URL if it's not an absolute HTTP URL
    const fullSrc = isHttpUrl(src) ? src : `${baseURL}${src}`;
    console.log(fullSrc)
    try {
        const response = await fetch(fullSrc, { method: 'HEAD' });

        // Check if response is okay and content type is an image
        const contentType = response.headers.get('Content-Type') || '';
        if (response.ok && contentType.startsWith('image/')) {
            return fullSrc;
        }
    } catch (error) {
        console.log(error);
        console.log(fallbackImgSrc)
        return fallbackImgSrc || '';
    }

    // Fallback if the image check failed or content type isn't an image
    return fallbackImgSrc || '';
};

export default getImgSrc;
