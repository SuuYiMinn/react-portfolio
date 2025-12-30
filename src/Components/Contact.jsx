import React from 'react'
import { GrGithub } from 'react-icons/gr'
import { IoLocationSharp } from 'react-icons/io5'
import { LiaLinkedin } from 'react-icons/lia'
import { MdEmail } from 'react-icons/md'
import { PiPhone } from 'react-icons/pi'

const Contact = () => {
  return (
    <section
    id='contact'
    className='py-20 px-6'>
        <div className='container mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-2 text-sky-900'>Get In <span className='text-outline'>Touch</span></h2>
            <p className='text-gray-700 text-center mb-12'>
                The tools and technologies I use to bring idea to life.
            </p>
            <div className='bg-sky-100 rounded-2xl p-8 grid grid-cols-2 gap-12 border-2 border-sky-300'>
                <div>
                    <h3 className='text-xl font-semibold mb-6 text-sky-700'>
                        Contact Details
                    </h3>
                    <div className='space-y-6'>
                        <div className='flex items-start'>
                            <div className='p-2 bg-white rounded-full mr-4 border-2 border-sky-300'>
                                <IoLocationSharp className='text-sky-700' />
                            </div>
                            <div>
                                <h4 className='text-sky-700 font-semibold'>Location</h4>
                                <p className='text-slate-600'>Tarmwe, Yangon</p>
                            </div>

                        </div>
                        <div className='flex items-start'>
                            <div className='p-2 bg-white rounded-full mr-4 border-2 border-sky-300'>
                                <MdEmail className='text-sky-700' />
                            </div>
                            <div>
                                <h4 className='text-sky-700 font-semibold'>Email</h4>
                                <p className='text-slate-600'>suuyiminn@gmail.com</p>
                            </div>

                        </div>
                        <div className='flex items-start'>
                            <div className='p-2 bg-white rounded-full mr-4 border-2 border-sky-300'>
                                <PiPhone className='text-sky-700' />
                            </div>
                            <div>
                                <h4 className='text-sky-700 font-semibold'>Phone</h4>
                                <p className='text-slate-600'>+95 09944138580</p>
                            </div>

                        </div>
                    </div>
                    <div className='mt-8'>
                        <h4 className='font-semibold mb-4 text-sky-700'>Follow Me</h4>
                        <div className='flex gap-4'>
                            <div className='p-1 bg-white rounded-full hover:bg-sky-400 text-sky-700 text-2xl border-2 border-sky-300'><LiaLinkedin /></div>
                            <div className='p-1 bg-white rounded-full hover:bg-sky-400 text-sky-700 text-2xl border-2 border-sky-300'><GrGithub /></div>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <h3 className='text-xl font-semibold mb-6 text-sky-700'>Send me a message</h3>
                    <form action="" className='space-y-6'>
                        <div>
                            <label htmlFor="" className='block mb-3 text-sm text text-sky-700'>Your Name</label>
                            <input type='text' className='w-full px-4 py-2 border-2 border-sky-700 rounded-lg text-sky-700'/>
                        </div>
                        <div>
                            <label htmlFor="" className='block mb-3 text-sm text text-sky-700'>Email</label>
                            <input type='text' className='w-full px-4 py-2 border-2 border-sky-700 rounded-lg text-sky-700'/>
                        </div>
                        <div>
                            <label htmlFor="" className='block mb-3 text-sm text text-sky-700'>Subject</label>
                            <input type='text' className='w-full px-4 py-2 border-2 border-sky-700 rounded-lg text-sky-700'/>
                        </div>
                        <div>
                            <label htmlFor="" className='block mb-3 text-sm text text-sky-700'>Message</label>
                            <textarea type='text' className='w-full px-4 py-2 border-2 border-sky-700 rounded-lg text-sky-700'/>
                        </div>
                        <button className='px-6 py-2 rounded-full bg-sky-700 text-white border-2 border-sky-900'>Send Message</button>
                    </form>
                </div>

            </div>

        </div>

    </section>
  )
}

export default Contact