// আপনার প্রোজেক্টের সঠিক পাথ অনুযায়ী ইমেজটি ইমপোর্ট করুন
import oasisImg from "../assets/HeroImg/pStore.jpg";
import Container from "./Container";

export default function AboutBloomingOasis() {
  return (
    <section className="bg-[#f9f9f9] py-16">
      <Container>
        {/* Section Title with Flower Icon */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <h1 className="text-3xl font-bold text-gray-800">
            About Blooming Oasis
          </h1>
        </div>

        {/* Content Layout - Split into Text and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 md:px-0">
          {/* Left Side: Paragraphs (Takes 7 columns on large screens) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-gray-600 text-sm md:text-base leading-relaxed text-justify">
            <p>
              &ldquo;Blooming Oasis&rdquo; is a versatile phrase describing
              vibrant, lush, flower-filled gardens, parks (like the famous Ta
              Shee Blooming Oasis in Taiwan), or even a metaphorical lush spot
              in a desert, used as a name for various businesses like
              landscaping services, home decor items, soaps, and artwork,
              symbolizing natural beauty and tranquility. It evokes images of
              abundant flowers, rich greenery, and peaceful escapes, often used
              in branding to convey freshness and life.
            </p>
            <p>
              &ldquo;Blooming Oasis&rdquo; is a versatile phrase describing
              vibrant, lush, flower-filled gardens, parks (like the famous Ta
              Shee Blooming Oasis in Taiwan), or even a metaphorical lush spot
              in a desert, used as a name for various businesses like
              landscaping services, home decor items, soaps, and artwork,
              symbolizing natural beauty and tranquility. It evokes images of
              abundant flowers, rich greenery, and peaceful escapes, often used
              in branding to convey freshness and life.
            </p>
            <p>
              &ldquo;Blooming Oasis&rdquo; is a versatile phrase describing
              vibrant, lush, flower-filled gardens, parks (like the famous Ta
              Shee Blooming Oasis in Taiwan), or even a metaphorical lush spot
              in a desert, used as a name for various businesses like
              landscaping services, home decor items, soaps, and artwork,
              symbolizing natural beauty and tranquility. It evokes images of
              abundant flowers, rich greenery, and peaceful escapes, often used
              in branding to convey freshness and life.
            </p>
          </div>

          {/* Right Side: Image Window (Takes 5 columns on large screens) */}
          <div className="lg:col-span-5 h-full min-h-[350px] lg:min-h-[450px] overflow-hidden rounded-xl shadow-md group">
            <img
              src={oasisImg}
              alt="Blooming Oasis Garden"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
