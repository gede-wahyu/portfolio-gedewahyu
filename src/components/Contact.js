import React, { useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();

  const [validationMessage, setValidationMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

  const validateForm = () => {
    if (!form.current.from_name.value.trim() || !form.current.from_email.value.trim()) {
      setValidationMessage('Please fill in all fields.');
      setIsFormValid(false);
      return false;
    } else if (!/\S+@\S+\.\S+/.test(form.current.from_email.value)) {
      setValidationMessage('Please enter a valid email address.');
      setIsFormValid(false);
      return false;
    } else {
      setValidationMessage('');
      setIsFormValid(true);
      return true;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm(
        'service_lfewgjp',
        'template_yakxkk5',
        form.current,
        'RC4stnKRFMaHf5vNP')

        .then((result) => {
          console.log(result.text);
          e.target.reset();

          toast.success('Message sent!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }, (error) => {
          console.log(error.text);
          toast.error('Failed!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    }
  };

  return (
    <section className='pt-16' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] uppercase lg:text-[90px] leading-none mb-12'>
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              placeholder='Your name'
              name='from_name'
            />
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              placeholder='Your email'
              name='from_email'
            />
            <textarea
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-10'
              placeholder='Your message'
              name='message'
            ></textarea>
            {!isFormValid && ((<p className='text-red-600'>{validationMessage}</p>))}
            <button className='btn btn-lg'>Send Message</button>

            {/* success */}
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />

            {/* error */}
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </motion.form>
        </div>
      </div>
      <div className='mt-[80px]'>
        <h3 className='text-right mr-5'>2023 React JS & Tailwind CSS Developed by Gede Wahyu</h3>
      </div>
    </section>
  );
};

export default Contact;
