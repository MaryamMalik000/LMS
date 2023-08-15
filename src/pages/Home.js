import React from 'react'
import Navbar from '../components/Navbar'
import Carousal from '../components/Carousal'
import Category from '../components/Category'
import WhyChooseUs from '../components/WhyChooseUs'
import TopCourses from '../components/TopCourses'
import Deal from '../components/Deal'
import TeacherCard from '../components/TeacherCard'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>  
        <Carousal/>
  <Category/>
<WhyChooseUs/>

<TopCourses/>
<Deal/>
<div style={{ marginTop: '35px' }}> 
        <TeacherCard />
      </div>
      <Footer/>
    </div>
  )
}

export default Home