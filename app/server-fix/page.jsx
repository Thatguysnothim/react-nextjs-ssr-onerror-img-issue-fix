import React from 'react';
import ServerComponent from './Server_component';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>🛠 Server-Fix - Client-Side Image Wrapper</title>
        <meta
          name="description"
          content="A workaround using a client-side ImageWrapper component to handle image fallbacks in Next.js."
        />
      </Head>

      <main className="p-8">
        <h1 className="text-2xl font-bold">🛠 Client-Side Image Wrapper Fix</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          This approach wraps the <code>{'<img>'}</code> tag inside a client component
          (<strong>ImageWrapper</strong>) to handle broken image fallbacks.
          It works well for users with JavaScript enabled, but <strong>does not solve SEO</strong> issues
          because search bots may still see the broken image.
        </p>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4 max-w-2xl">
          <p className="font-semibold">⚠️ Limitation:</p>
          <p>
            This method relies on JavaScript running in the browser. Bots or crawlers that don’t execute JS will still see broken images.
          </p>
        </div>

        <div className="mt-6">
          <ServerComponent />
        </div>
      </main>
    </>
  );
};

export default Page;
