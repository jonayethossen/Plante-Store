import { useState } from "react";
import { LuSprout } from "react-icons/lu";
import { FiChevronDown } from "react-icons/fi";
// সেফ এবং স্ট্যাবল আইকন সেট (এরর এড়াতে Gi এবং Lu ব্যবহার করা হয়েছে)
import { GiPlantRoots, GiTreeGrowth } from "react-icons/gi";
import Container from "./Container";

export default function PlantMatchmaker() {
  // ড্রপডাউন স্টেট ম্যানেজমেন্ট
  const [sunlight, setSunlight] = useState("");
  const [careLevel, setCareLevel] = useState("");
  const [petFriendly, setPetFriendly] = useState("");

  // রেজাল্ট স্টোর করার স্টেট
  const [recommendedPlant, setRecommendedPlant] = useState(null);

  // ১০০% এরর-ফ্রি আইকন সহ প্ল্যান্ট ডেটাসেট
  const plantData = [
    {
      sunlight: "medium",
      careLevel: "beginner", // Low Maintenance
      petFriendly: "yes",
      name: "Banana tree",
      icon: <LuSprout className="w-12 h-12 text-emerald-700" />,
    },
    {
      sunlight: "low",
      careLevel: "beginner",
      petFriendly: "no",
      name: "Snake Plant (Sansevieria)",
      icon: <GiPlantRoots className="w-12 h-12 text-green-800" />,
    },
    {
      sunlight: "bright",
      careLevel: "beginner",
      petFriendly: "yes",
      name: "Spider Plant",
      icon: <GiTreeGrowth className="w-12 h-12 text-amber-500" />,
    },
    {
      sunlight: "medium",
      careLevel: "intermediate",
      petFriendly: "no",
      name: "Monstera Deliciosa",
      icon: <LuSprout className="w-12 h-12 text-teal-700" />,
    },
  ];

  // কুইজ সাবমিট হ্যান্ডলার
  const handleFindPlants = (e) => {
    e.preventDefault();

    const match = plantData.find(
      (plant) =>
        plant.sunlight === sunlight &&
        plant.careLevel === careLevel &&
        plant.petFriendly === petFriendly,
    );

    if (match) {
      setRecommendedPlant({ name: match.name, icon: match.icon });
    } else {
      // কোনো স্পেসিফিক ম্যাচ না পেলে ডিফল্ট সেফ অপশন
      setRecommendedPlant({
        name: "Money Plant (Pothos)",
        icon: <LuSprout className="w-12 h-12 text-emerald-600" />,
      });
    }
  };

  return (
    <section className="bg-white py-12">
      <Container>
        {/* items-stretch এর কারণে কার্ড দুটির হাইট সবসময় সমান থাকবে */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-6xl mx-auto px-4">
          {/* BAM PASHER QUIZ CARD */}
          <div className="bg-white rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden text-left flex flex-col justify-between">
            <div>
              {/* হেডার */}
              <div className="bg-[#d1e7dd] px-6 py-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Find Your Perfect Plant!
                </h2>
              </div>

              <form onSubmit={handleFindPlants} className="p-6 space-y-5">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Take our{" "}
                  <span className="font-bold text-gray-900">
                    Plant Matchmaker Quiz
                  </span>{" "}
                  and discover plants recommended just for your space and
                  lifestyle.
                </p>

                {/* Question 1: Sunlight */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    How much sunlight does your space get?
                  </label>
                  <div className="relative">
                    {/* এখানে ক্লোজিং ট্যাগটি ফিক্স করা হয়েছে */}
                    <select
                      value={sunlight}
                      onChange={(e) => setSunlight(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 rounded border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 text-sm text-gray-700 appearance-none cursor-pointer pr-10"
                    >
                      <option value="">Select One</option>
                      <option value="low">Low Light (Indirect)</option>
                      <option value="medium">Medium Light</option>
                      <option value="bright">Bright Direct Sunlight</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                      <FiChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Question 2: Care Level */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Preferred Care Level
                  </label>
                  <div className="relative">
                    <select
                      value={careLevel}
                      onChange={(e) => setCareLevel(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 rounded border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 text-sm text-gray-700 appearance-none cursor-pointer pr-10"
                    >
                      <option value="">Select One</option>
                      <option value="beginner">Low Maintenance</option>
                      <option value="intermediate">
                        Moderate (Regular watering)
                      </option>
                      <option value="expert">Expert (High maintenance)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                      <FiChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Question 3: Pet Friendly */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Need pet-friendly plants?
                  </label>
                  <div className="relative">
                    <select
                      value={petFriendly}
                      onChange={(e) => setPetFriendly(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 rounded border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 text-sm text-gray-700 appearance-none cursor-pointer pr-10"
                    >
                      <option value="">Select One</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                      <FiChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* সাবমিট বাটন */}
                <button
                  type="submit"
                  className="w-full bg-[#198754] hover:bg-[#157347] text-white font-medium py-2.5 px-4 rounded transition-all duration-150 active:scale-[0.99] text-center"
                >
                  Find My plants
                </button>
              </form>
            </div>
          </div>

          {/* DAN PASHER RECOMMENDATION CARD */}
          <div className="bg-[#cff4fc] border border-[#b6effc] rounded-md flex flex-col items-center overflow-hidden">
            <div className="w-full bg-[#cff4fc] py-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Recommended Plants For You
              </h3>
            </div>

            {/* কন্টেন্ট এরিয়া */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 w-full pb-16">
              {recommendedPlant ? (
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="text-emerald-800">
                    {recommendedPlant.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-800 capitalize">
                    {recommendedPlant.name}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="text-emerald-800">
                    <LuSprout className="w-12 h-12" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
