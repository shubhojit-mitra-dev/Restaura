import React from 'react'

import video from '../assets/hero.mp4';
import hero from '../assets/hero.jpeg';
import logo from '../assets/logo.png';
import fourSeasons from '../assets/four-seasons.png';
import fourSeasonsLogo from '/favicon.svg';

import { useEffect, useRef, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const HeroSection = () => {
  const isMobile = useIsMobile();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (imgRef.current) {
        setDimensions({
          width: imgRef.current.offsetWidth,
          height: imgRef.current.offsetHeight
        });
      }
    };

    // Initial measurement
    updateDimensions();
    
    // Measure on window resize
    window.addEventListener('resize', updateDimensions);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <section className='relative flex justify-center items-center h-screen'>
        <div className='absolute inset-0 h-full w-full -z-20 overflow-hidden'>
          <video src={video} className='h-full w-full object-cover' autoPlay loop muted playsInline poster={hero} ></video>
        </div>
        <div className='absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-50% to-black'></div>
        <div className='absolute top-8 lg:left-8 w-full sm:w-auto z-30 flex justify-center sm:block'>
            <img 
                src={isMobile ? fourSeasons : fourSeasonsLogo} 
                alt="Four Seasons"
                className='lg:w-24 lg:h-24 w-64 mt-24 lg:mt-0 xl:ml-2 object-contain'
            />
        </div>
        <div className='relative w-fit z-20 h-screen flex flex-col justify-end items-center pb-16'>
          <div className='w-fit flex flex-col items-center relative'>
          <img 
            ref={imgRef}
            src={logo} 
            alt="Restaura" 
            className='sm:w-4/6 w-full px-8 pb-2'
            onLoad={() => {
              if (imgRef.current) {
                setDimensions({
                  width: imgRef.current.offsetWidth,
                  height: imgRef.current.offsetHeight
                });
              }
            }}
          />
            <div style={{ width: `${dimensions.width}px` }} className="flex justify-center sm:justify-end px-8">
              <p className='text-lg py-2 four-seasons'>By Four Seasons</p>
            </div>
          </div>
          <div className='w-full h-1 bg-gradient-radial from-white to-transparent my-4'></div>
          <p className='p-2 text-lg tracking-extra-wide sm:pl-12 pl-8'>Dehradun</p>
        </div>
    </section>
)
}

export default HeroSection