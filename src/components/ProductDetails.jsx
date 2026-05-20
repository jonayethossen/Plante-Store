import { useState } from "react";
import Container from "./Container";

export default function ProductDetails() {
  // সাইজ এবং অ্যাড-অনস ট্র্যাক করার জন্য স্টেট (প্রয়োজনীয় লজিক হ্যান্ডেল করতে পারবেন)
  const [plantSize, setPlantSize] = useState("");
  const [addOns, setAddOns] = useState({
    ceramicPot: false,
    woodenStand: true, // ছবিতে Wooden Stand ডিফল্ট চেকড আছে
  });

  const handleCheckboxChange = (key) => {
    setAddOns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="bg-[#f9f9f9] py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch px-4 md:px-0">
          {/* Left Side: YouTube Video Embed (Takes 7 columns on large screens) */}
          <div className="lg:col-span-7 w-full aspect-video rounded-xl overflow-hidden shadow-md bg-black">
            <iframe
              className="w-full h-full border-none"
              src="https://www.youtube.com/embed/D8xxS2eUtY4" // এখানে আপনার কাঙ্ক্ষিত ভিডিও আইডি বসিয়ে দিন
              title="Monstera Plant Care Tips"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right Side: Product Details Card (Takes 5 columns on large screens) */}
          <div className="lg:col-span-5 bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between">
            <div>
              {/* Product Title & Info */}
              <h1 className="text-3xl font-bold text-[#0f5132] mb-1">
                Monstera Deliciosa
              </h1>
              <p className="text-gray-500 text-sm mb-4">
                Lush tropical plant with iconic split leaves
              </p>

              {/* Price */}
              <div className="text-xl font-bold text-[#128a51] mb-6">
                Tk 150.00
              </div>

              {/* Plant Size Selection */}
              <div className="form-control w-full mb-6">
                <label className="label padding-0 mb-2">
                  <span className="text-sm font-bold text-gray-800">
                    Plant Size
                  </span>
                </label>
                <select
                  className="select select-bordered w-full rounded-md text-gray-600 font-normal focus:outline-none focus:border-[#128a51] h-11 bg-white"
                  value={plantSize}
                  onChange={(e) => setPlantSize(e.target.value)}
                >
                  <option value="" disabled>
                    Select Plant Size
                  </option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>

              {/* Add-ons Checkboxes */}
              <div className="form-control w-full mb-8">
                <label className="label padding-0 mb-2">
                  <span className="text-sm font-bold text-gray-800">
                    Add-ons
                  </span>
                </label>
                <div className="flex flex-col gap-3 pl-1">
                  {/* Ceramic Pot */}
                  <label className="flex items-center gap-3 cursor-pointer text-sm text-gray-700 select-none">
                    <input
                      type="checkbox"
                      checked={addOns.ceramicPot}
                      onChange={() => handleCheckboxChange("ceramicPot")}
                      className="checkbox checkbox-sm rounded-md [--chkbg:#128a51] [--chkfg:white] border-gray-300"
                    />
                    <span>Ceramic Pot (+Tk 50)</span>
                  </label>

                  {/* Wooden Stand */}
                  <label className="flex items-center gap-3 cursor-pointer text-sm text-gray-700 select-none">
                    <input
                      type="checkbox"
                      checked={addOns.woodenStand}
                      onChange={() => handleCheckboxChange("woodenStand")}
                      className="checkbox checkbox-sm rounded-md [--chkbg:#128a51] [--chkfg:white] border-gray-300"
                    />
                    <span>Wooden Stand (+Tk 80)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="btn w-full bg-[#128a51] hover:bg-[#0f7645] text-white font-medium rounded-md py-3 transition-colors duration-200 border-none min-h-0 h-12 text-base shadow-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
