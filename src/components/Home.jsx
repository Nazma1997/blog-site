import React from 'react'
import Navbar from './shared/Navigation'
import Banner from './shared/Banner'
import Stories from './shared/Stories'
import Author from './Author'
import Recommended from './Recommended'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
       <Navbar />
        <Banner />
        <Stories />
        <Author />
        <Recommended/>
        <Footer />
    </div>
  )
}

export default Home
