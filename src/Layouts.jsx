import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Layouts() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="glow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
