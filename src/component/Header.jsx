import React, { useEffect, useState } from 'react'
import DropDown from './DropDown'
import DarkMode from './DarkMode'


function Header({theme,setTheme}) {
  const [openProfile,setOpenProfile] = useState(false)
  const handleTheme = ()=>{
    if(theme==='dark'){
      setTheme('light')
    }else{
      setTheme('dark')
    }
  }
  return (
    <div>
      <div style={{gap:"60%"}} className='pt-4 d-flex justify-content-center align-items-center w-100 flex-wrap'>
        <div style={{cursor:"pointer"}} className='d-flex justify-content-center align-items-center'>
          <img src="/img/PP-2.png" alt="" />
          <h3 style={{ fontWeight: "400" }} className='ms-2'><a style={{textDecoration:"none",color:'var(--text-primary)'}} href=''>Nafil Husn M</a></h3>
        </div>
        <div style={{gap:"100%"}} className='d-flex justify-content-center align-items-center'>
        { theme ==='dark'?
          <i onClick={handleTheme} style={{color:"#25395b"}} className="fa-solid fa-lightbulb fa-xl"></i> :
          <i onClick={handleTheme} className="fa-regular fa-lightbulb fa-xl"></i>
        }
        <i onClick={()=>setOpenProfile((prev)=>(!prev))} style={{color:'var(--text-primary)'}} className="fa-solid fa-bars fa-lg"></i>
        {
          openProfile &&   <DropDown/>

        }
        </div>
      </div>
      <div style={{height:"80vh"}} className='d-flex justify-content-center align-items-center w-100 flex-column'>
        <h5 style={{opacity:'40%',color:'var(--text-primary)'}}>Iam a</h5>
        <h1 style={{letterSpacing:"10px",color:'var(--text-primary)'}} className='fw-bolder'>WEB DEVELOPER</h1>
      </div>
    </div>
  )
}

export default Header