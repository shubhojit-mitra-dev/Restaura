import { useState } from "react"
import logo from '../assets/logo.png'
import { LINKS } from '../constants'
import { FaTimes, FaBars } from "react-icons/fa"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleScroll = (e, targetId) => {
        e.preventDefault()
        const target = document.getElementById(targetId)
        target.scrollIntoView({ behavior: 'smooth' })
    }

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="fixed lg:top-4 top-0 z-50 flex w-full flex-col justify-center items-center">
            <div className="w-full py-8 lg:py-4 border-b sm:border-none flex items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] xl:w-[55rem] lg:rounded-full lg:shadow-lg">
                <a href="#hero" onClick={(e) => handleScroll(e, "hero")}>
                <img src={logo} alt="Restaura" width={120} height={30} />
                </a>
                <div className="hidden lg:flex">
                    {LINKS.map((link, index) => (
                        <a key={index} href={`#${link.targetId}`} className={`text-base text-neutral-400 ${index !== 0 ? "border-l-2 border-neutral-300/20" : ""} xl:px-7 px-5 transition-transform hover:scale-105 hover:text-white`} onClick={(e) => handleScroll(e, link.targetId)}>
                            {link.text}
                        </a>
                    ))}
                </div>
                <div className="lg:hidden">
                    <button onClick={handleToggle}>
                        {isOpen ? <FaTimes className="transition-transform duration-200" /> : <FaBars className="transition-transform duration-200" />}
                    </button>
                </div>
            </div>
            <div className={`w-full backdrop-blur-lg lg:hidden transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                {LINKS.map((link, index) => (
                    <a key={index} href={`#${link.targetId}`} className="block uppercase p-4 tracking-tighter hover:bg-white/10 transition-colors duration-200 text-lg" onClick={(e) => handleScroll(e, link.targetId)}>
                        {link.text}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar