import plant1 from "../assets/ExplorePlants/p-1.jpg";
import plant2 from "../assets/ExplorePlants/p-2.jpg";
import plant3 from "../assets/ExplorePlants/p-3.jpg";
import plant4 from "../assets/ExplorePlants/p-4.jpg";
import Container from "./Container";

export default function ExplorePlants() {
  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      category: "Indoor",
      image: plant1,
    },
    {
      id: 2,
      name: "Monstera Deliciosa",
      category: "Outdoor",
      image: plant2,
    },
    {
      id: 3,
      name: "Calathea",
      category: "Tropical",
      image: plant3,
    },
    {
      id: 4,
      name: "Philodendron",
      category: "Indoor",
      image: plant4,
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16">
      <Container>
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Explore Our Green World
          </h1>
          <p className="text-gray-500 text-sm tracking-wide">
            Indoor . Outdoor . Tropical
          </p>
        </div>

        {/* Plant Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-0">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="card bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Image & Badge Container */}
              <figure className="relative h-64 w-full overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                {/* Category Badge overlayed on image */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="bg-[#128a51] text-white text-[13px] font-medium px-4 py-1 rounded-md shadow-sm">
                    {plant.category}
                  </span>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
