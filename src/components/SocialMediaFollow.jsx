import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  FiCheckCircle,
  FiCompass,
  FiLayers,
  FiPlayCircle,
  FiCamera,
  FiVideo,
} from "react-icons/fi";
import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট

export default function SocialMediaFollow() {
  const socialPlatforms = [
    {
      id: 1,
      title: "Facebook",
      icon: <FaFacebookF className="w-6 h-6 text-blue-600" />,
      iconBg: "bg-blue-50",
      features: [
        {
          icon: <FiCheckCircle className="w-4 h-4 text-emerald-600" />,
          text: "Weekly plant care tips",
        },
        {
          icon: <FiLayers className="w-4 h-4 text-emerald-600" />,
          text: "Customer success stories",
        },
        {
          icon: <FiCamera className="w-4 h-4 text-emerald-600" />,
          text: "Behind-the-scenes updates",
        },
      ],
      buttonText: "Visit Facebook",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-100",
      borderColor: "hover:border-blue-200",
      link: "https://www.facebook.com", // আপনার ফেসবুক পেজের লিংক এখানে দিন
    },
    {
      id: 2,
      title: "Instagram",
      icon: <FaInstagram className="w-6 h-6 text-pink-600" />,
      iconBg: "bg-pink-50",
      features: [
        {
          icon: <FiCamera className="w-4 h-4 text-emerald-600" />,
          text: "Aesthetic plant photos",
        },
        {
          icon: <FiVideo className="w-4 h-4 text-emerald-600" />,
          text: "Reels: care hacks & growth",
        },
        {
          icon: <FiCompass className="w-4 h-4 text-emerald-600" />,
          text: "Daily nursery life moments",
        },
      ],
      buttonText: "Follow on Instagram",
      buttonStyle:
        "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-95 text-white shadow-pink-100",
      borderColor: "hover:border-pink-200",
      link: "https://www.instagram.com", // আপনার ইনস্টাগ্রাম প্রোফাইলের লিংক এখানে দিন
    },
    {
      id: 3,
      title: "YouTube",
      icon: <FaYoutube className="w-6 h-6 text-red-600" />,
      iconBg: "bg-red-50",
      features: [
        {
          icon: <FiPlayCircle className="w-4 h-4 text-emerald-600" />,
          text: "Step-by-step care guides",
        },
        {
          icon: <FiLayers className="w-4 h-4 text-emerald-600" />,
          text: "Potting & repotting videos",
        },
        {
          icon: <FiVideo className="w-4 h-4 text-emerald-600" />,
          text: "Behind-the-scenes tours",
        },
      ],
      buttonText: "Watch on YouTube",
      buttonStyle: "bg-gray-900 hover:bg-black text-white shadow-gray-200",
      borderColor: "hover:border-gray-400",
      link: "https://www.youtube.com", // আপনার ইউটিউব চ্যানেলের লিংক এখানে দিন
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f4f9f6] to-[#e8f2ec] py-24">
      <Container>
        {/* হেডার সেকশন */}
        <div className="text-center mb-16 max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Connect With Our Community
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed">
            Join us across platforms for daily green inspiration, expert plant
            care tips, and exclusive behind-the-scenes insights.
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* মডার্ন কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-0">
          {socialPlatforms.map((platform) => (
            <div
              key={platform.id}
              className={`bg-white/80 backdrop-blur-md rounded-2xl p-8 flex flex-col border border-gray-200/60 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${platform.borderColor}`}
            >
              {/* টপ সেকশন: ব্র্যান্ড আইকন ও নাম */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div
                  className={`w-12 h-12 ${platform.iconBg} rounded-xl flex items-center justify-center shadow-inner`}
                >
                  {platform.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
                  {platform.title}
                </h3>
              </div>

              {/* ফিচারের লিস্ট */}
              <ul className="space-y-4 mb-8 flex-grow text-left">
                {platform.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-600 text-sm md:text-base flex items-start gap-3 group"
                  >
                    <span className="mt-0.5 transition-transform duration-200 group-hover:scale-110">
                      {feature.icon}
                    </span>
                    <span className="font-medium">{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* মডার্ন অ্যাকশন লিংক (বাটন ডিজাইন) */}
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl font-semibold tracking-wide text-center transition-all duration-300 shadow-lg hover:shadow-none block ${platform.buttonStyle}`}
              >
                {platform.buttonText}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
