import React from 'react';
import { skillsData } from '../data/data';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id='skills' className='py-20 px-6 bg-sky-50'>
      <div className='container mx-auto'>
        <h2 className='text-3xl text-sky-700 font-bold text-center mb-2'>
          My <span className='text-outline'>Skills</span>
        </h2>
        <p className='text-slate-500 text-center mx-auto mb-12'>
          The tools and technologies I use to bring ideas to life
        </p>

        <div className='grid md:grid-cols-2 gap-10'>
          {skillsData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                rotateX: 8,
                rotateY: -8,
                scale: 1.05,
                backgroundColor: "gray-700", // use valid hex or rgb
                borderColor: "sky-300" // animate border color only
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className='bg-sky-50 border-sky-300 rounded-xl p-6 shadow-lg border-2'
            >
              <h3 className='text-xl mb-4 text-sky-700'>{item.title}</h3>
              <div className='flex flex-wrap gap-4'>
                {item.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      boxShadow: "0px 10px 20px rgba(30, 8, 128, 0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className='flex items-center gap-2 px-3 py-2 bg-sky-500 rounded-lg cursor-pointer'
                  >
                    <span className='text-xl'>{skill.icon}</span>
                    <span className='text-sm text-white'>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
