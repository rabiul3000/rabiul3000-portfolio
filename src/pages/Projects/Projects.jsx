import React from "react";
import Container from "../../Components/Container/Container";
import { Link } from "react-router";
import {motion} from 'motion/react'
const Projects = () => {
  const detail = {
    id: "wilfyd8wqy",
    name: "Plantium",
    img: "https://i.ibb.co/h1r4Kfvw/plantium.png",
    title: "This is a Plant management system",
    techs: ["HTML", "CSS", "REACT", "DAISY UI", "TAILWINDCSS"],
    desc: "Plantium is a modern web platform for plant enthusiasts to manage, buy, sell, and donate plants. Built with the latest technologies like React, Node.js, Express, MongoDB, and Firebase Auth, it provides a seamless user experience with a responsive and elegant UI powered by Tailwind CSS and DaisyUI.",
    liveLink: "https://github.com",
    repoLink: "https://github.com",
    challenges: ['Complex Role Management.', 'Secure Real-Time Data Sync.', 'Seamless UX Across Devices.','Integration of Donation Logic.', 'Data Modeling and Filtering.'],
    plans: ["AI-Powered Plant Recommendations.", "Plant Health Tracker.", "In-App Chat & Negotiation.", "Donation leader board & Gamification.","PWA Support & Mobile App."]
  };

  return (
    <Container>
     <div className="px-4 sm:px-6 lg:px-12">
  <motion.div
    className='flex flex-col items-center gap-2 py-10 text-center'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <p className='text-sm sm:text-base font-semibold text-primary'>LATEST</p>
    <h1 className='text-3xl sm:text-5xl lg:text-6xl font-title font-bold text-base-content'>
      My Projects
    </h1>
  </motion.div>

  <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-24'>
    {[1, 2, 3, 4, 5].map((_, index) => (
      <motion.div
        key={index}
        className='card bg-base-200 shadow-md hover:shadow-xl transition-shadow duration-300'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <figure className='relative p-4 overflow-hidden'>
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='rounded-lg h-60 sm:h-72 w-full object-cover'
            src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
            alt='Project Thumbnail'
          />
          <motion.div
            whileHover={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className='absolute inset-0 flex items-center justify-center bg-base-100 bg-opacity-70 text-base-content rounded-lg opacity-0'
          >
            <Link
              to={`/detail/${index}`}
              state={{ id: index }}
              className='font-semibold text-lg'
            >
              Click for Detail
            </Link>
          </motion.div>
        </figure>

        <div className='card-body'>
          <p className='text-sm font-bold text-primary'>PLANTIUM</p>
          <h2 className='card-title text-base-content'>
            A Plant Management Application
          </h2>
        </div>
      </motion.div>
    ))}
  </div>
</div>

    </Container>
  );
};

export default Projects;
