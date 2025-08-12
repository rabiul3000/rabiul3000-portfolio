import { motion } from "motion/react";
import Container from "../../Components/Container/Container";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto lg:px-4 py-16"
    >
      <div className="card shadow-lg bg-base-200 p-6 lg:p-10 rounded-2xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl text-center font-bold pb-12 text-neutral font-title"
        >
          About Me
        </motion.h2>

        {/* Introduction */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-2xl font-bold text-blue-700 mb-2"
        >
          My Journey into Programming
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 leading-relaxed text-lg"
        >
          My programming journey began out of pure curiosity — that spark of
          wanting to know <em>how things work</em>. My first “Hello World” felt
          like magic, and from there, I dove headfirst into HTML, CSS, and
          JavaScript. Over time, I expanded into modern frameworks, backend
          systems, and full-stack development, crafting everything from small
          side projects to complete, production-ready applications.
        </motion.p>

        {/* What I Love Doing */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-bold text-blue-700 mb-2"
        >
          The Work I Enjoy
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6 leading-relaxed text-lg"
        >
          I thrive on building clean, scalable solutions that don’t just work —
          they feel effortless to use. I enjoy working at the intersection of
          logic and creativity, whether it’s designing an intuitive user
          interface, optimizing performance, or engineering a solid backend API.
          The challenge of transforming ideas into functional, beautiful digital
          experiences keeps me hooked.
        </motion.p>

        {/* Life Outside Coding */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-2xl font-bold text-blue-700 mb-2"
        >
          Beyond the Code
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-6 leading-relaxed text-lg"
        >
          Outside of coding, I believe in keeping life balanced and full of
          inspiration. You’ll often find me playing <b>cricket </b> for the
          adrenaline rush, reading <b> self-help books, </b> or diving into
          <b> tech documentaries </b> to explore the stories behind innovation.
          I also enjoy strategy games — they sharpen my problem-solving skills
          while letting me unwind.
        </motion.p>

        {/* My Approach */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-2xl font-bold text-blue-700 mb-2"
        >
          My Approach to Work
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-6 leading-relaxed text-lg"
        >
          I see programming as more than just writing code — it’s about solving
          problems, telling stories, and making an impact. I’m naturally
          curious, detail-oriented, and I thrive in both solo and collaborative
          environments. Whether I’m iterating on my own project or working with
          a team, I bring enthusiasm, empathy, and a commitment to creating
          something meaningful.
        </motion.p>

        {/* Closing */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-2xl font-bold text-blue-700 mb-2"
        >
          Looking Ahead
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="leading-relaxed text-lg"
        >
          The tech world evolves fast, and I’m here for it — learning, adapting,
          and creating with every step. I’m actively seeking opportunities to
          work as a developer — whether it’s landing a full-time role, taking on
          exciting freelance projects, or contributing to meaningful side
          projects where I can collaborate, grow, and make an impact.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
