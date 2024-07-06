import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img from './shoot.jpg';
import circle from './circle.png';
import Footer from "./components/Footer.jsx";
import './App.css';
import Navbar from "./components/NavBar.jsx";

const App = () => {
  const [isLaunched, setIsLaunched] = useState(false);
  const [circleSpin, setCircleSpin] = useState(false);
  const handleLaunch = () => {
    setIsLaunched(true);
    setTimeout(() => {
      setCircleSpin(true);
    }, 1000); // Delay to start spinning after other animations
  };

  const titleAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const titleAnimationChildren = {
    hidden: { y: -100 },
    show: { y: 0, transition: { ease: 'easeInOut' } },
  };

  const imgAnimation = {
    hidden: { clipPath: "polygon(0 0, 0 0, 0 0%, 0% 100%)" },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { delay: 2.2, duration: 0.5 },
    },
  };

  const explainAnimation = {
    hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { delay: 2.8, duration: 0.5 },
    },
  };

  const circleAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 0.8, 1],
      transition: { duration: 0.6, repeat: Infinity, repeatType: 'reverse' },
    },
    transitionToPosition: {
      top: '100px',
      right: '30px',
      scale: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  const [initialPosition, setInitialPosition] = useState({
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  });

  useEffect(() => {
    const updateInitialPosition = () => {
      if (window.innerWidth >= 1024) { // lg screen size
        setInitialPosition({
          top: '59%',
          left: '77%',
          transform: 'translate(-50%, -50%)',
        });
      } else { // sm screen size or default
        setInitialPosition({
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        });
      }
    };

    updateInitialPosition();

    window.addEventListener('resize', updateInitialPosition);
    return () => window.removeEventListener('resize', updateInitialPosition);
  }, []);

  return (
    <div className="h-screen px-4 sm:px-12 relative overflow-hidden">
      {isLaunched && <Navbar />}
      <div className="absolute -top-12 -left-12 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-black blur-[60px] sm:blur-[120px]" />
      <div className="absolute bottom-0 -right-12 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-[#44a9ed] blur-[50px] sm:blur-[100px]" />

      {!isLaunched && (
        <div className="h-screen flex items-center justify-center">
          <motion.div
            className="relative w-[200px] h-[200px] bg-[#44a9ed] rounded-full flex items-center justify-center cursor-pointer shadow-lg"
            onClick={handleLaunch}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "#3498db" }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute w-[220px] h-[220px] rounded-full bg-opacity-25"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ backgroundColor: "#44a9ed" }}
            />
            <motion.img
              src={circle}
              alt="Launch Circle"
              className="w-[220px] h-[220px] opacity-35"
            />
            <p className='absolute text-center font-bold text-lg sm:text-sm px-2'>
              START
            </p>
          </motion.div>
        </div>
      )}

      {isLaunched && (
        <motion.div
          className="absolute"
          initial={initialPosition}
          animate={{
            top: '100px',
            right: '30px',
            transform: 'translate(0, 0)',
            transition: { duration: 1, ease: 'easeInOut' },
          }}
        >
          <motion.img
            src={circle}
            alt="art"
            className={`lg:absolute lg:right-[26rem] w-[100px] sm:w-[100px] ${circleSpin ? 'spin-slow' : ''}`}
            initial="initial"
            animate={circleSpin ? { rotate: 360 } : {}}
            transition={circleSpin ? { repeat: Infinity, duration: 20, ease: 'linear' } : {}}
            variants={circleAnimation}
          />
        </motion.div>
      )}

      {isLaunched && (
        <>
          <section className="h-[calc(100vh-80px)] flex flex-col items-center relative">
            <div className="absolute left-[20px] sm:left-[200px] top-[50px] sm:top-[200px] h-[50px] sm:h-[100px] flex items-center overflow-hidden">
              <motion.div
                variants={titleAnimation}
                initial="hidden"
                animate="show"
                className="flex text-3xl sm:text-6xl font-bold text-[#e6951d] drop-shadow-lg z-50"
              >
                {Array.from("1-PhotoGallery").map((letter, idx) => (
                  <motion.span key={idx} variants={titleAnimationChildren}>{letter}</motion.span>
                ))}
              </motion.div>
            </div>
            <div className="w-[250px] sm:w-[500px] m-auto">
              <motion.img
                src={img}
                alt="art"
                className="rounded-lg object-cover"
                variants={imgAnimation}
                initial="hidden"
                animate="show"
              />
            </div>
            <motion.div
              className="bg-[#0e0e0e] p-2 rounded-lg sm:p-4 w-[200px] sm:w-[300px] absolute bottom-[50px] sm:bottom-[150px] right-[20px] sm:right-[200px] drop-shadow-lg z-50"
              variants={explainAnimation}
              initial="hidden"
              animate="show"
            >
              <p className="text-[#eaeaea] text-xs p-2 sm:text-sm text-justify">
                This is just a Landing Page. If you want to redirect to portfolio just click on below button and explore about me.........
              </p>
            </motion.div>
          </section>
          <div className="w-full h-screen">
            <motion.button
            onClick={() => {
              window.location.href = "https://praveen8240.github.io/praveen_portfolio/";
            }}
              className="bg-blue-500 animate-bounce hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full absolute bottom-10 left-10 lg:left-[65rem] lg:bottom-[8rem] w-[10rem]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -10, transition: { delay: 4.5, duration: 0.5, type: "spring", stiffness: 120 } }}
            >
              Explore Portfolio
            </motion.button>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default App;