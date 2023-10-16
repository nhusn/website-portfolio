import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div style={{marginTop:"13%",textAlign:"center",}}>
            <div style={{ gap: "19px" }} className='d-flex justify-content-center mt-4'>
                <div className='conect-button'><i className="fa-brands fa-facebook-f fa-xl"></i></div>
                <div className='conect-buttons'><i className="fa-brands fa-twitter  fa-xl"></i></div>
                <div className='conect-buttons'><i className="fa-brands fa-instagram fa-xl"></i></div>
            </div>
            <div className='pb-4 mt-5'>
            <h1 style={{fontWeight:"bolder",color:"var(--text-primary)"}} className='mt-4'>Contact Us</h1>
            <p className='mt-2'><a style={{textDecoration:"none",color:"var(--text-primary)"}} href="mailto:mnhnafilhusn09@gmail.com">mnhnafilhusn09@gmail.com</a></p>
            <p className='text-center mt-5' style={{color:"var(--text-primary)"}}>Copyright ©2023 All rights reserved </p>

            </div>
        </div>
    )
}

export default Footer