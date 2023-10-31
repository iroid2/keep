import React from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import Link from 'next/link'
export default function page() {
  return (
   <div className='container '>
     {/* <link href="" className='flex'>  </link> */}
     <Link href={"http://localhost:3000"}className='flex'><FiArrowLeft/>AddLink</Link>
     <div className='create-form'>
     <div>Add Link</div>
     <form action="" className='form flex flex-col gap-4'>
     <input type="text" placeholder='Enter Catgory'/>
     <input type="text" placeholder='Enter title' />
     <input type="text" placeholder='Enter Link' />
     </form>
     </div>
   </div>
  )
}
