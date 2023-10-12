'use client';
import { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiSubstack } from 'react-icons/si';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  return (
    <>
      <motion.div className="absolute top-0 flex flex-col z-10 h-screen w-fit justify-center px-8 snap-start">
        <h1 className="text-white text-9xl font-newake mr-auto">
          jonny xu.
        </h1>
        <h2 className="text-neutral-200 text-4xl font-newake mr-auto">
          full stack + MLOps
        </h2>
        <div className="flex flex-row gap-x-4 mt-2">
          <a href="https://twitter.com/chemocheese" target="_blank">
            <FaXTwitter className="text-white text-3xl hover:text-blue-400 transition-all" />
          </a>
          <a href="https://github.com/jonathanzxu" target="_blank">
            <AiFillGithub className="text-white text-3xl hover:text-fuchsia-700 transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/jonathanzxu/" target="_blank">
            <AiFillLinkedin className="text-white text-3xl hover:text-blue-700 transition-all" />
          </a>
          <a href="https://jzxu.substack.com/" target="_blank">
            <SiSubstack className="text-white text-3xl hover:text-orange-500 transition-all" />
          </a>
        </div>
      </motion.div>
      {/* <div className="h-screen"></div>
      <motion.div className="flex flex-col z-10 h-screen w-fit justify-center px-8 snap-start">
        <h1 className="text-white text-9xl font-newake mr-auto">
          jonny xu.
        </h1>
        <h2 className="text-neutral-200 text-4xl font-newake mr-auto">
          full stack + MLOps
        </h2>
        <div className="flex flex-row gap-x-4 mt-2">
          <a href="https://twitter.com/chemocheese" target="_blank">
            <FaXTwitter className="text-white text-3xl hover:text-blue-400 transition-all" />
          </a>
          <a href="https://github.com/jonathanzxu" target="_blank">
            <AiFillGithub className="text-white text-3xl hover:text-fuchsia-700 transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/jonathanzxu/" target="_blank">
            <AiFillLinkedin className="text-white text-3xl hover:text-blue-700 transition-all" />
          </a>
          <a href="https://jzxu.substack.com/" target="_blank">
            <SiSubstack className="text-white texl-3xl hover:text-orange-500 transition-all" />
          </a>
        </div>
      </motion.div>
      <motion.div className="flex flex-col z-10 h-screen w-fit justify-center px-8 snap-start">
        <h1 className="text-white text-9xl font-newake mr-auto">
          jonny xu.
        </h1>
        <h2 className="text-neutral-200 text-4xl font-newake mr-auto">
          full stack + MLOps
        </h2>
        <div className="flex flex-row gap-x-4 mt-2">
          <a href="https://twitter.com/chemocheese" target="_blank">
            <FaXTwitter className="text-white text-3xl hover:text-blue-400 transition-all" />
          </a>
          <a href="https://github.com/jonathanzxu" target="_blank">
            <AiFillGithub className="text-white text-3xl hover:text-fuchsia-700 transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/jonathanzxu/" target="_blank">
            <AiFillLinkedin className="text-white text-3xl hover:text-blue-700 transition-all" />
          </a>
          <a href="https://jzxu.substack.com/" target="_blank">
            <SiSubstack className="text-white texl-3xl hover:text-orange-500 transition-all" />
          </a>
        </div>
      </motion.div>
      <motion.div className="flex flex-col z-10 h-screen w-fit justify-center px-8 snap-start">
        <h1 className="text-white text-9xl font-newake mr-auto">
          jonny xu.
        </h1>
        <h2 className="text-neutral-200 text-4xl font-newake mr-auto">
          full stack + MLOps
        </h2>
        <div className="flex flex-row gap-x-4 mt-2">
          <a href="https://twitter.com/chemocheese" target="_blank">
            <FaXTwitter className="text-white text-3xl hover:text-blue-400 transition-all" />
          </a>
          <a href="https://github.com/jonathanzxu" target="_blank">
            <AiFillGithub className="text-white text-3xl hover:text-fuchsia-700 transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/jonathanzxu/" target="_blank">
            <AiFillLinkedin className="text-white text-3xl hover:text-blue-700 transition-all" />
          </a>
          <a href="https://jzxu.substack.com/" target="_blank">
            <SiSubstack className="text-white texl-3xl hover:text-orange-500 transition-all" />
          </a>
        </div>
      </motion.div> */}
      { (scrollPos < 10) &&
      <motion.div>
        <Spline scene="https://prod.spline.design/iVqodeQXuOPQpDf4/scene.splinecode" style={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          top: 0,
        }} />
      </motion.div>
      }
      {
        (scrollPos >= 10) &&
        <motion.div>
          <video autoPlay muted loop id="bgvideo" style={{
            height: '100vh',
            width: '100vw',
            objectFit: 'cover',
            position: 'fixed',
            top: 0,
            zIndex: -1,
          }}>
            <source src="/orbhand.mp4" type="video/mp4" />
          </video>
        </motion.div>
      }
    </>
  )
}
