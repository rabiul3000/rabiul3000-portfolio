import React from "react";
import { NavLink } from "react-router";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "motion/react";
import myCV from "../../assets/cv.pdf";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const Navbar = () => {
  const handleClose = () => {
    document.getElementById("my-drawer-4").checked = false;
  };

  const navItems = [
    { to: "/", label: "HOME" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/about", label: "ABOUT" },
    { to: "/skills", label: "SKILLS" },
    { to: "/contact", label: "CONTACT" },
  ];

  const links = (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={handleClose}
          className="hover:text-primary transition-colors duration-200"
        >
          {item.label}
        </NavLink>
      ))}

      {/* Resume button for desktop */}
      <a
        href={myCV}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline-block border p-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
      >
        RESUME
      </a>
    </>
  );

  return (
    <div className="lg:py-6 p-4 w-full gap-8 flex lg:justify-around justify-between items-center font-bold bg-blue-50 fixed z-10">
      <div className="text-3xl">
        <span className="text-[#1877f2]">R</span>
        <span className="text-neutral">abiul</span>
      </div>

      <div className="flex gap-8 items-end">
        {/* Desktop nav */}
        <div className="lg:flex gap-8 items-center hidden">{links}</div>

        {/* Mobile drawer */}
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button lg:hidden">
              <BsThreeDotsVertical className="cursor-pointer text-mod text-4xl font-bold" />
            </label>
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            {/* Sidebar Content */}
            <div className="bg-base-200 text-base-content text-lg min-h-full w-80 px-4 py-6 flex flex-col gap-4 relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-2xl p-1 rounded-full hover:bg-gray-300 transition"
              >
                <AiOutlineClose />
              </button>

              {/* Animate nav items */}
              <motion.ul
                className="menu flex flex-col gap-4 mt-10"
                initial="hidden"
                animate="visible"
                variants={listVariants}
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.to}
                    variants={itemVariants}
                    transition={{ duration: 0.4 }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={handleClose}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}

                {/* Resume button for mobile */}
                <motion.li
                  variants={itemVariants}
                  transition={{ duration: 0.4 }}
                >
                  <a
                    href={myCV}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200 block text-center"
                  >
                    RESUME
                  </a>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
