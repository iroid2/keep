import React from 'react'
import {SlOptionsVertical} from 'react-icons/sl'
export default function Categorycard() {
  return (
  <div className='Categorycard  py-2 '>
     <div className='card p-2  rounded flex justify-between  '>
      <div className="text-sectn">
      <h3>Categorycard</h3>
    <p>how</p>
      </div>
      <p className="options"><SlOptionsVertical/></p>
    </div> 
  </div>
  )
}
