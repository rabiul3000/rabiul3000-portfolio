import React from "react";
import { NavLink } from "react-router";
import { BsThreeDotsVertical } from "react-icons/bs";
import Container from "../Container/Container";

const Navbar = () => {
  const links = (
    <>
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/projects'>PROJECTS</NavLink>
      <NavLink to='/about'>ABOUT</NavLink>
      <NavLink to='/skills'>SKILLS</NavLink>
      <NavLink to='/contact'>CONTACT</NavLink>
    </>
  );
  return (
    <div className='lg:py-14 py-4 pb-20  w-8/12 mx-auto flex justify-between items-center font-bold text-slate-500'>
      <div className='text-3xl'>
        <span className='text-[#1877f2]'>R</span>
        <span className='text-neutral'>abiul</span>
      </div>
      <div className='flex gap-8 items-end'>
        <div className='lg:flex gap-8 items-end hidden'>{links}</div>

        <div className='drawer drawer-end'>
          <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content'>
            {/* Page content here */}
            <label htmlFor='my-drawer-4' className='drawer-button lg:hidden'>
              <BsThreeDotsVertical className='cursor-pointer text-mod text-4xl font-bold' />
            </label>
          </div>
          <div className='drawer-side'>
            <label
              htmlFor='my-drawer-4'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <ul className='menu bg-base-200 text-base-content text-lg min-h-full w-80 px-4 py-20 flex flex-col gap-4'>
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
