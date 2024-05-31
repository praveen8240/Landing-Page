import { motion } from "framer-motion";

const Footer = () => {
  const footerAnimation = {
    hidden: {
      y: 100,
    },
    show: {
      y: 0,
      transition: {
        delay: 3.9,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer className="hidden md:flex lg:flex justify-center px-4 sm:px-12" variants={footerAnimation} initial="hidden" animate="show">
      <ul className="flex justify-between items-center space-x-4 sm:space-x-6">
        <li><a href="https://www.linkedin.com/in/praveen-mathi" className="text-xs sm:text-sm font-semibold">LinkedIn</a></li>
        <li><a href="https://leetcode.com/u/praveenmathi824/" className="text-xs sm:text-sm font-semibold">LeetCode</a></li>
        <li><a href="https://github.com/praveen8240" className="text-xs sm:text-sm font-semibold">GitHub</a></li>
        <li><a href="https://www.instagram.com/praveen_mathi_/" className="text-xs sm:text-sm font-semibold">Instagram</a></li>
      </ul>
    </motion.footer>
  );
};

export default Footer;
