import React from 'react'

import video from '../assets/hero.mp4';
import hero from '../assets/hero.png';
import logo from '../assets/logo.png';
import fourSeasons from '../assets/four-seasons.png';
import fourSeasonsLogo from '/favicon.svg';

import LoadingScreen from './LoadingScreen';

import { useEffect, useRef, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

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

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);

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
    <>
    {!isVideoLoaded && <LoadingScreen />}
    <section className='relative flex justify-center items-center h-screen' id='hero'>
        <div className='absolute inset-0 h-full w-full -z-20 overflow-hidden'>
          <video ref={videoRef} src={video} className='h-full w-full object-cover' autoPlay loop muted playsInline poster={hero} ></video>
        </div>
        <div className='absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-50% to-black'></div>
        <div className='absolute top-8 lg:left-8 w-full sm:w-auto z-30 flex justify-center sm:block'>
            <img 
                src={isMobile ? fourSeasons : fourSeasonsLogo} 
                alt="Four Seasons"
                className='lg:w-24 lg:h-24 w-64 mt-24 lg:mt-0 xl:ml-2 object-contain transition-transform duration-200 ease-in-out hover:scale-110'
            />
        </div>
        <div className='relative w-fit z-20 h-screen flex flex-col justify-end items-center pb-16'>
          <div className='w-fit flex flex-col items-center relative scale-hover'>
          <img 
            ref={imgRef}
            src={logo} 
            alt="Restaura" 
            className='sm:w-3/5 w-full px-8 pb-2'
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
          <div className='p-2 text-xl flex sm:pl-12 pl-8'>
          {[..."Dehradun"].map((letter, index) => (
              <span key={index} className='w-10 h-10 scale-hover-span'>
                {letter}
              </span>
            ))}
          </div>
        </div>
    </section>
</>
)
}

export default HeroSection