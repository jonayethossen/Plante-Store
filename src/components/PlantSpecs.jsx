import Container from "./Container";

export default function PlantSpecs() {
  // ডাটা রিইউজেবিলিটি এবং বেস্ট প্র্যাকটিসের জন্য টেবিল ডাটা অবজেক্ট
  const specifications = [
    { label: "Light Requirement", value: "Bright, indirect sunlight" },
    { label: "Watering", value: "Once a week (allow soil to dry)" },
    { label: "Toxicity", value: "Toxic to pets" },
    { label: "Repotting", value: "Every 1/2 years" }, // ছবিতে Reporting লেখা আছে, তবে স্ট্যান্ডার্ড অনুযায়ী Repotting করা ভালো
  ];

  return (
    <section className="bg-[#f9f9f9] py-12">
      <Container>
        {/* Section Heading */}
        <div className="mb-6 px-4 md:px-0">
          <h2 className="text-3xl font-bold text-gray-800">Plant Details</h2>
        </div>

        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-0 items-start">
          {/* Left Side: Specifications Table (Takes 7 columns on large screens) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="table w-full border-collapse">
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 last:border-none hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      <td className="w-2/5 font-bold text-gray-800 py-4 px-6 border-r border-gray-200 bg-gray-50/30">
                        {spec.label}
                      </td>
                      <td className="text-gray-600 py-4 px-6">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Side: Care Info Box (Takes 5 columns on large screens) */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-gray-200 p-8 shadow-sm min-h-[230px] flex flex-col justify-center gap-6">
            {/* Care Level */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Care Level
              </h3>
              <p className="text-gray-600 text-base">Easy to Moderate</p>
            </div>

            {/* Best For */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Best for</h3>
              <p className="text-gray-600 text-base">Living rooms, offices</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
