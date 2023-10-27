import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
export default function Categorymenu() {
  return (
    <div className='categoryMen flex justify-between'>
        <div className="rightNav flex  gap-2">
        <div className="homeIcon p-4 rounded    text-center "><AiOutlineHome/></div>
        <div className="homeIcon py-4 px-14 rounded   text-center ml-3">Category</div>
        </div>
        <div className="homeIcon text-1xl p-4 rounded  text-center">+</div>
    </div>
  )
}
