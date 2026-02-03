import React, { useState } from 'react'

const Section2 = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  }

  return (
    <div className='h-screen w-full bg-black flex items-center justify-center'>
      <div className='flex flex-col items-center gap-6'>
        <div className='text-white text-3xl font-bold'>Count: {count}</div>

        <button
          className='bg-white text-black px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform'
          onClick={handleClick}
          aria-label='increment'
        >
          Click to increase
        </button>
      </div>
    </div>
  )
}

export default Section2