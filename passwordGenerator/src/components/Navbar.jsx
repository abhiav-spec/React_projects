import React from 'react'

function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center text-white font-bold">P</div>
          <span className="font-semibold">PassTools</span>
        </div>

        <div className="flex items-center gap-3 flex-1 max-w-md">
          <a href="#" className="text-sm hover:underline">Home</a>
          <div className="flex-1">
            <input
              aria-label="Search"
              className="w-full rounded-md px-3 py-1 text-black"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md">Search</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
