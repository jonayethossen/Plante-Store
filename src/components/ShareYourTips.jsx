import { useState } from "react";
import Container from "./Container";

export default function ShareYourTips() {
  // ফর্ম ডেটা হ্যান্ডেল করার জন্য স্টেট
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    photo: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // আপনার সাবমিট লজিক বা এপিআই কল এখানে করতে পারেন
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="bg-[#f9f9f9] py-16">
      <Container>
        {/* Section Title with Bottom Border Accent */}
        <div className="text-center mb-12 max-w-4xl mx-auto border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold text-gray-800">Share Your Tips</h1>
        </div>

        {/* Form Container Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 p-8 md:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Name Input Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
              <label className="md:col-span-3 text-base font-bold text-gray-800">
                Name
              </label>
              <div className="md:col-span-9">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="input input-bordered w-full rounded-md text-gray-600 font-normal bg-white border-gray-300 h-11 focus:outline-none focus:border-[#128a51]"
                  required
                />
              </div>
            </div>

            {/* Experience Textarea Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-4">
              <label className="md:col-span-3 text-base font-bold text-gray-800 pt-2">
                Your Experience
              </label>
              <div className="md:col-span-9">
                <textarea
                  placeholder="Share Watering, light or growth tips"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="textarea textarea-bordered w-full rounded-md text-gray-600 font-normal bg-white border-gray-300 min-h-[100px] focus:outline-none focus:border-[#128a51] leading-relaxed"
                  required
                ></textarea>
              </div>
            </div>

            {/* Photo Upload Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
              <label className="md:col-span-3 text-base font-bold text-gray-800">
                Upload Photo
              </label>
              <div className="md:col-span-9">
                <input
                  type="file"
                  onChange={(e) =>
                    setFormData({ ...formData, photo: e.target.files[0] })
                  }
                  className="file-input file-input-bordered w-full rounded-md text-gray-600 font-normal bg-white border-gray-300 h-11 focus:outline-none focus:border-[#128a51] file-input-md file:bg-gray-50 file:text-gray-700 file:border-0 file:border-r file:border-gray-300 file:mr-4 file:px-4 file:h-full cursor-pointer"
                />
              </div>
            </div>

            {/* Submit Button Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-2">
              <div className="hidden md:col-span-3"></div>{" "}
              {/* বাম পাশের এলাইনমেন্ট ফাঁকা রাখার জন্য স্পেসার */}
              <div className="md:col-span-9">
                <button
                  type="submit"
                  className="btn btn-outline w-full border-[#128a51] text-[#128a51] hover:bg-[#128a51] hover:border-[#128a51] hover:text-white font-medium rounded-md py-2.5 transition-all duration-200 min-h-0 h-11 text-base"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
