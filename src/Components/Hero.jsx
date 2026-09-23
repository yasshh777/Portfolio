
import { useEffect } from 'react';
import owner from '../assets/owner.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  return (
    <section className="w-full bg-background overflow-x-hidden">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 py-12 pb-16" data-aos="fade-up">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={owner}
            alt="Yash profile"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center text-center mt-6 space-y-4">
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Programmer | Developer |
          </h1>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-neonBlue to-neonPink bg-clip-text text-transparent">
            Tech Enthusiast
          </h2>

          <p className="font-mono text-base sm:text-lg md:text-xl w-full max-w-md md:max-w-3xl md:w-[75%] text-foreground text-center">
            I'm Yash, a passionate programmer building innovative solutions and exploring cutting-edge technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
