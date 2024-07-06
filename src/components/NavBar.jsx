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
    <motion.nav className="lg:flex md:flex hidden justify-between items-center pt-4 relative z-50" variants={navbarAnimation} initial="hidden" animate="show">
        <div>
            <h1 className="font-bold text-xl">Mathi Praveen</h1>
        </div>
        <div>
            Know more about me from Portfolio
        </div>
    </motion.nav>
  )
}

export default Navbar