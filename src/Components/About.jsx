import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-sky-700">
          About <span className="text-outline">Me</span>
        </h2>
        <p className="text-gray-500 text-center mb-12">
          Get to know more about my background and experience
        </p>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-md grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 border border-sky-300">

          {/* LEFT */}
          <div>
            <h3 className="text-xl font-semibold text-slate-500 mb-4">
              Who am I?
            </h3>

            <p className="text-slate-400 mb-4">
              I'm a passionate web developer creating digital experiences that users love.
            </p>

            <p className="text-slate-400">
              When I'm not coding, you can find me walking, reading tech blogs, or experimenting with
              new design tools.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 text-gray-400 text-sm">
              <div>
                <p>Name:</p>
                <p className="font-medium">Suu Yi Minn</p>
              </div>
              <div>
                <p>Email:</p>
                <p className="font-medium">suuyiminn@gmail.com</p>
              </div>
              <div>
                <p>Phone:</p>
                <p className="font-medium">+95 09944138580</p>
              </div>
              <div>
                <p>Availability:</p>
                <p className="font-medium text-sky-500">Available</p>
              </div>
            </div>
          </div>

        {/* RIGHT COLUMN */}
<div className="lg:col-span-2 w-full">

  {/* TWO COLUMN GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* EDUCATION */}
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-6 text-gray-400">
        My Education
      </h3>

      <div className="relative pl-8 border-l-2 border-sky-400 space-y-8">
        <div>
          <span className="absolute -left-[9px] top-1 w-4 h-4 bg-sky-500 rounded-full"></span>
          <h4 className="font-semibold text-gray-400">
            BE (Computer Engineering)
          </h4>
          <p className="text-sm text-gray-400">
            University of Technology (YCC)
          </p>
          <span className="text-xs text-sky-500">
            2012 – 2017
          </span>
        </div>

        <div>
          <span className="absolute -left-[9px] top-1 w-4 h-4 bg-sky-500 rounded-full"></span>
          <h4 className="font-semibold text-gray-400">
            Software Engineering & OJT
          </h4>
          <p className="text-sm text-gray-400">
            ExbraiN Education
          </p>
          <span className="text-xs text-sky-500">
            2022 – 2023
          </span>
        </div>
      </div>
    </div>

    {/* EXPERIENCE */}
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-6 text-gray-400">
        My Experience
      </h3>

      <div className="relative pl-8 border-l-2 border-sky-400 space-y-8">
        <div>
          <span className="absolute -left-[9px] top-1 w-4 h-4 bg-sky-500 rounded-full"></span>
          <h4 className="font-semibold text-gray-400">
            Staff Officer
          </h4>
          <p className="text-sm text-gray-400">
            Electricity Supply Enterprise
          </p>
          <span className="text-xs text-sky-500">
            2018 – 2021
          </span>
        </div>

        <div>
          <span className="absolute -left-[9px] top-1 w-4 h-4 bg-sky-500 rounded-full"></span>
          <h4 className="font-semibold text-gray-400">
            Junior Web Developer
          </h4>
          <p className="text-sm text-gray-400">
            Shwe Digit Co., Ltd
          </p>
          <span className="text-xs text-sky-500">
            2024 – Present
          </span>
        </div>
      </div>
    </div>

  </div>
</div>


        </div>
      </div>
    </section>
  )
}

export default About
