

import instagram from '../assets/instagram.png';
import twitter from '../assets/x.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section id="contact" className="py-12 pb-16 px-4 bg-background text-foreground">
      <div data-aos="fade-up">
        <h1 className="text-4xl font-bold text-center mb-10 font-sans gradient-text">
          Connect with me
        </h1>
      </div>
      <div
        className="flex justify-center text-center gap-5"
        data-aos="zoom-in"
      >
        <a href="https://x.com/yashh_0202" target="_blank" rel="noreferrer">
          <img
            src={twitter}
            alt="X"
            className="h-10 w-10 transform transition-transform hover:scale-110 hover:shadow-xl rounded-xl shadow-md duration-300"
          />
        </a>
        <a href="https://www.instagram.com/yashhh__0202" target="_blank" rel="noreferrer">
          <img
            src={instagram}
            alt="Instagram"
            className="h-10 w-10 transform transition-transform hover:scale-110 hover:shadow-xl rounded-xl shadow-md duration-300"
          />
        </a>
      </div>
    </section>
  );
}
