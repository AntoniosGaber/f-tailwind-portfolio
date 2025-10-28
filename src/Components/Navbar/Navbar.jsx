import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";

export default function Navbar() { 
  const [scrollY, setScrollY] = useState(0) 
  
  document.addEventListener("scroll", () => { 
    setScrollY(window.scrollY)
  })

  return (
    <>
      <nav className={`bg-[#2c3e50] ${scrollY === 0? "py-8" : "py-5"} fixed inset-x-0 top-0 z-50  text-white w-full`}>
        <div className="container flex justify-between items-center  mx-auto transition-all duration-500 ">
          <div className="gap-4">
            <Link to="/" className="text-3xl font-bold">START FRAMEWORK</Link>
          </div>

          <div>
            <ul className="flex gap-10 font-bold">
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/portofolio">Portofolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
