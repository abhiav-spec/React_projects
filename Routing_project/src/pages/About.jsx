import React from 'react'

function About() {
  return (
    <div className='pt-20 min-h-screen bg-gradient-to-br from-green-50 to-emerald-100'>
      <div className='max-w-4xl mx-auto px-6 py-12'>
        <h1 className='text-5xl font-bold text-emerald-900 mb-4'>About Us</h1>
        <p className='text-lg text-gray-700 mb-8'>Learn more about our application and mission.</p>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h2 className='text-2xl font-semibold text-emerald-900 mb-4'>Our Story</h2>
          <p className='text-gray-600 leading-relaxed'>
            We built this routing application to demonstrate the power of React Router and modern web development practices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About