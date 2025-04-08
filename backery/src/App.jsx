import { useEffect } from "react";

const menuItems = ["Home", "Menu", "Catering", "About Us", "Location"];

function Button({ children, className = "" }) {
  return (
    <button className={`border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition ${className}`}>
      {children}
    </button>
  );
}

export default function HomePage() {
  useEffect(() => {
    document.title = "Carolina Cafe & Bakery";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-mono">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl">👨‍🍳</span>
          <h1 className="text-xl font-bold">CAROLINA<br />CAFE & BAKERY</h1>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <a href="#" key={item} className="hover:underline">
              {item}
            </a>
          ))}
          <Button>Order Online</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative flex-grow flex items-center justify-center overflow-hidden">
        {/* Center Image */}
        <img
          src="src/image.png"
          alt="stacked sandwich"
          className="z-10 w-[300px] md:w-[400px] lg:w-[500px]"
        />

        {/* Text - Left */}
        <div className="absolute left-8 top-1/3 text-4xl sm:text-5xl font-extrabold leading-tight">
          <p>SMELLS<br />LIKE<br />HOME</p>
        </div>

        {/* Text - Right */}
        <div className="absolute right-8 top-1/3 text-4xl sm:text-5xl font-extrabold text-right leading-tight">
          <p>TASTES<br />LIKE<br />HEAVEN</p>
        </div>

        {/* Subtext */}
        <div className="absolute left-8 bottom-24 text-sm max-w-xs">
          <p>
            Warm aromas, fresh-baked delights, and handcrafted coffee—your cozy escape for sweet
            moments and savory cravings!
          </p>
        </div>

        {/* Scroll Down Circle */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-center">
          <div className="w-24 h-24 border border-black rounded-full flex items-center justify-center">
            <div className="text-2xl">↓</div>
          </div>
          <p className="mt-2 tracking-widest text-[10px] uppercase">Scroll Down</p>
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-sm text-gray-500">
        © 2025 Carolina Cafe & Bakery. All rights reserved.
      </footer>
    </div>
  );
}
