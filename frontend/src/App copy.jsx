import { useState } from 'react'
import './App.css'
import logo from '../public/logo.svg'
import menuIcon from '../public/menuIcon.svg'

function App() {


  return (
<div className='flex'>
  <aside className='bg-slate-100 h-screen w-72 shadow-lg'>
    <div className='w-full'>
    <img src={logo} alt='Logo' className=' flex p-12' />
    <menu className='flex items-center w-full justify-center text-custom-green font-dm-sans text-p14 font-medium leading-tight text-left'>
      <img src={menuIcon} alt='Menu Icon' className=' pr-5' />
      <div className=''></div>
      Notas fiscais
    </menu>
    </div>
  </aside>
  <main className='flex flex-col' id='main'>
  <div className='flex h-28 w-full bg-red-600'></div>
    TABLE
  </main>
</div> 


  )
}

export default App
