// "use client"
// import React, { useState } from "react";
// import Logo from "./logo/Logo";
// import Button from "./authbuttons/Button";
// import ItemList from "./list/ItemList";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="flex flex-wrap items-center justify-between">
//       <div>
//         <Logo steadColor="stead-name" id="1"/>
//       </div>

//       {/* Hamburger Menu Button (Visible on small screens) */}
//       <div className="md:hidden">
//         <button
//           onClick={toggleMenu}
//           className="text-gray-500 hover:text-blue-500 focus:outline-none"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Navigation Items (Visible on medium and larger screens) */}
//       <div className="hidden lg:flex items-center justify-between">
//         <ItemList />
//       </div>

//       {/* Button (Visible on medium and larger screens) */}
//       <div className="hidden lg:flex">
//         <Button />
//       </div>

//       {/* Mobile Menu (Visible on small screens when toggled) */}
//       {isMenuOpen && (
//         <div className="lg:hidden w-full mt-4">
//           <ItemList />
//           <div className="mt-4">
//             <Button />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
"use client";
import React, { useState } from "react";
import Logo from "./logo/Logo";
import Button from "./authbuttons/Button";
import ItemList from "./list/ItemList";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between">
      {/* Logo */}
      <div>
        <Logo steadColor="stead-name" id="1" />
      </div>

      {/* Hamburger Menu Button (Visible on small and medium screens) */}
      <div className="md:flex lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-blue-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Items (Visible on large screens) */}
      <div className="hidden lg:flex items-center justify-between">
        <ItemList />
      </div>

      {/* Button (Visible on large screens) */}
      <div className="hidden lg:flex">
        <Button />
      </div>

      {/* Mobile Menu (Visible on small and medium screens when toggled) */}
      {isMenuOpen && (
        <div className="lg:hidden w-full mt-4">
          <ItemList />
          <div className="mt-4">
            <Button />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
