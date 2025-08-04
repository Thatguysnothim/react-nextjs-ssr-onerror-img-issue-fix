import ServerComponent from './Server_component';
import Head from 'next/head'; // Optional if you're using `next/head` with app router

const Page = () => {
  return (
    <>
      <Head>
        <title>❌ Server - Broken Image Demo</title>
        <meta
          name="description"
          content="Demonstration of why <img onError={...} /> does not work with server-side rendering in Next.js."
        />
      </Head>

      <main className="p-8">
        <h1 className="text-2xl font-bold">❌ Broken SSR Image Fallback in Next.js</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          This page demonstrates the issue where <code>{'<img onError={...} />'}</code> does not
          trigger during server-side rendering. Even though the image is invalid, the <code>onError</code> event never fires.
        </p>

        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-4 max-w-2xl">
          <p className="font-semibold">⚠️ Known Bug:</p>
          <p>
            When using SSR, React does not attach `onError` handlers to <code>{'<img>'}</code> if
            the image fails to load before hydration.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Reference: <a href="https://github.com/vercel/next.js/issues/16127" className="underline text-blue-600">next.js#16127</a>
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
