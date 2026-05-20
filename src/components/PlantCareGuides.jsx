import { RiLeafFill } from "react-icons/ri";
import Container from "./Container";

export default function PlantCareGuides() {
  const guides = [
    {
      id: 1,
      title: "Watering Guide",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, qui.",
    },
    {
      id: 2,
      title: "Lightening Essentials",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, magni.",
    },
    {
      id: 3,
      title: "Soil And Fertilizer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, quas.",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16">
      <Container>
        {/* Section Title with Leaf Icon */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <RiLeafFill className="text-3xl text-[#128a51]" />
          <h1 className="text-3xl font-bold text-gray-800">
            Plant Care Guides
          </h1>
        </div>

        {/* Guides Cards Grid - 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="card bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md hover:border-[#128a51]/30 transition-all duration-300"
            >
              {/* Header Title Section with Light Green Background */}
              <div className="bg-[#dcece4] px-6 py-6 border-b border-gray-200 text-center group-hover:bg-[#d2e6dc] transition-colors duration-300">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {guide.title}
                </h2>
              </div>

              {/* Description Section */}
              <div className="p-6 min-h-[140px] flex items-center">
                <p className="text-gray-600 text-base leading-relaxed">
                  {guide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
