import React, { useEffect } from 'react'
import './MyService.jsx'
import Aos from 'aos'


function MyService() {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
    <div style={{marginTop:"20%"}} className='text-center'>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='text-center'>
            <h6 style={{color:"var(--text-secondary)"}}>WHAT I DO</h6>
            <h1 style={{color:"var(--text-primary)"}} className='fw-bolder'>My services</h1>
        </div>
        <div style={{marginTop:"7%"}} className='d-flex justify-content-around align-items-center w-100 flex-wrap'>
            <div>
                <i style={{fontSize:'70px',color:"var(--icon-color)"}} className="fa-solid fa-code"/>
                <h3 style={{color:"var(--text-primary)"}} className='fw-bolder mt-2'>HTML/CSS</h3>
            </div>
            <div>
                <i style={{fontSize:'70px',color:"var(--icon-color)"}} className="fa-brands fa-square-js"></i>
                <h3 style={{color:"var(--text-primary)"}} className='fw-bolder mt-2'>JAVASCRIPT</h3>
            </div>
            <div>
                <i style={{fontSize:'70px',color:"var(--icon-color)"}} className="fa-brands fa-react"></i>
                <h3 style={{color:"var(--text-primary)"}} className='fw-bolder mt-2'>REACT JS</h3>
            </div>
        </div>
    </div>
  )
}

export default MyService