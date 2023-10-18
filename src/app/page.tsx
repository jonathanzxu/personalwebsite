'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiSubstack } from 'react-icons/si';

const techImages = {
  'React': '/react.png',
  'Next.js': '/next.png',
  'TypeScript': '/typescript.png',
  'TailwindCSS': '/tailwind.webp',
  'Node.js': '/node.png',
  'Three.js': '/threejs.png',
  'Redis': '/redis.png',
  'Stripe': '/stripe.png',
  'Firebase': '/firebase.png',
  'PostHog': '/posthog.png',
  'Google Analytics': '/ganalytics.png',
  'Django': '/django.png',
  'SASS': '/sass.png',
  'HTML': '/html5.png',
  'CSS': '/css3.png',
  'Electron': '/electron.png',
  'Chroma': '/chroma.png',
  'Framer Motion': '/framer.svg',
  'Vercel': '/vercel.png',
  'Spline': '/spline.png',
  'MetaMask': '/metamask.png',
  'AWS Lambda': '/lambda.svg',
  'AWS SQS': '/sqs.png',
  'AWS S3': '/s3.png',
  'AWS EC2': '/ec2.png',
  'AWS SageMaker': '/sagemaker.webp',
  'PostgreSQL': '/postgresql.png',
  'Kafka': '/kafka.png',
  'MongoDB': '/mongodb.png',
  'Prisma': '/prisma.png',
  'nginx': '/nginx.png',
  'Celery': '/celery.png',
  'Docker': '/docker.png',
  'Kubernetes': '/kubernetes.png',
  'New Relic': '/newrelic.png',
  'BullMQ': '/bull.png',
  'Vercel Edge': '/vercel.png',
  'ElasticSearch': '/elasticsearch.svg',
  'DigitalOcean': '/digitalocean.png',
  'Babel': '/babel.png',
  'OpenCV': '/opencv.png',
  'LaneNet': '/lanenet.png',
  'C++': '/cpp.png',
  'Ray': '/ray.png',
  'MinIO': '/minio.png',
  'CUDA': '/cuda.png',
  'PyTorch': '/pytorch.png',
  'TensorFlow': '/tensorflow.png',
};

const frontendProjects = [
  {
    name: 'turtles.ai',
    image: '/turtles.png',
    description: 'A full-stack AI text-to-speech app with secure payments and a custom UI.',
    tech: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'Three.js', 'Redis', 'Stripe', 'Firebase', 'PostHog', 'Google Analytics']
  },
  {
    name: 'grop',
    image: '/grop.jpeg',
    description: 'A desktop app with handwriting recognition for semantic search on local code, notes, and documents.',
    tech: ['React', 'Electron', 'TypeScript', 'TailwindCSS', 'Chroma']
  },
  {
    name: 'this website',
    image: '/website.png',
    description: 'My personal portfolio, and the one you\'re on right now!',
    tech: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Three.js', 'Spline', 'Vercel']
  },
  {
    name: 'bruinwalk',
    image: '/bruinwalk.png',
    description: 'A space for Bruins to rate and review classes, professors, and apartments.',
    tech: ['React', 'Django', 'Google Analytics', 'SASS', 'HTML', 'CSS']
  }
];

const backendProjects = [
  {
    name: 'Spore',
    image: '/spore.png',
    description: 'Worldwide instant payment infrastructure with cryptocurrency. Programmatic currency pair trading.',
    tech: ['AWS Lambda', 'Node.js', 'MongoDB', 'Firebase', 'Stripe', 'MetaMask', 'Kafka']
  },
  {
    name: 'turtles.ai',
    image: '/turtles.png',
    description: 'Infrastructure for large-scale programmatic TTS API usage, with real-time streaming.',
    tech: ['AWS Lambda', 'AWS SQS', 'AWS S3', 'AWS EC2', 'Redis', 'Stripe', 'Firebase', 'PostgreSQL', 'Prisma', 'nginx', 'Celery', 'Docker', 'Kubernetes', 'New Relic', 'BullMQ', 'Vercel Edge']
  },
  {
    name: 'bruinwalk',
    image: '/bruinwalk.png',
    description: 'Managing millions of records and thousands of hits per second.',
    tech: ['Django', 'ElasticSearch', 'DigitalOcean', 'Docker', 'Kubernetes', 'Babel']
  }
];

const mlProjects = [
  {
    name: 'Kodiak AI',
    image: '/kodiak.png',
    description: 'Powering dozens of autonomous truck loads across the US. Real-time perception, planning, and prediction.',
    tech: ['OpenCV', 'LaneNet', 'C++', 'Ray', 'Kubernetes', 'Docker', 'MinIO', 'CUDA']
  },
  {
    name: 'turtles.ai',
    image: '/turtles.png',
    description: 'Concurrent inference on hundreds of models. Distributed multi-modal pipeline fine-tuning and training.',
    tech: ['PyTorch', 'Ray', 'Kubernetes', 'Docker', 'AWS S3', 'CUDA']
  },
  {
    name: 'Dasion AI',
    image: '/dasion.png',
    description: 'Programmatic inference on medical imaging and scans. Patient diagnoses in minutes.',
    tech: ['TensorFlow', 'Kubernetes', 'Docker', 'AWS S3', 'AWS SageMaker', 'CUDA']
  }
];

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
// hi
export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);
  const [onClient, setOnClient] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [firstDelay, setFirstDelay] = useState(false);
  const [secondDelay, setSecondDelay] = useState(false);
  const [thirdDelay, setThirdDelay] = useState(false);
  const [fourthDelay, setFourthDelay] = useState(false);
  const [fifthDelay, setFifthDelay] = useState(false);
  const [sixthDelay, setSixthDelay] = useState(false);
  const [frontendScrollTimeout, setFrontendScrollTimeout] = useState(null);
  const [backendScrollTimeout, setBackendScrollTimeout] = useState(null);
  const [mlScrollTimeout, setMlScrollTimeout] = useState(null);
  const [selectedProject, setSelectedProject] = useState(0);
  useEffect(() => {
    setOnClient(true);
    setScreenWidth(window.innerWidth);
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
    <AnimatePresence>
      <motion.div key="hero" className="absolute top-0 flex flex-col z-10 h-screen w-fit justify-center px-8 snap-start">
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
      <div className="h-screen"></div>
      <motion.div onViewportEnter={() => {
        setSelectedProject(0);
        setTimeout(() => {
          setFirstDelay(true);
        }, 1000);
        const scrollTimeout = setTimeout(() => {
          setSecondDelay(true);
          const scrollRef = document.getElementById('frontend');
          if (scrollRef) scrollRef.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
        setFrontendScrollTimeout(scrollTimeout as any);
      }}
      onViewportLeave={() => {
        setFirstDelay(false);
        setSecondDelay(false);
        clearTimeout(frontendScrollTimeout!);
      }}
      key="frontend" className={"flex flex-col z-20 h-screen mt-20 mb-2 w-full px-8 gap-y-8 snap-start " + (firstDelay ? 'justify-start ' : 'justify-center ') + (secondDelay ? 'items-start' : 'items-center')}
      >
        <motion.div
        layout 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 1.5, stiffness: 30 }}
        className={"flex flex-col justify-center h-fit mt-4 sm:mt-8 "}>
          <div className="flex flex-row h-fit w-full">
            <h1 className="flex flex-row text-pink-200 text-5xl sm:text-9xl font-newake mr-4 mb-2">
              frontend
            </h1>
            <Image alt="" src="/molang.gif" width={(screenWidth > 640 ? 210 : 80)} height={100} className="-translate-y-2 sm:-translate-y-6 mr-auto" />
          </div>
          <h2 className="text-neutral-400 text-2xl sm:text-4xl font-newake mr-auto">
            <span className="text-yellow-300">born</span> to <span className='font-mono text-green-400 whitespace-nowrap text-base sm:text-2xl p-1 sm:p-2 bg-black rounded-md sm:rounded-xl border-[1px] border-white'>kubeadm init</span>, <span className="text-red-500">forced</span> to <span className='font-mono text-green-400 whitespace-nowrap text-base sm:text-2xl p-1 sm:p-2 bg-black rounded-md sm:rounded-xl border-[1px] border-white'>npm install</span> 😔
          </h2>
        </motion.div>
        {
            secondDelay &&
          <motion.div
          layout
          initial={{ transform: 'translateY(100px)', opacity: 0 }}
          animate={{ transform: 'translateY(0px)', opacity: 1 }}
          transition={{ type: 'spring', duration: 1.5, stiffness: 30 }}
          className="flex flex-row flex-wrap flex-grow basis-0 w-full items-center"
          >
            <div className="flex flex-col aspect-video min-w-[20rem] lg:min-w-[26rem] flex-grow overflow-scroll border-[1px] border-white shadow-xl shadow-fuchsia-900 rounded-xl snap-y snap-mandatory">
              {
                frontendProjects.map((project, index) => {
                  return (
                    <motion.div 
                    initial={{ opacity: 0,}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1.5 }}
                    onViewportEnter={() => setSelectedProject(index)}
                    className="relative flex flex-none h-full w-full mb-0.5 snap-start"
                    key={'frontend' + index}>
                      <Image alt={project.name} src={project.image} fill={true} className="object-cover" />
                    </motion.div>
                  )
                })
              }
            </div>
            <motion.div className="flex flex-col justify-center px-4 flex-grow basis-0">
              <motion.h1 layout className="text-5xl text-white font-newake">{frontendProjects[selectedProject].name}</motion.h1>
              <motion.h2 layout className="text-xl text-neutral-200 font-sans mb-4 break-words">{frontendProjects[selectedProject].description}</motion.h2>
              <motion.div layout className="flex flex-row flex-wrap gap-x-4 justify-center bg-white bg-opacity-10 rounded-xl px-4 pt-4 ">
                {
                  frontendProjects[selectedProject].tech.map((tech, index) => <motion.div
                  layout
                  key={tech}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col w-8 sm:w-16 h-12 sm:h-24"
                  >
                    <div className="flex w-full h-8 sm:h-16">
                      <Image alt={tech} src={`/logos${techImages[tech as keyof typeof techImages]}`} width={(screenWidth < 640 ? 32 : 64)} height={64} className="object-contain" />
                    </div>
                    <h3 className="hidden sm:block text-xs text-center text-white font-sans">{tech}</h3>
                  </motion.div>)
                }
              </motion.div>
            </motion.div>
          </motion.div>
        }
      </motion.div>
      <motion.div onViewportEnter={() => {
        setSelectedProject(0);
        setTimeout(() => {
          setThirdDelay(true);
        }, 1000);
        const backendScroll = setTimeout(() => {
          setFourthDelay(true);
          const scrollRef = document.getElementById('backend');
          if (scrollRef) scrollRef.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
        setBackendScrollTimeout(backendScroll as any);
      }}
      onViewportLeave={() => {
        setThirdDelay(false);
        setFourthDelay(false);
        clearTimeout(backendScrollTimeout!);
      }}
      key="backend" className={"flex flex-col z-20 h-screen mt-20 mb-2 w-full px-8 gap-y-8 snap-start " + (thirdDelay ? 'justify-start ' : 'justify-center ') + (fourthDelay ? 'items-start' : 'items-center')}
      >
        <motion.div
        layout 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 1.5, stiffness: 30 }}
        className={"flex flex-col justify-center h-fit mt-4 sm:mt-8 "}>
          <div className="flex flex-row h-fit w-full">
            <h1 className="flex flex-row text-blue-400 text-5xl sm:text-9xl font-newake mb-2">
              backend
            </h1>
            <Image alt="" src="/robot.gif" width={(screenWidth > 640 ? 210 : 80)} height={128} className="-translate-y-2 mr-auto" />
          </div>
          <h2 className="text-neutral-400 text-2xl sm:text-4xl font-newake mr-auto">
            finally, some <span className="text-blue-700">real</span> coding 🧐
          </h2>
        </motion.div>
        {
            fourthDelay &&
          <motion.div
          layout
          initial={{ transform: 'translateY(100px)', opacity: 0 }}
          animate={{ transform: 'translateY(0px)', opacity: 1 }}
          transition={{ type: 'spring', duration: 1.5, stiffness: 30 }}
          className="flex flex-row flex-wrap flex-grow basis-0 w-full items-center"
          >
            <div className="flex flex-col aspect-video min-w-[20rem] lg:min-w-[26rem] flex-grow overflow-scroll border-[1px] border-white shadow-xl shadow-fuchsia-900 rounded-xl snap-y snap-mandatory">
              {
                backendProjects.map((project, index) => {
                  return (
                    <motion.div 
                    initial={{ opacity: 0,}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1.5 }}
                    onViewportEnter={() => setSelectedProject(index)}
                    className="relative flex flex-none h-full w-full mb-0.5 snap-start"
                    key={'frontend' + index}>
                      <Image alt={project.name} src={project.image} fill={true} className="object-cover" />
                    </motion.div>
                  )
                })
              }
            </div>
            <motion.div className="flex flex-col justify-center px-4 flex-grow basis-0">
              <motion.h1 layout className="text-5xl text-white font-newake">{backendProjects[selectedProject].name}</motion.h1>
              <motion.h2 layout className="text-xl text-neutral-200 font-sans mb-4 break-words">{backendProjects[selectedProject].description}</motion.h2>
              <motion.div layout className="flex flex-row flex-wrap gap-x-4 justify-center bg-white bg-opacity-10 rounded-xl px-4 pt-4 ">
                {
                  backendProjects[selectedProject].tech.map((tech, index) => <motion.div
                  layout
                  key={tech}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col w-8 sm:w-16 h-12 sm:h-24"
                  >
                    <div className="flex w-full h-8 sm:h-16">
                      <Image alt={tech} src={`/logos${techImages[tech as keyof typeof techImages]}`} width={(screenWidth < 640 ? 32 : 64)} height={64} className="object-contain" />
                    </div>
                    <h3 className="hidden sm:block text-xs text-center text-white font-sans">{tech}</h3>
                  </motion.div>)
                }
              </motion.div>
            </motion.div>
          </motion.div>
        }
      </motion.div>
      <motion.div onViewportEnter={() => {
        setSelectedProject(0);
        setTimeout(() => {
          setFifthDelay(true);
        }, 1000);
        const mlscroll = setTimeout(() => {
          setSixthDelay(true);
          const scrollRef = document.getElementById('mlops');
          if (scrollRef) scrollRef.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
        setMlScrollTimeout(mlscroll as any);
      }}
      onViewportLeave={() => {
        setFifthDelay(false);
        setSixthDelay(false);
        clearTimeout(mlScrollTimeout!);
      }}
      key="mlops" className={"flex flex-col z-20 h-screen mt-20 mb-2 w-full px-8 gap-y-8 snap-start " + (fifthDelay ? 'justify-start ' : 'justify-center ') + (sixthDelay ? 'items-start' : 'items-center')}
      >
        <motion.div
        layout 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 1.5, stiffness: 30 }}
        className={"flex flex-col justify-center h-fit mt-4 sm:mt-8 "}>
          <div className="flex flex-row h-fit w-full">
            <h1 className="flex flex-row text-purple-300 text-5xl sm:text-9xl font-newake mb-2">
              MLOps
            </h1>
            <Image alt="" src="/chips_sm.gif" width={(screenWidth > 640 ? 210 : 80)} height={100} className="-translate-y-2 sm:-translate-y-6 -translate-x-6 mr-auto" />
          </div>
          <h2 className="text-neutral-400 text-2xl sm:text-4xl font-newake mr-auto">
            making <span className="text-yellow-300">sand</span> think. <span className="text-fuchsia-500">trillions</span> of grains. 🌌
          </h2>
        </motion.div>
        {
            sixthDelay &&
          <motion.div
          layout
          initial={{ transform: 'translateY(100px)', opacity: 0 }}
          animate={{ transform: 'translateY(0px)', opacity: 1 }}
          transition={{ type: 'spring', duration: 1.5, stiffness: 30 }}
          className="flex flex-row flex-wrap flex-grow basis-0 w-full items-center"
          >
            <div className="flex flex-col aspect-video min-w-[20rem] lg:min-w-[26rem] flex-grow overflow-scroll border-[1px] border-white shadow-xl shadow-fuchsia-900 rounded-xl snap-y snap-mandatory">
              {
                mlProjects.map((project, index) => {
                  return (
                    <motion.div 
                    initial={{ opacity: 0,}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1.5 }}
                    onViewportEnter={() => setSelectedProject(index)}
                    className="relative flex flex-none h-full w-full mb-0.5 snap-start"
                    key={'ml' + index}>
                      <Image alt={project.name} src={project.image} fill={true} className="object-cover" />
                    </motion.div>
                  )
                })
              }
            </div>
            <motion.div className="flex flex-col justify-center px-4 flex-grow basis-0">
              <motion.h1 layout className="text-5xl text-white font-newake">{mlProjects[selectedProject].name}</motion.h1>
              <motion.h2 layout className="text-xl text-neutral-200 font-sans mb-4 break-words">{mlProjects[selectedProject].description}</motion.h2>
              <motion.div layout className="flex flex-row flex-wrap gap-x-4 justify-center bg-white bg-opacity-10 rounded-xl px-4 pt-4 ">
                {
                  mlProjects[selectedProject].tech.map((tech, index) => <motion.div
                  layout
                  key={tech}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col w-8 sm:w-16 h-12 sm:h-24"
                  >
                    <div className="flex w-full h-8 sm:h-16">
                      <Image alt={tech} src={`/logos${techImages[tech as keyof typeof techImages]}`} width={(screenWidth < 640 ? 32 : 64)} height={64} className="object-contain" />
                    </div>
                    <h3 className="hidden sm:block text-xs text-center text-white font-sans">{tech}</h3>
                  </motion.div>)
                }
              </motion.div>
            </motion.div>
          </motion.div>
        }
      </motion.div>
      { onClient && ((screenWidth > 640) && (scrollPos < 10) ?
        <Spline scene="https://prod.spline.design/iVqodeQXuOPQpDf4/scene.splinecode" style={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          top: 0,
          filter: ( screenWidth < 1024 ? 'brightness(50%)' : 'brightness(100%)'),
        }} />
      :
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        key="bgvideo-div"
        style={{
          position: 'relative',
          zIndex: -1,
        }}
      >
        <video autoPlay muted loop id="bgvideo" className="brightness-50"
        style={{
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
      )}
    </AnimatePresence>
  )
}
