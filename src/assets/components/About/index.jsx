import React from "react";

const About = () => {
  const lists = [
    { title: "What is Netflix?" },
    { title: "How Much Does Netflix Cost?" },
    { title: "Where Can I Watch?" },
    { title: "How do I Cancel?" },
    { title: "What Can I Watch On Netflix?" },
    { title: "Is Netflix Good For Kids?" },
  ];
  return (
    <section className="pt-30">
      <div className="container">
        <p className="text-white text-3xl font-bold mx-20 ">
          Frequently Asked Questions
        </p>
        {/* <div className="w-full flex justify-center">
            {
                lists.map((list,index) =>(
                    <ul key={index} className='rounded w-2/3"'>
                        <li className='text-white text-2xl  border bg-about mt-3 p-5 flex justify-between'>{list.title} <span>+</span></li>
                    </ul>
                ))
            }
         
        </div> */}
        <div className="w-full flex justify-center pt-10">
          <ul className="w-2/3">
            {lists.map((list, index) => (
              <li
                key={index}
                className="text-white text-2xl bg-about mt-3 p-5 flex justify-between"
              >
                {list.title} <span>+</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
