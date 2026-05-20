import Container from "./Container";

export default function OurMissionAndPassion() {
  const data = [
    {
      id: 1,
      title: "Our Passion for Plants",
      headerBg: "bg-[#dcece4]", // হালকা সবুজ হেডার ব্যাকগ্রাউন্ড
      hoverHeaderBg: "group-hover:bg-[#d2e6dc]",
      titleColor: "text-[#128a51]", // সবুজ টেক্সট
      paragraphs: [
        "Blooming Oasis started as a small dream by a group of plant lovers who wanted to bring greenery into modern indoor spaces. From apartments to offices, we help people experience the calming beauty of nature without complexity or confusion.",
        "Blooming Oasis started as a small dream by a group of plant lovers who wanted to bring greenery into modern indoor spaces. From apartments to offices, we help people experience the calming beauty of nature without complexity or confusion.",
      ],
    },
    {
      id: 2,
      title: "Our Mission",
      headerBg: "bg-[#fae2e4]", // হালকা পিঙ্ক হেডার ব্যাকগ্রাউন্ড
      hoverHeaderBg: "group-hover:bg-[#f5d2d5]",
      titleColor: "text-[#c2410c]", // ডার্ক অরেঞ্জ/রেডিশ টেক্সট (ছবির মতো)
      paragraphs: [
        "Blooming Oasis started as a small dream by a group of plant lovers who wanted to bring greenery into modern indoor spaces. From apartments to offices, we help people experience the calming beauty of nature without complexity or confusion.",
        "Blooming Oasis started as a small dream by a group of plant lovers who wanted to bring greenery into modern indoor spaces. From apartments to offices, we help people experience the calming beauty of nature without complexity or confusion.",
      ],
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16">
      <Container>
        {/* Two Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
          {data.map((item) => (
            <div
              key={item.id}
              className="card bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              {/* Card Header with Dynamic Background Color */}
              <div
                className={`${item.headerBg} ${item.hoverHeaderBg} px-6 py-5 border-b border-gray-200 text-center transition-colors duration-300`}
              >
                <h2 className={`text-2xl font-bold ${item.titleColor}`}>
                  {item.title}
                </h2>
              </div>

              {/* Card Content with Multiple Paragraphs */}
              <div className="p-8 flex flex-col gap-6 text-gray-600 text-sm md:text-base leading-relaxed text-justify">
                {item.paragraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
