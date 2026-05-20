import { RiTreeFill, RiPlantFill, RiLeafFill } from "react-icons/ri";
import sourcingImg from "../assets/HeroImg/VC_Plant-Stores.jpg";
import Container from "./Container";

export default function ResponsibleSourcing() {
  const practices = [
    {
      id: 1,
      title: "Ethical Plant Cultivation",
      icon: <RiPlantFill className="text-2xl text-[#128a51]" />,
      paragraphs: [
        "Our plants are grown by trusted local nurseries using water-efficient irrigation, healthy soil practices, and minimal chemical treatments.",
        "Our plants are grown by trusted local nurseries using water-efficient irrigation, healthy soil practices, and minimal chemical treatments.",
      ],
    },
    {
      id: 2,
      title: "Eco-Friendly Packaging",
      icon: <RiLeafFill className="text-2xl text-[#128a51]" />,
      paragraphs: [
        "Our plants are grown by trusted local nurseries using water-efficient irrigation, healthy soil practices, and minimal chemical treatments.",
        "Our plants are grown by trusted local nurseries using water-efficient irrigation, healthy soil practices, and minimal chemical treatments.",
      ],
    },
    {
      id: 3,
      title: "Sustainable Partnershipss", // ছবিতে বানানে দুটি 's' আছে, প্রয়োজন অনুযায়ী পরিবর্তন করতে পারেন
      icon: <RiLeafFill className="text-2xl text-[#128a51]" />,
      paragraphs: [
        "Our plants are grown by trusted local nurseries using water-efficient irrigation, healthy soil practices, and minimal chemical treatments.",
      ],
    },
  ];

  return (
    <section className="bg-white py-16">
      <Container>
        {/* Top Banner Section */}
        <div className="bg-[#e0f2fe] rounded-xl p-8 text-center mb-12 border border-sky-100">
          <div className="flex items-center justify-center gap-2 mb-2">
            <RiTreeFill className="text-3xl text-[#128a51]" />
            <h1 className="text-3xl font-bold text-gray-800">
              Responsible Sourcing Practices
            </h1>
          </div>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            At Blooming Oasis, we prioritize sustainability through eco-friendly
            packaging and responsible plant cultivation methods.
          </p>
        </div>

        {/* Content Layout - Split into Practices and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start px-4 md:px-0">
          {/* Left Side: Practices List (Takes 7 columns on large screens) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {practices.map((practice) => (
              <div
                key={practice.id}
                className="flex flex-col gap-3 pb-6 border-b border-gray-100 last:border-none last:pb-0"
              >
                {/* Title with Icon */}
                <div className="flex items-center gap-2">
                  {practice.icon}
                  <h2 className="text-xl font-bold text-gray-800">
                    {practice.title}
                  </h2>
                </div>

                {/* Paragraphs */}
                <div className="flex flex-col gap-4 text-gray-600 text-sm md:text-base leading-relaxed pl-8 text-justify">
                  {practice.paragraphs.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Big Image (Takes 5 columns on large screens) */}
          <div className="lg:col-span-5 h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-md group">
            <img
              src={sourcingImg}
              alt="Responsible Sourcing Garden"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
