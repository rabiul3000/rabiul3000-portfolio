import React from "react";
import Container from "../../Components/Container/Container";
import { Link } from "react-router";

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
      <div>
        <div className='flex items-center flex-col gap-4 justify-center h-70'>
          <p className='text-mod font-bold'>LATEST</p>
          <h1 className='text-6xl font-title'>My Projects</h1>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pb-24'>
          {[1, 2, 3, 4, 5].map((index) => (
            <div className='card bg-base-200 w-96  shadow-lg' key={index}>
              <figure className='relative p-4'>
                <img
                  className='rounded-lg h-84 hover:scale-105 duration-200'
                  src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                  alt='Shoes'
                />
                <Link
                  to={`/detail/${detail.id}`}
                  state={detail}
                  className='rounded-lg cursor-pointer absolute opacity-0 scale-50 hover:scale-95 hover:opacity-75 duration-500 bg-primary-content z-100 top-0 bottom-0 left-0 right-0 flex justify-center items-center'
                >
                  <p>Click for Detail</p>
                </Link>
              </figure>
              <div className='card-body'>
                <p className='text-mod font-bold'>PLANTIUM</p>
                <h1 className='card-title text-gray-700'>
                  A Plant Management Application
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
