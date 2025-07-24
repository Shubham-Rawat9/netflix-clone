import React from 'react';
import logo from "../../images/netflix-logo2.png"

const Header = () => {
  return (
    <header>
      <div className="container pt-5">
        <div className="row flex justify-between items-center">
          <div className='mx-40'>
            <img src={logo} alt="Netflix" className='block w-50' />
          </div>
          <div className='flex items-center gap-5 mx-32'>
            <select className="border px-2 py-1 rounded text-white w-32 font-bold">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
            <a href="#" className="border px-3 py-1 rounded text-center text-white w-24 font-bold bg-red-600">Sign In</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;