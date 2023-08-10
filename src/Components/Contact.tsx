import {motion} from 'framer-motion'
import emailjs from 'emailjs-com'; // Import the EmailJS library
import { fadeIn } from '../variants'
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Prevent multiple submissions
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    // Configure EmailJS parameters
    const emailParams = {
      to_email: 'vedunaik777@gmail.com', // Your email address
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send email using EmailJS
    emailjs.send(
      'service_jdbf2fs',
      'template_ohphv2f',
      emailParams,
      'eakx2TGqrzbgSyllM'
    )
      .then(() => {
        alert('Email sent successfully!');
        setIsSubmitting(false);
        setName('');
        setEmail('');
        setMessage('');
        
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again later.');
        setIsSubmitting(false);
      });
     
  };
  return (
    <section className="py-16 mt-28 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: true, amount: 0.3}}  className="flex-1 flex justify-start items-center">
            <div className="">
              <h4 className='text-xl uppercase text-[#0F1419] font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 text-[#0F1419]">Let's work <br /> together!</h2>
            </div>
          </motion.div>
          <motion.form  onSubmit={handleSubmit}  variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: true, amount: 0.3}}  className="flex-1 border border-black rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start bg-black">
          <input className="bg-transparent border-b py-5 outline-none w-full text-white placeholder:text-[#FFFFFF] focus:border-[#71767B] transition-all " placeholder='Your name' type='text' name='from_name' value={name} onChange={e => setName(e.target.value)} />
            <input className="bg-transparent border-b py-5 outline-none w-full text-white placeholder:text-[#FFFFFF] focus:border-[#71767B] transition-all " placeholder='Your email' type='email' name='from_email' value={email} onChange={e => setEmail(e.target.value)} />
            <textarea className='bg-transparent border-b py-12 outline-none w-full text-white placeholder:text-[#FFFFFF] focus:border-[#71767B] transition-all resize-none mb-12' placeholder='Your message' name='message' value={message} onChange={e => setMessage(e.target.value)} />
            <button className="btn-tweet bg-[#1d9bf0]  btn-lg hover:opacity-70 transition-all duration-100" type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact



