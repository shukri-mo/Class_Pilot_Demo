import React from 'react'
import MainNav from './MainNav'
import Logo from './Logo'

function Sidebar() {
  return (
   <aside className='px-[2.4rem] py-[3.2rem] border-r border-gray-100 row-span-full flex flex-col gap-[3.2rem]
 '>
 <Logo/>
      <MainNav/>
   </aside>
   
  )
}

export default Sidebar
