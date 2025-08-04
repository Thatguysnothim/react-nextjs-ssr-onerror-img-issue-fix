// app/server-fix-seo/page.jsx
import React from 'react';
import getImgSrc from './image.util';

export const metadata = {
  title: '✅ Server Fix with SEO – Server-side Image Validation',
  description:
    'Robust SEO-friendly solution that validates image URLs on the server using a HEAD request in Next.js.',
  openGraph: {
    title: '✅ Server Fix with SEO – Server-side Image Validation',
    description:
      'Robust SEO-friendly solution that validates image URLs on the server using a HEAD request in Next.js.',
    type: 'article',
  },
};

const fallbackImgSrc =
  'https://www.racksolutions.com/news/app/uploads/AdobeStock_90603827-scaled.jpeg';

const Page = async () => {
  const imageUrl = await getImgSrc('https://wrong-link.com/image.jpg', fallbackImgSrc);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">✅ Server Fix with SEO (HEAD Validation)</h1>
      <p className="text-gray-700 mt-2 max-w-3xl">
        This page demonstrates a <strong>server-side fix</strong> using a <code>HEAD</code> request to
        validate whether an image URL returns a valid image before rendering. This ensures the image
        is correct even for bots and SSR.
      </p>

      {/* When to use */}
      <section className="mt-6 border-l-4 border-green-500 bg-green-50 p-4 max-w-3xl">
        <h2 className="font-semibold">When to use this</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>SEO is critical and bots must see correct images on first render</li>
          <li>You want to avoid broken thumbnails, Open Graph previews, etc.</li>
          <li>Your backend has access to external images (no CORS/network blocking)</li>
        </ul>
      </section>

      {/* Limitations */}
      <section className="mt-4 border-l-4 border-yellow-500 bg-yellow-50 p-4 max-w-3xl">
        <h2 className="font-semibold">Limitations</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>Introduces extra server request during SSR</li>
          <li>May slightly slow down TTFB if many images are validated</li>
          <li>Does not retry if image becomes broken after build (not dynamic unless SSR)</li>
        </ul>
      </section>

      {/* Demo */}
      <section className="mt-8">
        <h2 className="font-semibold mb-3">Demo</h2>
        <div className="rounded border p-4 inline-block">
          <img
            src={imageUrl}
            alt="Validated image"
            className="w-64 h-40 object-cover"
          />
        </div>
      </section>

      {/* Usage code block */}
      <section className="mt-8 max-w-3xl">
        <h3 className="font-semibold mb-2">Usage</h3>
        <pre className="bg-gray-100 p-4 text-sm overflow-auto rounded">
{`import getImgSrc from './image.util';

const imageUrl = await getImgSrc("https://wrong-link.com/image.jpg", fallbackImgSrc);

// Render in your component
<img src={imageUrl} alt="..." />`}
        </pre>
      </section>

      {/* Navigation to other methods */}
      <section className="mt-10 text-sm text-gray-600">
        <p>
          👉 Compare with{' '}
          <a href="/server" className="underline text-blue-600">/server</a> (broken onError),
          or{' '}
          <a href="/server-fix" className="underline text-blue-600">/server-fix</a> (client wrapper).
        </p>
      </section>
    </main>
  );
};

export default Page;
