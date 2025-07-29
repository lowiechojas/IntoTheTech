import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    if (e.key === 'Enter' && search.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`)
      setSearch('')
    }
  }

  return (
    <div className='flex flex-col items-center justify-between text-lg top-0 sticky z-[999] bg-white'>
      <div className='flex flex-row w-full justify-around items-center p-4'>
        <div>
          <Link to="/"><h1>LOGO</h1></Link>
        </div>

        <div className='flex gap-10 items-center'>
            <ul className='flex gap-10 items-center'>
          {/* 🔍 Search Bar Replacing Search For... */}
          <input
            type="text"
            placeholder="Search topics..."
            className="border w-[10vw] border-gray-300 px-3 py-1 rounded text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className='flex w-full items-center text-xl p-2 bg-[#1C0966] text-white pl-30 pr-30'>
        <ul className='flex gap-15'> 
          <li><Link to="/electronics">Electronics</Link></li>
          <li><Link to="/webdev">Web Development</Link></li>
          <li><Link to="/programming">Programming Language</Link></li>
          <li><Link to="/ecommerce">eCommerce</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
