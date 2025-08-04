const Home = () => {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Next.js SSR Image Fallback Demo</h1>
      <p className="text-gray-600 mt-2">Compare 3 solutions to the SSR image fallback issue</p>
      <CardGrid />
    </main>
  );
};

export default Home;


const Card = ({ title, description, route }) => (
  <div className="border p-4 rounded shadow-md m-4 w-[300px]">
    <h2 className="font-bold text-xl mb-2">{title}</h2>
    <p className="text-gray-700 mb-3">{description}</p>
    <a
      href={route}
      className="text-blue-600 underline"
    >
      View Demo
    </a>
  </div>
);

const CardGrid = () => (
  <div className="flex flex-wrap justify-center mt-10">
    <Card
      title="❌ /server"
      description="Client-side fallback using onError (does NOT work with SSR or bots)."
      route="/server"
    />
    <Card
      title="🛠 /server-fix"
      description="Client component wrapper with conditional rendering fallback image."
      route="/server-fix"
    />
    <Card
      title="✅ /server-fix-seo"
      description="Best SEO fix: image verified server-side using a HEAD request."
      route="/server-fix-seo"
    />
  </div>
);
