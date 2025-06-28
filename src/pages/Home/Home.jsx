import React from "react";
import About from "../About/About";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";
import Container from "../../Components/Container/Container";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div>
      <Container>
        <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-4'>
          <div className='flex flex-col lg:gap-6 gap-3 flex-1/2'>
            <p className='uppercase'>Welcome to my world</p>
            <h1 className='font-title lg:text-8xl text-4xl'>Creative</h1>
            <p className='lg:text-4xl font-title text-lg'>
              Full Stack Developer
            </p>
            <p className=''>Frontend | Backend or Both </p>
            <button className='btn uppercase btn-wide btn-primary '>
              My Services
            </button>
          </div>

          <div className='lg:w-[400px] lg:h-[600px] flex-1/2 rounded-full'>
            <motion.div className='lg:block hidden relative rounded-lg'>
              <p className='text-lg font-medium'>Hi there!</p>

              <div
                className='-rotate-45 lg:block hidden absolute -bottom-3 animate-bounce  left-18 w-0 h-0 border-l-[14px] border-r-[14px] border-t-[14px] 
              border-l-transparent border-r-transparent border-primary'
              ></div>
            </motion.div>

            <img
              className='overflow-hidden w-full h-full object-contain rounded-full bg-primary-content'
              src='https://i.ibb.co/jZ8wdQcc/173906566-removebg-preview-1.png'
              alt='avatar'
            />
          </div>
        </div>
      </Container>
      <About />
      <Service />
      <Contact />
    </div>
  );
};

export default Home;
