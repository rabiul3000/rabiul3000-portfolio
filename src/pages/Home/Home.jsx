import React from "react";
import About from "../About/About";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";
import Container from "../../Components/Container/Container";
import { motion } from "motion/react";
import { Link } from "react-router";
import Footer from "../../Components/Footer/Footer";
import Skills from "../Skills/Skills";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,
      delay: 1,
      transition: {
        staggerChildren: 1, // Children animate with a slight delay
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <Container>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='flex flex-col lg:flex-row justify-center items-center w-full gap-4'
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
            <p className=''>Frontend | Backend or Both </p>
            <Link to='/contact' className='btn uppercase btn-wide btn-primary '>
              Get In Touch
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='lg:w-[400px] lg:h-[600px] flex-1/2 rounded-full'
          >
            <div className='lg:block hidden relative rounded-lg'>
              <p className='text-lg font-medium'>Hi there!</p>

              <div
                className='-rotate-45 lg:block hidden absolute -bottom-3 animate-bounce  left-18 w-0 h-0 border-l-[14px] border-r-[14px] border-t-[14px] 
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
      <Skills />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;
