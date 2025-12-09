import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import WebContent from '../section/WebContent1/WebContent'
import BlogSection from '../section/blogSection/blogSection'
import WebContentSecond from '../section/WebContent2/WebContentSecond'
import FAQSection from '../section/FAQSection/FAQSection'
import Footer from '../section/Footer/Footer'
import DownloadAppSection from '../section/DownloadAppSection/DownloadAppSection'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSlider/>
      <ImageSlider/>
      <WebContent/>
      <BlogSection/>
      <WebContentSecond/>
      <FAQSection/>
      <DownloadAppSection/>
      <Footer/>
    </div>
  )
}

export default Home
