import { RiTeamFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa"; // ছবিতে থাকা অবতারের মতো আইকন (প্রয়োজনে ইমেজ ইমপোর্ট করতে পারেন)
import Container from "./Container";

export default function MeetTheTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Ayesha Rahman",
      role: "Founder & Plant Expert",
      description:
        "Specialize in Indoor plants and sustainable growing practices.",
      avatar: null, // এখানে আপনার ইমপোর্ট করা ইমেজ ভ্যারিয়েবল (যেমন: member1) বসাতে পারেন
    },
    {
      id: 2,
      name: "Ayesha Rahman",
      role: "Founder & Plant Expert",
      description:
        "Specialize in Indoor plants and sustainable growing practices.",
      avatar: null,
    },
    {
      id: 3,
      name: "Ayesha Rahman",
      role: "Founder & Plant Expert",
      description:
        "Specialize in Indoor plants and sustainable growing practices.",
      avatar: null,
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16">
      <Container>
        {/* Top Banner Section */}
        <div className="bg-[#dbebff] rounded-xl p-8 text-center mb-12 border border-blue-100">
          <div className="flex items-center justify-center gap-2 mb-2">
            <RiTeamFill className="text-3xl text-[#128a51]" />
            <h1 className="text-3xl font-bold text-gray-800">
              Meet The People Behind The Green
            </h1>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Passionate plant enthusiast who make Blooming Oasis possible
          </p>
        </div>

        {/* Team Cards Grid - 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="card bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center group hover:shadow-md transition-all duration-300"
            >
              {/* Profile Image / Avatar Container */}
              <div className="w-32 h-32 rounded-full bg-[#a7f3d0]/60 flex items-center justify-center mb-6 overflow-hidden transition-transform duration-500 group-hover:scale-105">
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="w-20 h-20 text-[#128a51]" />
                )}
              </div>

              {/* Member Details */}
              <h2 className="text-2xl font-bold text-[#128a51] mb-1 group-hover:text-[#0f7645] transition-colors duration-200">
                {member.name}
              </h2>
              <p className="text-sm font-medium text-gray-500 mb-4">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed max-w-[250px]">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
