import {motion} from "framer-motion"

const Navbar = () => {
  const navbarAnimation = {
    hidden:{
      y:-100,
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
    <motion.nav className="flex justify-between items-center pt-4 relative z-50" variants={navbarAnimation} initial="hidden" animate="show">
        <div>
            <h1 className="font-bold text-xl">Mathi Praveen</h1>
        </div>
        <ul className="w-[250px] flex justify-between items-center">
            <li><a href="#" className="font-semibold text-sm">Portfolio</a></li>
            <li><a href="#" className="font-semibold text-sm">Resume</a></li>
            <li><a href="#" className="font-semibold text-sm">HireMe</a></li>
        </ul>
        <div>
            <a href="#" className="font-semibold text-sm">About</a>
        </div>
    </motion.nav>
  )
}

export default Navbar