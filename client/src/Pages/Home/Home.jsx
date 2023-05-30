import React from 'react'
import Bizpro from '../../Components/Bizpro/Bizpro'
import Blog from '../../Components/Blog/Blog'
import Hero from '../../Components/Hero/Hero'
import Team from '../../Components/Team/Team'
import './Home.css'
import { Helmet } from "react-helmet";  

const Home = () => {
  return (
    <>
        <Helmet>  
        <html lang="en" />  
        <title>Home page</title>   
      </Helmet>  

    <Hero/>
    <Bizpro/>
    <Team/>
    <Blog/>
    </>
  )
}

export default Home