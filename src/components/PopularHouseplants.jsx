import { RiPlantLine } from "react-icons/ri";
import plant1 from "../assets/ExplorePlants/p-5.jpg";
import plant2 from "../assets/ExplorePlants/p-6.jpg";
import plant3 from "../assets/ExplorePlants/p-7.jpg";
import plant4 from "../assets/ExplorePlants/p-8.jpg";
import Container from "./Container";

export default function PopularHouseplants() {
  const popularPlants = [
    {
      id: 1,
      name: "Monstera",
      description: "Easy care, bold tropical leaves.",
      image: plant1,
    },
    {
      id: 2,
      name: "Snake Plant",
      description: "Low light, bold tropical leaves.",
      image: plant2,
    },
    {
      id: 3,
      name: "Pothos Plant",
      description: "Low light, bold tropical leaves.",
      image: plant3,
    },
    {
      id: 4,
      name: "Peace Lily",
      description: "Low light, bold tropical leaves.",
      image: plant4,
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16">
      <Container>
        <div className="flex items-center justify-center gap-2 mb-12">
          <RiPlantLine className="text-3xl text-[#128a51]" />
          <h1 className="text-3xl font-bold text-gray-800">
            Popular Houseplant
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-0">
          {popularPlants.map((plant) => (
            <div
              key={plant.id}
              className="card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              <figure className="h-60 w-full overflow-hidden bg-gray-50">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </figure>

              {/* Plant Details */}
              <div className="flex flex-col">
                {/* Title Section with Light Background and Bottom Border */}
                <div className="bg-gray-50/70 px-5 py-4 border-b border-gray-200/60">
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-[#128a51] transition-colors duration-200">
                    {plant.name}
                  </h2>
                </div>

                {/* Description Section */}
                <div className="p-5 min-h-[90px]">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {plant.description}
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
