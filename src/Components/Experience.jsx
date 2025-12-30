import React from 'react'
import { experiences } from '../data/data';

const Experience = () => {
    return (
        <section id='experience' className='py-20 px-6'>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold text-center text-sky-700 mb-2'>My <span className='text-outline'>Experience</span></h2>
                <p className='text-gray-500 text-center mb-12'>The tools and technologies I use to bring idea to life</p>
                <div className='relative w-full mx-w-5xl mx-auto px-4 py-12'>
                    <div className='absolute hidden md:left-1/2 top-0 bottom-0 bottom-0 w-1 md:flex bg-sky-900 transform -translate-x-1/2'>

                    </div>
                    <div className='space-y-16'>
                        {
                            experiences.map((exp, index) =>{
                                const isLeft = index % 2 === 0;
                        return (
                        <div key={index} className={`relative flex items-center w-full ${isLeft ? "md:justify-start" : "md:justify-end"} justify-center`}>
                            <div className='absolute left-1/2 md:flex hidden transform -translate-1/2 z-10'>
                                <div className='h-10 w-10 rounded-full shadow-lg flex justify-center items-center bg-sky-500'>
                                <span className='text-2xl text-white'>{exp.logo}</span>
                                </div>
                            </div>
                            <div className={`w-full md:w-[45%] p-6 rounded-xl shadow-lg border border-sky-300 bg-sky-50 text-sky-500 hover:scale-105 transition-transform duration-300
                                ${isLeft?"md:text-right md:mr-12":"md:ml-12"} text-left
                                `}>
                                    <h3 className='text-xl font-semibold text-sky-500'>{exp.company}</h3>
                                    <p className='text-sm text-white-500 mb-3'>{exp.period}</p>
                                    <p className='text-sm text-gray-500 text-justify mb-4'>{exp.description}</p>
                                    <div className='flex flex-wrap gap-2 md:justify-end justify-start'>
                                        {
                                            exp.skills.map((skill, i)=>(
                                                <span key={i} className='px-3 py-1 bg-sky-500 rounded-md text-white text-sm font-light'>{skill}</span>
                                
                                            ))
                                        }

                                    </div>
                            </div>
                        </div>
                        )
                            })
                        }

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Experience