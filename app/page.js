import Categorycard from '@/components/Categorycard'
import Categorymenu from '@/components/Categorymenu'
import Link from 'next/link'
import React from 'react'
import {AiOutlineSetting,AiOutlineSearch} from 'react-icons/ai'
import {MdOutlineAddLink} from 'react-icons/md'

export default function page() {
  return (
    <div className='container  '>
      <h1 className='text-center text-3xl b-700 py-3'>Link Keeper</h1>
      <Categorymenu/>
      <div className='categorybody '>
        <Categorycard/>
        <div className="link-options">
        <div>Pop Up</div>
      </div>
      </div>
      <div className='footer-menu align-bottom flex justify-between'>
        <div className='leftFooter flex gap-4'>
        <AiOutlineSetting className='text-3xl'/>
        <AiOutlineSearch className='searchIcon  text-2xl'/>
        <input type="text" placeholder='Find' />
        </div>
        <Link href={'./create'}><MdOutlineAddLink className='text-3xl'/></Link>
      </div>
      
    </div>
  )
}
