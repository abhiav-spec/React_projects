import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // 🔥 Background Color State
  const [bgColor, setBgColor] = useState("bg-gray-900")

  // 🔥 Color Options
  const colors = [
    { name: "Red", class: "bg-red-500" },
    { name: "Green", class: "bg-green-600" },
    { name: "Blue", class: "bg-blue-600" },
    { name: "Olive", class: "bg-lime-700" },
    { name: "Gray", class: "bg-gray-500" },
    { name: "Yellow", class: "bg-yellow-300 text-black" },
    { name: "Pink", class: "bg-pink-300 text-black" },
    { name: "Purple", class: "bg-purple-700" },
    { name: "Lavender", class: "bg-indigo-200 text-black" },
    { name: "White", class: "bg-white text-black" },
    { name: "Black", class: "bg-black" },
  ];

  return (
    <>
      <div className={`min-h-screen flex flex-col w-full h-screen duration-500 ${bgColor}`}>

        {/* ------------------ HEADER ------------------ */}
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                data-command="show-modal"
                data-commandfor="mobile-menu"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
              <a href="#" className="text-sm/6 font-semibold text-white">Product</a>
              <a href="#" className="text-sm/6 font-semibold text-white">Features</a>
              <a href="#" className="text-sm/6 font-semibold text-white">Marketplace</a>
              <a href="#" className="text-sm/6 font-semibold text-white">Company</a>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm/6 font-semibold text-white">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </header>

       

        {/* ------------------ CENTER HERO UI ------------------ */}
        <div className="relative isolate px-6 pt-14 lg:px-8 flex-1 flex items-center">
          <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            ></div>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
               I am Abhinnav Mishra
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md">
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white">
                  Learn more →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
       {/* ------------------ COLOR PICKER ADDED HERE ------------------ */}
        <div className="flex justify-center mt-24 z-40">
          <div className="flex gap-3 bg-white p-4 rounded-full shadow-xl px-6">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setBgColor(c.class)}
                className={`px-4 py-2 rounded-full font-semibold shadow ${c.class}`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
    </>
  )
}

export default App
