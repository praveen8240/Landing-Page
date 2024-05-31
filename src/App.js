import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import img from './shoot.jpg';
import circle from './circle.png';
import Footer from "./components/Footer.jsx";
import './App.css'
import Navbar from "./components/NavBar.jsx";

const App = () => {
  const [isCircleSpinning, setIsCircleSpinning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCircleSpinning(true);
    }, 3500);
    return () => clearTimeout(timer);
  });

  const titleAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const titleAnimationChildren = {
    hidden: {
      y: -100,
    },
    show: {
      y: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
  };

  const imgAnimation = {
    hidden: {
      clipPath: "polygon(0 0, 0 0, 0 0%, 0% 100%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: 2.2,
        duration: 0.5,
      },
    },
  };

  const explainAnimation = {
    hidden: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: 2.8,
        duration: 0.5
      },
    },
  };

  const circleAnimation = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        delay: 3.1,
        duration: 0.4,
      },
    },
  };

  return (
    <div className="h-screen px-4 sm:px-12 relative overflow-hidden">
      <Navbar />
      <div className="absolute -top-12 -left-12 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-black blur-[60px] sm:blur-[120px]" />
      <div className="absolute bottom-0 -right-12 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-[#44a9ed] blur-[50px] sm:blur-[100px]" />
      <div>
        <motion.img
          src={circle}
          alt="art"
          className={`w-[100px] sm:w-[100px] absolute top-[80px] sm:top-[100px] right-[30px] sm:right-[380px] ${isCircleSpinning ? 'spin-slow' : ''}`}
          variants={circleAnimation}
          initial="hidden"
          animate="show"
        />
      </div>

      <section className="h-[calc(100vh-80px)] flex flex-col items-center relative">
        <div className="absolute left-[20px] sm:left-[200px] top-[50px] sm:top-[200px] h-[50px] sm:h-[100px] flex items-center overflow-hidden">
          <motion.div
            variants={titleAnimation}
            initial="hidden"
            animate="show"
            className="flex text-3xl sm:text-6xl font-bold text-[#e6951d] drop-shadow-lg z-50">
            {Array.from("1-PhotoGallery").map((letter, idx) => (
              <motion.span key={idx} variants={titleAnimationChildren}>{letter}</motion.span>
            ))}
          </motion.div>
        </div>
        <div className="w-[250px] sm:w-[500px] m-auto">
          <motion.img src={img} alt="art" className="rounded-lg object-cover" variants={imgAnimation} initial="hidden" animate="show" />
        </div>
        <motion.div className="bg-[#0e0e0e] p-2 rounded-lg sm:p-4 w-[200px] sm:w-[300px] absolute bottom-[50px] sm:bottom-[150px] right-[20px] sm:right-[200px] drop-shadow-lg z-50" variants={explainAnimation} initial="hidden" animate="show">
          <p className="text-[#eaeaea] text-xs p-2 sm:text-sm text-justify">
            This is just a Landing Page.If you want to redirect to portfolio just click on below button and explore about me.........
          </p>
        </motion.div>
      </section>
      <div className="w-full h-screen">
        <motion.button
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
    </div>
  );
};

export default App;
