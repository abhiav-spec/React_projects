import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`
      )
      setUserData(response.data)
    } catch (error) {
      console.log("Error fetching images", error)
    }
  }

  useEffect(() => {
    getData()
  }, [index])

  let printUserData = (
    <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>
      Loading...
    </h3>
  )

  if (userData.length > 0) {
    printUserData = userData.map((elem) => (
      <div key={elem.id}>
        <Card elem={elem} />
      </div>
    ))
  }

  return (
    <div className='bg-black min-h-screen text-white'>
      
      {/* Navbar */}
      <Navbar elem={index}/>

      {/* Main Content (pushed below navbar) */}
      <div className='pt-20 px-4'>
        
        <div className='flex flex-wrap gap-4 p-2 justify-center'>
          {printUserData}
        </div>

        {/* Pagination */}
        <div className='flex justify-center gap-6 items-center p-6'>
          <button
            style={{ opacity: index === 1 ? 0.6 : 1 }}
            className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1)
                setUserData([])
              }
            }}
          >
            Prev
          </button>

          <h4 className="font-semibold">Page {index}</h4>

          <button
            className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
            onClick={() => {
              setUserData([])
              setIndex(index + 1)
            }}
          >
            Next
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
