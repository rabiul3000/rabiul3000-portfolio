import React from "react";
import Container from "../../Components/Container/Container";
import { Link } from "react-router";
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      id: "pr-3",
      name: "HomeHorizon",
      img: "https://i.ibb.co.com/zHnLy2CQ/Screenshot-83.png",
      title: "Full Production-Ready Payment Integrated Building Management System",
      techs: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "React",
        "DaisyUI",
        "TailwindCSS",
        "Stripe",
      ],
      desc: "HomeHorizon is an enterprise-grade Building Management System designed for residential and commercial complexes. It features role-based dashboards for tenants, managers, and administrators, secure online payment integration via Stripe, automated rent and coupon management, announcement systems, and a streamlined agreement process — all within a responsive, modern UI.",
      liveLink: "https://horizontower-3c51a.web.app/",
      repoLink: "https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-rabiul3000",
      challenges: [
        "Designing and implementing secure JWT + Firebase authentication for multiple user roles.",
        "Developing a robust coupon and discount logic with real-time rent calculations.",
        "Creating a polished and accessible UI that works seamlessly on desktop and mobile.",
        "Optimizing database queries for faster dashboard load times.",
        "Integrating Stripe payments with proper error handling and webhooks.",
      ],
      plans: [
        "Launch a dedicated mobile app version.",
        "Add multilingual support for broader accessibility.",
        "Advanced analytics dashboard for admins.",
        "Push notifications for rent reminders and announcements.",
        "Continuous scalability improvements.",
      ],
    },
    {
      id: "pr-2",
      name: "FoodBird",
      img: "https://i.ibb.co/HD3StB0X/Screenshot-35.png",
      title: "Online Food Delivery App With Full Authentication",
      techs: ["HTML", "CSS", "REACT", "DAISY UI", "TAILWINDCSS"],
      desc: "FoodBird is a responsive food ordering platform that allows users to explore menus, place orders, and manage deliveries in real time. It uses React for UI, Firebase for auth and database, and features a sleek Tailwind-based design.",
      liveLink: "https://plantium-d465f.web.app/",
      repoLink:
        "https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-rabiul3000",
      challenges: [
        "Managing orders and delivery statuses",
        "Role-based dashboards (user/admin)",
        "Real-time food availability updates",
        "Integrating payment and auth flow",
        "User experience optimization for mobile",
      ],
      plans: [
        "AI meal suggestions",
        "Live delivery tracking",
        "Discount logic and vouchers",
        "Customer feedback and ratings",
        "Order history with reordering",
      ],
    },
    {
      id: "pr-1",
      name: "Plantium",
      img: "https://i.ibb.co/h1r4Kfvw/plantium.png",
      title: "A Smart Plant Management System For a Green Earth",
      techs: ["HTML", "CSS", "REACT", "DAISY UI", "TAILWINDCSS"],
      desc: "Plantium is a full-featured platform for plant lovers to manage, trade, and donate plants. With React, Node.js, MongoDB, and Firebase Auth, it ensures secure access and real-time sync. The UI is built with TailwindCSS and DaisyUI for a smooth, responsive experience.",
      liveLink: "https://plantium-d465f.web.app/",
      repoLink: "https://github.com/rabiul3000/plantium",
      challenges: [
        "Role-based access and admin control",
        "Real-time updates with Firebase",
        "Responsive design consistency",
        "Donation flow and logic implementation",
        "Efficient data modeling for plants",
      ],
      plans: [
        "Smart AI-based plant suggestions",
        "Health monitoring with reminders",
        "Built-in messaging for transactions",
        "Gamified donation leaderboards",
        "Mobile app and PWA features",
      ],
    },
  ];

  return (
    <Container>
      <div className="px-4 sm:px-6 lg:px-12">
        <motion.div
          className="flex flex-col items-center gap-2 py-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm sm:text-base font-semibold text-primary">
            LATEST
          </p>
          <h1 className="text-5xl sm:text-5xl lg:text-6xl font-title font-bold text-base-content">
            My Projects
          </h1>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card bg-base-200 shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <figure className="relative p-4 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg h-60 sm:h-72 w-full object-cover"
                  src={project.img}
                  alt="Project Thumbnail"
                />
                <motion.div
                  whileHover={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center bg-base-100 bg-opacity-70 text-base-content rounded-lg opacity-0"
                >
                  <Link
                    to={`/detail/${project.id}`}
                    state={project}
                    className="font-semibold text-lg"
                  >
                    Click for Detail
                  </Link>
                </motion.div>
              </figure>

              <div className="card-body">
                <p className="text-sm font-bold text-primary">{project.name}</p>
                <h2 className="card-title text-base-content">
                  {project.title}
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
