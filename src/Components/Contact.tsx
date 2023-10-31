import { m } from 'framer-motion'
import emailjs from 'emailjs-com'; 
import { animationProps} from '../variants'
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!name || !email || !message){
      alert('Please fill in name, email and message fields');
      return;
    }

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const emailParams = {
      to_email: 'vedunaik777@gmail.com', 
      from_name: name,
      from_email: email,
      message: message,
    };

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
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row">
          <m.div {...animationProps}  className="flex-1 flex justify-start items-center">
            <div className="">
              <p className='text-xl uppercase text-white font-medium mb-2 tracking-wide'>Get in touch</p>
              <p className="text-[45px] lg:text-[90px] leading-none mb-12 text-white">Let's work <br /> together!</p>
            </div>
          </m.div>
          <m.form  onSubmit={handleSubmit}  {...animationProps}  className="flex-1 border border-[#5a5a5a] rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start bg-[#181818]">
          <input className="bg-transparent border-b py-5 outline-none w-full text-white placeholder:text-white focus:border-[#5a5a5a] transition-all " placeholder='Your name' type='text' name='from_name' value={name} onChange={e => setName(e.target.value)} />
            <input className="bg-transparent border-b py-5 outline-none w-full text-white placeholder:text-white focus:border-[#5a5a5a] transition-all " placeholder='Your email' type='email' name='from_email' value={email} onChange={e => setEmail(e.target.value)} />
            <textarea className='bg-transparent border-b py-12 outline-none w-full text-white placeholder:text-white focus:border-[#5a5a5a] transition-all resize-none mb-12' placeholder='Your message' name='message' value={message} onChange={e => setMessage(e.target.value)} />
            <div className="flex flex-col gap-4 min-[425px]:flex-row">
              <button className="btn-tweet hover:scale-105 bg-[#FFFFFF] shadow-[inset_0_-4px_0_0_rgba(0,0,0,.25)]  btn-lg  transition-all duration-300 ease-out" type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              <span className='text-white flex items-center justify-center font-semibold'>Or Dm On</span>
              <a href="https://twitter.com/vedantnaik108" className='btn-tweet hover:scale-105 bg-[#FFFFFF] shadow-[inset_0_-4px_0_0_rgba(0,0,0,.25)]  btn-lg  transition-all duration-300 ease-out flex items-center justify-center '>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>
              </a>
            </div>
          </m.form>
        </div>
      </div>
    </section>
  )
}

export default Contact



