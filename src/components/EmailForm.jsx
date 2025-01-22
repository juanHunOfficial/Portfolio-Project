import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailForm(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qfg6czo', 'template_hd5f9cg', form.current, {
        publicKey: 'P0VZlvivZlmCUO9_M',
      })
      .then(
        () => {
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return(
    <form ref={form} onSubmit={sendEmail} className="flex justify-center h-[700px] w-full">
      <div className="w-full flex items-center gap-6 flex-col">
        <label className="input input-bordered w-[1058px] flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" name='from_name' className="grow" placeholder="Your Name" />
        </label>
        <label className="input input-bordered w-[1058px] flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" name='from_email' placeholder="Your Email" />
        </label>
        <textarea className="textarea textarea-bordered w-[1058px] h-1/4" name='message' placeholder="Your Message"></textarea>
      <button className="btn btn-primary w-44" >Submit</button>
      </div>
    </form>
  )
}