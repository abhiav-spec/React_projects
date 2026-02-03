import React from 'react'

function Home() {
  return (
    <div className='pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      <div className='max-w-4xl mx-auto px-6 py-12'>
        <h1 className='text-5xl font-bold text-indigo-900 mb-4'>Welcome Home</h1>
        <p className='text-lg text-gray-700 mb-8'>This is the home page of our routing application.</p>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <p className='text-gray-600 leading-relaxed'>
            Navigate using the menu above to explore different sections of the application.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home