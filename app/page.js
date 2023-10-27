import Categorycard from '@/components/Categorycard'
import Categorymenu from '@/components/Categorymenu'
import React from 'react'
import {AiOutlineSetting,AiOutlineSearch} from 'react-icons/ai'
import {MdOutlineAddLink} from 'react-icons/md'

export default function page() {
  return (
    <div className='container  '>
      <h1 className='text-center text-3xl b-700 py-3'>Link Keeper</h1>
      <Categorymenu/>
      <div className='categorybody mt-2'>
        <Categorycard/>
      </div>
      <div className='footer-menu align-bottom flex justify-between'>
        <div className='leftFooter flex gap-4'>
        <AiOutlineSetting className='text-3xl'/>
        <AiOutlineSearch className='text-3xl'/>
        </div>
        <MdOutlineAddLink className='text-3xl'/>

      </div>
    </div>
  )
}
