import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:text-gray-400">Home</a></li>
        <li><a href="/about" className="hover:text-gray-400">About</a></li>
        <li><a href="/projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="/experience" className="hover:text-gray-400">Experience</a></li>
        <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar