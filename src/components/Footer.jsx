import {motion} from "framer-motion"

const Footer = () => {
  const footerAnimation = {
    hidden:{
      y:100,
    },
    show:{
      y:0,
      transition:{
        delay:3.9,
        duration:0.5
      }
    }
  }
  return (
    <motion.footer className="flex justify-center" variants={footerAnimation} initial="hidden" animate="show">
        <ul className="w-[300px] flex justify-between items-center">
        <li><a href="https://www.linkedin.com/in/praveen-mathi" className="text-sm font-semibold">LinkedIn</a></li>
        <li><a href="https://leetcode.com/u/praveenmathi824/" className="text-sm font-semibold">LeetCode</a></li>
        <li><a href="https://github.com/praveen8240" className="text-sm font-semibold">GitHub</a></li>
        <li><a href="https://www.instagram.com/praveen_mathi_/" className="text-sm font-semibold">Instagram</a></li>
        </ul>
    </motion.footer>
  )
}

export default Footer