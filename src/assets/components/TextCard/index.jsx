import React from 'react'

const TextCard = () => {
    const CardData=[
        { heading:"Enjoy on your TV" , desc:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."},
        { heading:"Download your shows to watch offline" , desc:"Save your favourites easily and always have something to watch."},
        { heading:"Watch everywhere" , desc:"Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."},
        { heading:"Create profiles for kids" , desc:"Send kids on adventures with their favourite characters in a space made just for them — free with your membership."},
    ]
  return (
        <section className='pt-30'>
            <div className="container">
                    <p className='text-3xl text-white mx-20 font-bold'>More reasons to join</p>
                <div className="row mt-10 flex justify-evenly w-full">
                    {
                        CardData.map((data, index) =>(
                            <div key={index}>
                                <div className='h-60 w-64 overflow-hidden text-white netflix-linear rounded'>
                                <h2 className='text-2xl font-bold mx-2 mt-10'>{data.heading}</h2>
                                <p className='font-light text-lg pt-5'>{data.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
  )
}

export default TextCard;