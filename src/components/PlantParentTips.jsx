import { FaUserCircle } from "react-icons/fa";
import Container from "./Container";

export default function PlantParentTips() {
  const tips = [
    {
      id: 1,
      name: "Rafiul",
      role: "Indoor Gardener",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ullam.",
      avatar: null, // প্রয়োজন অনুযায়ী ইমেজ ইমপোর্ট করে এখানে ভ্যারিয়েবল বসাতে পারবেন
    },
    {
      id: 2,
      name: "Rafiul",
      role: "Indoor Gardener",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ullam.",
      avatar: null,
    },
    {
      id: 3,
      name: "Rafiul",
      role: "Indoor Gardener",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ullam.",
      avatar: null,
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Plant Parent Tips
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Share your Monstera care experience and inspire fellow plant parents
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 px-4 md:px-0">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="card bg-white rounded-xl border border-gray-200 pt-14 pb-8 px-6 flex flex-col items-center text-center relative shadow-sm group hover:shadow-md transition-all duration-300"
            >
              {/* Overlapping Profile Avatar */}
              <div className="w-24 h-24 rounded-full bg-[#a7f3d0]/80 flex items-center justify-center absolute -top-12 left-1/2 -translate-x-1/2 border-4 border-[#f9f9f9] overflow-hidden shadow-sm transition-transform duration-500 group-hover:scale-105">
                {tip.avatar ? (
                  <img
                    src={tip.avatar}
                    alt={tip.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="w-14 h-14 text-[#128a51]" />
                )}
              </div>

              {/* User Identity */}
              <h3 className="text-2xl font-bold text-gray-800 mb-0.5">
                {tip.name}
              </h3>
              <p className="text-sm font-medium text-gray-400 mb-4">
                {tip.role}
              </p>

              {/* User Feedback/Comment */}
              <p className="text-sm text-gray-600 leading-relaxed max-w-[280px]">
                {tip.comment}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
