import React from "react";
import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // ফর্ম সাবমিট হ্যান্ডেল করার লজিক এখানে লিখবেন
    console.log("Form submitted");
  };

  return (
    <section className="bg-[#f9f9f9] py-20">
      <Container>
        {/* ফর্মের মেইন কন্টেইনার */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          {/* হেডিং সেকশন */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-semibold text-gray-800 mb-6">
              Contact Form
            </h1>
            <hr className="border-gray-200" />
          </div>

          {/* ফর্ম এলিমেন্ট */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ফুল নেম ইনপুট */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-gray-700 font-medium text-base"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all text-gray-800"
                required
              />
            </div>

            {/* ইমেইল ইনপুট */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-gray-700 font-medium text-base"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all text-gray-800"
                required
              />
            </div>

            {/* মেসেজ টেক্সটএরিয়া */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-gray-700 font-medium text-base"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Write your message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all text-gray-800 resize-y"
                required
              ></textarea>
            </div>

            {/* সাবমিট বাটন */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#128a51] hover:bg-[#128a51] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-sm text-base"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
