import { motion } from "motion/react";
import Container from "../../Components/Container/Container";

const About = () => {
  return (
    <Container>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className='max-w-4xl mx-auto lg:px-4 py-32'
      >
        <div className='card shadow-lg bg-base-200 p-6 lg:p-10 rounded-2xl'>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-5xl font-bold py-8 text-neutral font-title'
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='mb-4 leading-relaxed text-lg'
          >
            <span className='text-5xl'>M</span>y programming journey began out
            of curiosity, and quickly turned into a full-blown passion. I
            started with simple websites and slowly dived deeper into the world
            of web development — from writing raw HTML to building full-stack
            apps using modern technologies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className='mb-4 leading-relaxed text-lg'
          >
            <span className='text-5xl'>I</span> love crafting intuitive and dynamic user experiences. Whether it's
            building scalable APIs or designing responsive UIs, I enjoy solving
            real problems with clean, maintainable code.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 2 }}
            className='mb-4 leading-relaxed text-lg'
          >
            <span className='text-5xl'>O</span>utside of coding, I recharge by playing football, sketching random
            things, and occasionally getting lost in tech documentaries or
            strategy games. Balance keeps my creativity fresh.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className='leading-relaxed text-lg'
          >
            <span className='text-5xl'>I</span> take pride in being curious, detail-oriented, and always up for a
            challenge. Whether I'm shipping a solo project or collaborating with
            a team, I bring enthusiasm and purpose to every line of code.
          </motion.p>
        </div>
      </motion.section>
    </Container>
  );
};

export default About;
