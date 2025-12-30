import React from 'react'
import { portfolioItems } from '../data/data'

const Portfolio = () => {
    return (
        <section
            id="portfolio"
            className='py-20 px-6 bg-sky-50'>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold text-center mb-2 text-sky-900'>My <span className='text-outline'>Portfolio</span></h2>
                <p className='text-gray-500 text-center mb-12'>
                    The tools and technologies I use to bring idea to life.
                </p>
                <div className='grid md:grid-cols-3 gap-6 rid-cols-1'>
                    {
                        portfolioItems.map((item, index) => (
                            <div className='bg-sky-100 border-2 border-sky-300 rounded-xl overflow-hidden hover:translate-y-1 transition-transform'>
                                <div className='h-48 overflow-hidden'>
                                    <img
                                        src={item.image}
                                        className='w-full h-full object-cover transition-transform hover:scale-105'
                                    />
                                    
                                   

                                </div>
                                <div className='p-5'>
                                        <h3 className='text-sky-700 font-semibold text-lg'>{item.title}</h3>
                                        <p className='text-sky-700'>{item.category}</p>
                                    </div>

                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default Portfolio