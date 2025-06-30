import { motion } from "motion/react";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiDaisyui,
} from "react-icons/si";
import Container from "../../Components/Container/Container";
import { Helmet } from "react-helmet";

const skills = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 className='text-orange-500' /> },
    { name: "CSS", icon: <FaCss3Alt className='text-blue-500' /> },
    { name: "JavaScript", icon: <FaJs className='text-yellow-400' /> },
    { name: "React", icon: <FaReact className='text-cyan-400' /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className='text-sky-400' /> },
    { name: "DaisyUI", icon: <SiDaisyui className='text-purple-400' /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs className='text-green-600' /> },
    { name: "Express.js", icon: <SiExpress className='text-gray-600' /> },
    { name: "MongoDB", icon: <SiMongodb className='text-green-500' /> },
    { name: "Firebase", icon: <SiFirebase className='text-yellow-500' /> },
    { name: "Vercel", icon: <SiVercel className='text-black' /> },
  ],
};

const SkillCard = ({ name, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className='card bg-base-100 shadow-md p-4 flex flex-col items-center gap-2 rounded-xl hover:shadow-lg'
  >
    <div className='text-4xl'>{icon}</div>
    <div className='font-semibold text-center'>{name}</div>
  </motion.div>
);

const Skills = () => {
  return (
    <Container>
      <Helmet>
          <title>Rabiul | Skills</title>
        </Helmet>
      <div className='py-20'>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-5xl font-bold mb-10 text-center text-neutral font-title'
        >
          Technologies That I love Use
        </motion.h2>

        <div className='grid grid-cols-1 gap-20'>
          {/* Frontend Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3 className='text-xl font-bold mb-4'>Frontend Technologies</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {skills.frontend.map((tech) => (
                <SkillCard key={tech.name} name={tech.name} icon={tech.icon} />
              ))}
            </div>
          </motion.div>

          {/* Backend Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <h3 className='text-xl font-bold mb-4'>Backend & Dev Tools</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {skills.backend.map((tech) => (
                <SkillCard key={tech.name} name={tech.name} icon={tech.icon} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
