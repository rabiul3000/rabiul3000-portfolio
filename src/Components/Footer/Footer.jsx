import { motion } from 'motion/react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='bg-base-200 text-base-content py-10 px-6'
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left'>

        {/* Branding */}
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold tracking-widest'>
            <span className='text-mod'>R</span>abiul
          </h2>
          <p className='text-sm'>
            © 2025 design and developed by{' '}
            <a href='https://rabiulz.web.app/' className='link link-primary font-medium'>Rabiul</a>.
          </p>
          <p className='text-sm'>
            Powered by{' '}
            <span className='link link-primary font-medium'>Human</span>.
          </p>
        </div>

        {/* Contact */}
        <div className='space-y-1'>
          <h3 className='text-lg font-semibold uppercase'>Contact</h3>
          <p><span className='font-medium'>Phone:</span> +88 01719761337</p>
          <p>mdrabiul.asia@gmail.com</p>
        </div>

        {/* Visit */}
        <div className='space-y-1'>
          <h3 className='text-lg font-semibold uppercase'>Visit</h3>
          <p>Gazipur, City Corp</p>
          <p>Dhaka</p>
          <p>Bangladesh</p>
        </div>

        {/* Follow Me */}
        <div className='space-y-1'>
          <h3 className='text-lg font-semibold uppercase'>Find Me</h3>
          <ul className='space-y-1'>
            <li><a className='link'>Linkedin</a></li>
            <li><a className='link'>Facebook</a></li>
            <li><a className='link'>Github</a></li>
          </ul>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
