import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import icon from '../public/icon.svg'
import Table from './components/Table'

function App() {


  return (
<div className='relative flex w-screen '>
  <Sidebar />
  <form className='flex flex-col w-full'>
    <section className='bg-white border-b-2 w-full h-16'></section>
    <div className='flex flex-row pl-10 items-center'>

    <img className="pr-2 m-0 h-6 bold" src={icon} />
    <h1 className='text-start font-dm-sans font-bold text-2xl leading-7 text-dark-blue'>Notas fiscais</h1>
    </div>
    <h3 className='text-start pl-10 font-dm-sans text-gray-500'>Visualize as notas fiscais que você tem.</h3>
    <Table />
    
  </form>

  </div>




  )
}

export default App
