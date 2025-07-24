import React from 'react';
import Header from '../../components/Header';

const Home = () => {
  return (
        <section className='img-wrapper bg-opacity-100'>
            <Header/>
           <div className="container ">
            <div className="row  text-center py-32 ">
                <div className="col-50">
                    <h2 className='text-white text-6xl font-extrabold'>Unlimited movies, TV <br/>shows and more</h2>
                    <h3 className='text-white font-bold pt-5 text-2xl'>Starts at ₹149. Cancel at any time.</h3>
                </div>
                <div className="row pt-5">
                    <p className='text-white font-medium '>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className='d-flex items-center pt-5'>
                        <input type="email"  placeholder='Email Address' className='border rounded p-3 text-white mx-5 w-80 text-semibold bg-black'/>
                        <button className='border rounded text-white p-2 w-52 text-2xl font-semibold bg-red-600'>Get started</button>
                    </div>
                </div>
            </div>
           </div>
        </section>
  )
}

export default Home;