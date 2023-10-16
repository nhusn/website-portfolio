import React from 'react'
import './DropDown.css'

function DropDown() {
  return (
    <div id='dropdown-menu' className='flex flex-col'>
        <ul className='flex flex-col gap-4'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </div>
  )
}

export default DropDown