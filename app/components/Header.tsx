// import { NavLink } from "react-router-dom";
// import Button from "./Button";
// import { useState, useEffect } from "react";
// import WhatsappLink from "./WhatsapLink";
// import NavigationLinks from "./NavigationLinks";
// import { VscListSelection } from "react-icons/vsc";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`flex items-center justify-between shadow-lg py-6 px-2 sm:px-8 transition-all duration-750 ${
//         isScrolled
//           ? "bg-white/60  backdrop-blur-sm"
//           : "bg-transparent text-amber-400/90"
//       }`}
//     >
//       <NavLink
//         to="/"
//         className="text-green-600 font-bold text-2xl bg-black border border-green-600 rounded-full size-12 flex items-center justify-center"
//       >
//         V
//       </NavLink>

//       {/* Desktop Navigation */}
//       <nav className="space-x-2 hidden sm:block">
//         <NavigationLinks />
//       </nav>

//       <WhatsappLink extraClasses="hidden lg:block">
//         <Button>Buy Palm Oil</Button>
//       </WhatsappLink>

//       {/* Mobile Navigation */}
//       <button
//         className="text-2xl sm:hidden bg-amber-400/50 text-black cursor-pointer p-2 rounded hover:bg-amber-400 hover:text-white"
//         onClick={() => setIsSidebarOpen(true)}
//       >
//         <VscListSelection />
//       </button>

//       {isSidebarOpen && (
//         <div className="sm:hidden fixed inset-0 bg-black/50 z-100 h-screen flex justify-end">
//           <nav className="bg-white w-2/3 max-w-[300px] h-full flex flex-col gap-4 p-4">
//             <button
//               className="text-2xl bg-amber-400/50 text-black cursor-pointer p-2 rounded hover:bg-amber-400 hover:text-white"
//               onClick={() => setIsSidebarOpen(false)}
//             >
//               <VscListSelection />
//             </button>
//             <NavigationLinks />
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useState, useEffect } from "react";
import WhatsappLink from "./WhatsapLink";
import { HiMenu, HiX } from "react-icons/hi"; // install react-icons if needed
import NavigationLinks from "./NavigationLinks";

const navigation = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`flex items-center justify-between shadow-lg py-6 px-section transition-all duration-750 ${
          isScrolled
            ? "bg-white/60 dark:bg-black/60 backdrop-blur-sm"
            : "bg-transparent text-amber-400/90"
        }`}
      >
        <NavLink
          to="/"
          className="text-green-600 font-bold text-2xl bg-black border border-green-600 rounded-full size-12 flex items-center justify-center"
        >
          V
        </NavLink>

        {/* Desktop nav */}
        <nav className="space-x-2 hidden sm:block">
          <NavigationLinks />
        </nav>

        <WhatsappLink extraClasses="hidden lg:block">
          <Button>Buy Palm Oil</Button>
        </WhatsappLink>

        {/* Mobile Sidebar */}
        <button
          className="sm:hidden text-3xl"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <HiMenu />
        </button>
      </header>

      {sidebarOpen && (
        <aside
          className={`sm:hidden fixed top-0 right-0 w-2/3 max-w-[300px] h-full bg-white shadow-xl z-50 space-y-5`}
        >
          <div className="flex justify-end items-center">
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
              className="cursor-pointer bg-amber-400 p-3 hover:opacity-70 transition-all duration-500"
            >
              <HiX className="text-2xl" />
            </button>
          </div>
          <nav className="flex flex-col p-2 space-y-4">
            <NavigationLinks isMobile onClick={() => setSidebarOpen(false)} />
          </nav>
        </aside>
      )}

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
