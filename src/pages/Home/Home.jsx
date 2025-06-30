import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Container from "../../Components/Container/Container";
import { motion } from "motion/react";
import { Link } from "react-router";
import Footer from "../../Components/Footer/Footer";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiDaisyui,
} from "react-icons/si";

const floatingIcons = [
  <SiTailwindcss className='text-sky-400' />,
  <SiFirebase className='text-yellow-500' />,
  <SiMongodb className='text-green-500' />,
  <SiExpress className='text-gray-600' />,
  <SiVercel className='text-black' />,
  <SiDaisyui className='text-purple-400' />,
  <SiTailwindcss className='text-sky-400' />,
  <SiFirebase className='text-yellow-500' />,
  <SiMongodb className='text-green-500' />,
  <SiExpress className='text-gray-600' />,
  <SiVercel className='text-black' />,
  <SiDaisyui className='text-purple-400' />,
  <SiTailwindcss className='text-sky-400' />,
  <SiFirebase className='text-yellow-500' />,
  <SiMongodb className='text-green-500' />,
  <SiExpress className='text-gray-600' />,
  <SiVercel className='text-black' />,
  <SiDaisyui className='text-purple-400' />,
];

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <>
      <div className='relative overflow-hidden'>
        {/* Floating Background Icons */}
        <div className='absolute inset-0 z-0 pointer-events-none'>
          {floatingIcons.map((Icon, index) => (
            <motion.div
              key={index}
              className='absolute text-4xl opacity-10'
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: Math.random() + 0.5,
                rotate: 0,
              }}
              animate={{
                y: ["0%", "-120%"],
                rotate: [0, 360],
              }}
              transition={{
                duration: 40 + Math.random() * 30,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
              }}
            >
              {Icon}
            </motion.div>
          ))}
        </div>

        <Container>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='relative z-10 flex flex-col-reverse lg:flex-row justify-center items-center w-full gap-4'
          >
            <motion.div
              variants={itemVariants}
              className='flex flex-col lg:gap-6 gap-3 flex-1/2'
            >
              <p className='uppercase'>Welcome to my world</p>
              <h1 className='font-title lg:text-8xl text-4xl'>Creative</h1>
              <p className='lg:text-4xl font-title text-lg'>
                Full Stack Developer
              </p>
              <p>Frontend | Backend or Both</p>
              <Link
                to='/contact'
                className='btn uppercase btn-wide btn-primary'
              >
                Get In Touch
              </Link>
              <Link
                to='/projects'
                className='btn uppercase btn-wide btn-secondary'
              >
                Explore Projects
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='lg:w-[400px] lg:h-[600px] flex-1/2 rounded-full'
            >
              <div className='lg:block hidden relative rounded-lg'>
                <p className='text-lg font-medium'>Hi there!</p>
                <div
                  className='-rotate-45 lg:block hidden absolute -bottom-3 animate-bounce left-18 w-0 h-0 border-l-[14px] border-r-[14px] border-t-[14px] 
                border-l-transparent border-r-transparent border-primary'
                ></div>
              </div>

              <img
                className='overflow-hidden w-full h-full object-contain rounded-full bg-primary-content'
                src='https://i.ibb.co/jZ8wdQcc/173906566-removebg-preview-1.png'
                alt='avatar'
                loading='lazy'
              />
            </motion.div>
          </motion.div>
        </Container>

        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
