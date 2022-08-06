import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const HomeLayout = ({ children }) => {
  return (
    <div className="max-w-screen w-full relative min-h-screen flex flex-col justify-between">
      <Navbar />
      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default HomeLayout
