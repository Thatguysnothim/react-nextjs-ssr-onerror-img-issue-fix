import React, { useState } from 'react';

const ImageWrapper = ({
  src,
  alt,
  fallbackSrc,
  className="",
  ssrSafe = false,
  ...imgProps
}) => {
  // Check if we are in a server environment
  // (window is undefined during SSR)
  const isServer = typeof window === 'undefined';

  // Determine whether to render using the SSR-safe approach.
  // You can either force it via the ssrSafe prop or automatically if on the server.
  const useDangerousHTML = ssrSafe || isServer;

  // Client-side state to handle loading errors
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  // If we are in SSR-safe mode, we output raw HTML. This bypasses onError.
  if (useDangerousHTML) {
    // Note: When using dangerouslySetInnerHTML the onError or other props are not available.
    // Make sure that your use-case really requires this approach.
    // const markup = `<img src="${src}" alt="${alt}" />`;
    const markup = `<img
      src="${src}"
      alt="${alt}"
      class="${className}"
      ${{...imgProps}}
    />`
    return <div dangerouslySetInnerHTML={{ __html: markup }} />;
  }

  // In a normal client-side render, render the image element with a standard onError handler.
  return (
    <img
      src={hasError && fallbackSrc ? fallbackSrc : src}
      alt={alt}
      onError={handleError}
      {...imgProps}
    />
  );
};

export default ImageWrapper;
