import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Projects() {
    useEffect(() => {
        Aos.init({duration:2000})
    }, [])
    return (

        
        <div style={{marginTop:"20%"}}>
            <div className='text-center'>
                <h6 style={{color:"var(--text-secondary)"}}>PORTFOLIO</h6>
                <h1 style={{color:"var(--text-primary)"}} className='fw-bolder'>Checkout a few of my works</h1>
            </div>
            <div style={{marginTop:"15%"}} className='d-flex justify-content-center flex-wrap'>
                <div className='col-lg-5 d-flex justify-content-center align-items-center'>
                    <img data-aos="fade-up" width={'50%'} src="/img/Memory-Card-Games-1.jpg" alt="cover photo" />
                </div>
                <div style={{paddingRight:"23%",paddingLeft:"2%"}} className="col-lg-7 d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <p style={{color:"var(--text-secondary)"}} className='mb-3'>GAME</p>
                        <h3 style={{cursor:"pointer",color:"var(--text-primary)"}} className='mb-5'>Memmory Game</h3>
                        <h5 style={{color:"var(--text-secondary)",lineHeight:"160%",marginBottom:"7%"}}>It is a website that a mind game we can play also included Highscore to encourage the users more to it. its is created using React Js</h5>
                        <a style={{textDecoration:"none"}} href="https://memory-test-games.netlify.app/" target='_blank'>View Project</a>
                    </div>
                </div>
            </div>

            <div style={{marginTop:"15%"}} className='d-flex justify-content-center flex-wrap'>
                <div style={{paddingLeft:"23%"}} className="col-lg-7 d-flex flex-column justify-content-center align-items-center ">
                    <div>
                        <p style={{color:"var(--text-secondary)"}} className='mb-3'>CLONE</p>
                        <h3 style={{cursor:"pointer",color:"var(--text-primary)"}} className='mb-5'>Swiggy Website Clone</h3>
                        <h5 style={{color:"var(--text-secondary)",lineHeight:"160%",marginBottom:"7%"}}>its website of online food delivery app that only has frentend it is created using React Js </h5>
                        <a style={{textDecoration:"none"}} href="https://swiggy-clone-site.netlify.app/" target='_blank'>View Project</a>
                    </div>
                </div>
                <div  className='col-lg-5 d-flex justify-content-center align-items-center'>
                    <img data-aos="fade-up" width={'50%'} src="/img/swiggy.jpg" alt="cover photo" />
                </div>
            </div>

            <div style={{marginTop:"15%"}} className='d-flex justify-content-center  flex-wrap'>
                <div  className='col-lg-5 d-flex justify-content-center align-items-center'>
                    <img data-aos="fade-up" width={'50%'} src="/img/parallax.jpg" alt="cover photo" />
                </div>
                <div style={{paddingRight:"23%",paddingLeft:"2%"}} className="col-lg-7 d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <p style={{color:"var(--text-secondary)"}} className='mb-3'>ANIMATION</p>
                        <h3 style={{cursor:"pointer",color:"var(--text-primary)"}} className='mb-5'>Parallax website</h3>
                        <h5 style={{color:"var(--text-secondary)",lineHeight:"160%",marginBottom:"7%"}}>it is a parallax website that give you scrolling effect . its is created using HTML/CSS</h5>
                        <a style={{textDecoration:"none"}} href="https://mystery-forest.netlify.app/" target='_blank'>View Project</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects