import React from 'react'
import "./Home.css"
// import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';
import LeftBanner from '../LeftBanner/LeftBanner';
import RightBanner from '../RightBanner/RightBanner';
import Footer from '../Footer/Footer';
import HealthyFoodImg from '../../Images/healthy-food-icon.png';
import EducationImg from "../../Images/training-icon.png";
import WaterImg from "../../Images/water-drop-icon.png";
import MedicalImg from "../../Images/doctor-icon.png";
import Video from '../Video/Video';

const Home = () => {
  return (
    // <div className='home' style={{backgroundImage:"url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",backgroundSize:"cover",boxShadow:"inset 0 0 0 2000px rgba(210, 203, 203, 0.4)"}}>
      <div>
       <Navbar/>
        <section >
          <div style={{display:"flex",margin:"20px 40px",flexDirection:"column"}}>
            <div className='banner-container'>
            <LeftBanner/>
            <RightBanner/>
            </div>

        <section className='card-container'>
        <Card title="Healthy Food" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laboriosam!" img={HealthyFoodImg}/>
        <Card title="Education" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laboriosam!" img={EducationImg}/>
        <Card title="Pure Water" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laboriosam!" img={WaterImg}/>
        <Card title="Medical" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laboriosam!" img={MedicalImg}/>
        
        </section>
        </div>
        </section>
        <Video/>
        <Footer/>
    </div>
  )
}

export default Home