import React from "react";
import { NavLink } from "react-router";
import { BsThreeDotsVertical } from "react-icons/bs";
import { motion } from "motion/react";

// Stagger & fade animation for sidebar links
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
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
        <div className="lg:flex gap-8 items-end hidden">{links}</div>

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

            {/* Animate sidebar content */}
            <motion.ul
              className="menu bg-base-200 text-base-content text-lg min-h-full w-80 px-4 py-20 flex flex-col gap-4"
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
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
