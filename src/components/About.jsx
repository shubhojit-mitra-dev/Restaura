import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";

const About = () => {
  return (
    <section className="container mx-auto my-8" id="about">
      <h2 className="mb-16 text-center text-3xl sm:text-5xl font-bold">
        About Us
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2 flex justify-end">
          <img src={about} className="lg:h-[450px] lg:mr-8 rounded-3xl lg:-rotate-3 transition-transform duration-300 ease-in-out hover:-rotate-6 sm:hover:scale-110" />
        </div>
        <div className="w-full flex flex-col px-2 lg:w-1/2">
          <div className="ml-8 mt-8 text-4xl sm:text-5xl flex">
          {[...ABOUT.header].map((letter, index) => (
              <span key={index} className='h-10 scale-hover-span'>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
          <div className="sm:mb-8 ml-8 mt-2 h-2 w-36 bg-rose-300 -rotate-3"></div>
          <div className="ml-8 mt-8 sm:text-neutral-400 text-base sm:text-xl flex flex-wrap">
            {ABOUT.content.split(' ').map((word, wordIndex) => (
                <div key={wordIndex} className="flex mr-1 scale-hover-span sm:hover:text-white">
                {[...word].map((letter, letterIndex) => (
                    <span 
                    key={`${wordIndex}-${letterIndex}`} 
                    className='h-7'
                    >
                    {letter}
                    </span>
                ))}
                </div>
            ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
