import { useState, useEffect } from "react";
import Container from "./Container"; // আপনার তৈরি রেসপন্সিভ কন্টেইনার

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // প্রতি সেকেন্ডে সময় আপডেট করার জন্য টাইমার
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // মেমোরি লিক রোধ করতে ক্লিয়ার ইন্টারভাল
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-neutral text-neutral-content py-10 border-t border-gray-100">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* প্রোফাইল অংশ */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold">Jonayet Hossen Moman</h3>
            <p className="text-sm opacity-80">OLab Institute</p>
          </div>

          {/* রিয়েল-টাইম ডেট এবং টাইম অংশ */}
          <div className="flex flex-col items-center md:items-end bg-black/10 p-4 rounded-lg border border-white/5">
            <p className="text-sm tracking-widest uppercase opacity-70">
              {currentTime.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="text-3xl font-mono font-bold text-primary">
              {currentTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
        </div>

        {/* নিচের কপিরাইট অংশ */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs opacity-50">
          © {currentTime.getFullYear()} All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
