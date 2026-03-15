import React from 'react'
import NavBar from '../components/NavBar';

const Intro = () => {
  return (
    <div>
    <NavBar />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Members-Only</h1>
            <p className="py-6">
              Join the modern blogging community designed for deep connection
              and effortless sharing. Simple, beautiful, and distraction-free.
            </p>
            <button className="btn btn-primary">Get Started for Free</button>
          </div>
        </div>
      </div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Members-Only</h6>
          <p>Empowering voices across the globe through thoughtful blogging.</p>
        </nav>
        <nav>
          <h6 className="footer-title">Privacy Policy</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">About Us</a>
        </nav>
      </footer>
    </div>
  );
}

export default Intro