import React from "react";

const Footer = () => {
  return (
    <footer className="pt-20">
      <div className="container text-white">
        <p className="text-center text-2xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="row flex justify-center mt-10 w-full space-x-10 ">
          <input
            type="email"
            placeholder="Email Address:"
            required
            className="border text-white  text-2xl p-3 w-96 rounded "
          />
          <a
            href="#"
            className="p-3  rounded  bg-red-500 w-62 text-center text-2xl font-bold"
          >
            {" "}
            Get Started
          </a>
        </div>
        <div className="mt-10">
          <p className="text-white text-xl mx-30 txt-net txt-net">Questions? Call 000-800-919-1743</p>
        <div className="flex  justify-evenly mx-auto mt-10">
          <div>
            <a href="#" className="block txt-net">FAQ</a>
            <a href="#" className="block txt-net">Investor Relations</a>
            <a href="#" className="block txt-net">Privacy</a>
            <a href="#" className="block txt-net">Speed Test</a>
          </div>
          <div className="">
            <a href="#" className="block txt-net"> Help Centre</a>
            <a href="#" className="block txt-net">jobs</a>
            <a href="#" className="block txt-net">Cookie Preferences</a>
            <a href="#" className="block txt-net">Legal Notices</a>
          </div>
          <div className="">
            <a href="#" className="block txt-net">Account</a>
            <a href="#" className="block txt-net">Ways to Watch</a>
            <a href="#" className="block txt-net">Corporate Information</a>
            <a href="#" className="block txt-net">Only on Netflix</a>
          </div>
          <div className="">
            <a href="#" className="block txt-net">Media Centre</a>
            <a href="#" className="block txt-net">Terms of Use</a>
            <a href="#" className="block txt-net">Contact Us</a>
          </div>
        </div>
        </div>

        <div className="mt-10 mx-20">
          <select className="border px-2 py-1 rounded txt-net text-center w-32 font-bold">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
            <p className="mt-8  txt-net">Netflix India</p>
            <p className="mt-8  txt-net">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a>Learn more.</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
