import React, { Fragment } from 'react'
import AnimatedTitles from './utils/AnimatedTitles'
import { FaFacebook, FaViber } from 'react-icons/fa'
import { BsTelegram, BsWhatsapp } from 'react-icons/bs'
import { GrGithub } from 'react-icons/gr'

const Hero = () => {
  return (
    <Fragment>
      <section id='home' className='py-20 bg-sky-50 '>
        <div className='container mx-auto pt-16 flex flex-row items-center justify-between px-10 md:justify-center gap-10'>


          <div className='w-full md:w-[600px]'>
            <h3 className='text-md capitalize font-bold text-sky-700 leading-tight mb-4'>
              I'm Suu Yi Minn
            </h3>
            <AnimatedTitles />
            <p className='text-slate-500 mt-2 text-sm'>
              I create beautiful, functional website and application with modern technologies.<p> Let's works together your ideas to life.</p>
            </p>
            {/* <div className='mt-4 flex flex-wrap gap-4 text-[12px] font-medium text-white'>
              <span className='px-3 py-2 bg-sky-500 backdrop-blur-md rounded-full'>Web Design</span>
              <span className='px-4 py-2 bg-sky-500 backdrop-blur-md rounded-full'>Frontend Development</span>
              <span className='px-4 py-2 bg-sky-500 backdrop-blur-md rounded-full'>Backend Development</span>


            </div> */}
            <div className='flex gap-1 mt-3 justify-start'>
              <button className='p-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors'>
                <BsWhatsapp />
              </button>
              <button className='p-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors'>
                <GrGithub />
              </button>
              <button className='p-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors'>
                <BsTelegram />
              </button>


            </div>
            <div className='mt-7 flex-col space-x-3 sm:flex-row space-y-3'>
              {/* <button className='px-5 py-3 rounded-full cursor-pointer bg-gradient-to-r from-sky-700 to-sky-900 font-light text-white hover:opacity-70 transition-opacity'>
                View My Works
              </button> */}
              <button className='px-5 py-3 rounded-full cursor-pointer bg-gradient-to-r from-sky-600 to-sky-700 font-light text-white hover:opacity-70 transition-opacity'>
                Download CV
              </button>

            </div>
          </div>
          <div className="w-65 h-65 md:w-75 md:h-75 rounded-3xl bg-center bg-cover flex-shrink-0 bg-[url(/src/assets/profile.jpeg)]">
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Hero