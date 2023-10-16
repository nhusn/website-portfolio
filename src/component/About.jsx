import React, { useEffect } from 'react'
import './About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div style={{marginTop:"10%"}} className='d-flex justify-content-center align-items-center w-100 flex-wrap'>
      <div className='col-lg-5 d-flex justify-content-center'>
        <img data-aos='fade-up' width={'70%'} className='img-fluid' src="/img/PP.jpg" alt="cover" />
      </div>
      <div className='col-lg-7 about'>
        <h1>ABOUT</h1>
        <div className='about-content'>
          <div style={{width:'50%'}}>
            <h4 style={{color:"var(--text-primary)"}}>Hi I'm Nafil Husn M</h4>
            <p className='about-content-detail'>
            I am a determined and enthusiastic web development student with a passion for creating innovative and user-friendly websites. </p>
            <h6 className='fs-5'>Connect me</h6>
            <div style={{gap:"10px"}} className='d-flex mt-4 mb-5'>
              <div className='social-button'><i className="fa-brands fa-facebook-f fa-xl"></i></div>
              <div className='social-buttons'><i className="fa-brands fa-twitter  fa-xl"></i></div>
              <div className='social-buttons'><i className="fa-brands fa-instagram fa-xl"></i></div>
            </div>
            <h3 style={{color:"var(--text-primary)"}} className='fs-5'>Contact me here!</h3>
            <p style={{color:"var(--text-primary)"}} className='mt-4'>Email: <a style={{textDecoration:"none"}} href="mailto:mnhnafilhusn09@gmail.com">mnhnafilhusn09@gmail.com</a></p>
            <p style={{color:"var(--text-primary)"}}>Phone: <a style={{textDecoration:"none"}} href="">917356288705</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About