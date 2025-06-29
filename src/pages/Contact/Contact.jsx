import { motion } from "motion/react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaPinterestP,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className='w-full max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12'
    >
      {/* Left Section */}
      <div className='flex-1 space-y-6'>
        <h2 className='text-4xl font-bold leading-snug'>
          Feel free to get in touch with <br />{" "}
          <span className='text-mod'>Me</span>
        </h2>
        <p className='text-gray-500'>Trusted by Experts</p>

        <div className='flex items-start gap-4'>
          <div className='p-3 rounded-full bg-primary/10 text-primary'>
            <FaPhoneAlt />
          </div>
          <div>
            <p className='font-semibold'>+8801719761337</p>
            <p>mdrabiul.asia@gmail.com</p>
          </div>
        </div>

        <div className='flex items-start gap-4'>
          <div className='p-3 rounded-full bg-primary/10 text-primary'>
            <FaMapMarkerAlt />
          </div>
          <div>
            <p className='font-semibold'>Gazipur, City Corp</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <h1>My Socials:</h1>

        <div className='flex items-center text-mod gap-4'>
          <a href='https://www.facebook.com/md.rabiul.366471/' target='_blank'>
            <FaFacebookF
              size={36}
              className='cursor-pointer hover:scale-110 transition'
            />
          </a>
          <a href='https://github.com/rabiul3000' target='_blank'>
            <FaGithub
              size={36}
              className='cursor-pointer hover:scale-110 transition'
            />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/md-rabiul-islam-13904b331'
          >
            <FaLinkedinIn
              size={36}
              className='cursor-pointer hover:scale-110 transition'
            />
          </a>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className='flex-1'>
        <form className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <input
            type='text'
            placeholder='Your Name *'
            className='input input-bordered col-span-1 w-full'
            required
          />
          <input
            type='email'
            placeholder='Email Address *'
            className='input input-bordered col-span-1 w-full'
            required
          />
          <input
            type='tel'
            placeholder='Phone Number *'
            className='input input-bordered col-span-1 w-full'
            required
          />
          <input
            type='text'
            placeholder='Subject *'
            className='input input-bordered col-span-1 w-full'
            required
          />
          <textarea
            className='textarea textarea-bordered w-full col-span-1 sm:col-span-2 h-32'
            placeholder='Write here...'
            required
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type='submit'
            className='btn bg-blue-600 text-white hover:bg-blue-700 col-span-1 sm:col-span-2 uppercase tracking-wider'
          >
            Send a Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
