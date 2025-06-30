import React from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import Container from "../../Components/Container/Container";

const ProjectDetail = () => {
  const { state } = useLocation();

  const {
    id,
    name,
    img,
    title,
    techs,
    desc,
    liveLink,
    repoLink,
    challenges,
    plans,
  } = state || {};

  return (
    <Container>
      <motion.div
        className='flex flex-col mx-auto justify-center items-center py-16 w-11/12 lg:w-9/12 gap-10'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Breadcrumb */}
        <div className='w-full text-left'>
          <p className='text-sm text-mod uppercase font-semibold'>
            <Link to='/projects' className='hover:underline'>
              Projects/
            </Link>
            <span className='text-slate-400'> {id}</span>
          </p>
        </div>

        {/* Project Image */}
        <motion.div
          className='w-full rounded-xl overflow-hidden shadow-xl'
          whileHover={{ scale: 1.02 }}
        >
          <img src={img} alt='project_img' className='w-full object-cover' />
        </motion.div>

        {/* Details */}
        <div className='flex flex-col gap-6 w-full'>
          <motion.h1
            className='text-4xl md:text-5xl font-bold font-title'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {name}
          </motion.h1>

          <p className='text-lg font-medium text-gray-600'>{title}</p>

          {/* Tech Badges */}
          <div className='flex flex-wrap gap-2'>
            {techs.map((tech, index) => (
              <motion.span
                key={index}
                className='badge badge-outline badge-primary text-sm'
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className='flex gap-4 flex-wrap'>
            <a href={liveLink} target='_blank' rel='noreferrer'>
              <button className='btn btn-primary btn-sm'>🌐 Live Demo</button>
            </a>
            <a href={repoLink} target='_blank' rel='noreferrer'>
              <button className='btn btn-neutral btn-sm'>💻 GitHub Repo</button>
            </a>
          </div>

          {/* Description */}
          <p className='text-gray-700 leading-relaxed'>{desc}</p>

          {/* Challenges */}
          <div>
            <h2 className='text-xl font-semibold border-b pb-1 mb-2'>
              🧩 Challenges faced in <span className='capitalize'>{name}</span>
            </h2>
            <ul className='list-disc list-inside space-y-1 text-gray-600'>
              {challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  {challenge}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Future Plans */}
          <div>
            <h2 className='text-xl font-semibold border-b pb-1 mb-2'>
              ✨ Future Enhancements for{" "}
              <span className='capitalize'>{name}</span>
            </h2>
            <ul className='list-disc list-inside space-y-1 text-gray-600'>
              {plans.map((plan, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  {plan}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default ProjectDetail;
