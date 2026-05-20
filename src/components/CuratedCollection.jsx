import { RiLeafFill } from "react-icons/ri";
// আপনার প্রোজেক্টের সঠিক পাথ অনুযায়ী ইমেজগুলো ইমপোর্ট করুন
import collection1 from "../assets/ExplorePlants/p-9.jpg";
import collection2 from "../assets/ExplorePlants/p-10.jpg";
import collection3 from "../assets/ExplorePlants/p-11.jpg";
import Container from "./Container";

export default function CuratedCollection() {
  const collections = [
    {
      id: 1,
      title: "Pet-Friendly Plants",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, qui.",
      image: collection1,
    },
    {
      id: 2,
      title: "Low Maintenance Set",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, magni.",
      image: collection2,
    },
    {
      id: 3,
      title: "Air-Purifying Plants",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, quas.",
      image: collection3,
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16">
      <Container>
        {/* Section Title with Leaf Icon */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <RiLeafFill className="text-3xl text-[#128a51]" />
          <h1 className="text-3xl font-bold text-gray-800">
            Curated Collection
          </h1>
        </div>

        {/* Collection Cards Grid - 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
          {collections.map((item) => (
            <div
              key={item.id}
              className="card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              {/* Image Container with Zoom Effect */}
              <figure className="h-72 w-full overflow-hidden bg-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </figure>

              {/* Card Content Details */}
              <div className="flex flex-col">
                {/* Title Section with Light Background and Bottom Border */}
                <div className="bg-gray-50/70 px-6 py-4 border-b border-gray-200/60">
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-[#128a51] transition-colors duration-200">
                    {item.title}
                  </h2>
                </div>

                {/* Description Section */}
                <div className="p-6 min-h-[110px]">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
