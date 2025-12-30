import React, { Fragment, useEffect, useState } from 'react'
import { navItems } from '../data/data'
import { BiPhoneCall } from 'react-icons/bi';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.id;
        }
      })
      setActiveSection(current);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <Fragment>
      <nav className='fixed bg-white shadow-md top-0 py-4 w-full z-50 backdrop-blur-sm border-b border-white/20
        px-3 transition-all'>
        <div className='container mx-auto flex items-center justify-between px-6'>
          <div className='text-2xl font-bold text-sky-600'>Suu Yi Minn</div>
          <ul className='hidden md:flex space-x-8 font-medium text-gray-700 text-sm uppercase'>
            {navItems.map((item) => (
              <li key={item.id} className={`hover:text-sky-600 transition-colors cursor-pointer ${activeSection === item.id ? "text-sky-600" : ""}`}>
                {item.label}

              </li>
            ))}
          </ul>
          <div className='flex items-center space-x-3'>
            <BiPhoneCall className='text-2xl text-sky-600' />
            <span className='text-sky-600'>+95 09944138580</span>

          </div>

        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar