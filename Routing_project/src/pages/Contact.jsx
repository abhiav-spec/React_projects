import React from 'react'

function Contact() {
  return (
    <div className='pt-20 min-h-screen bg-gradient-to-br from-purple-50 to-pink-100'>
      <div className='max-w-4xl mx-auto px-6 py-12'>
        <h1 className='text-5xl font-bold text-purple-900 mb-4'>Contact Us</h1>
        <p className='text-lg text-gray-700 mb-8'>Get in touch with our team.</p>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Name</label>
              <input type='text' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600' placeholder='Your name' />
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Email</label>
              <input type='email' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600' placeholder='Your email' />
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Message</label>
              <textarea className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600' rows='5' placeholder='Your message'></textarea>
            </div>
            <button type='submit' className='w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition duration-300'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact