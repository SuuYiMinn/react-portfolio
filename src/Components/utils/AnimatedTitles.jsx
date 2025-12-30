import React, { useEffect, useState } from 'react'

const AnimatedTitles = () => {
  const roles = [
    { title: 'Web Developer' },
    { title: 'Software Developer' },
    { title: 'Full Stack Developer' },
  ]

  const [currentRoleIndex, setCurrIndex] = useState(0)
  const [currentText, setCurText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const current = roles[currentRoleIndex].title

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // typing
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else {
          setCurText(current.substring(0, currentText.length + 1))
        }
      } else {
        // deleting
        if (currentText === '') {
          setIsDeleting(false)
          setCurrIndex((prev) => (prev + 1) % roles.length)
        } else {
          setCurText(current.substring(0, currentText.length - 1))
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed])

  return (
    <div className="text-center text-start">
      <h1 className="text-2xl md:text-3xl font-bold text-outline mb-6">
        <span className="pb-10">{currentText}</span>
        <span className="inline-block h-7 md:h-8 w-0.5 bg-cyan-700 ml-1 animate-pulse"></span>
      </h1>
    </div>
  )
}

export default AnimatedTitles
