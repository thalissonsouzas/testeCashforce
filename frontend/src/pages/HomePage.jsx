import React, { useContext } from 'react'
import '../App.css'
import Sidebar from '../components/Sidebar'
import icon from '../../public/icon.svg'
import Table from '../components/Table'
import { GlobalStateContext } from '../context/GlobalStateContext'


function App() {

  const { selectedMenu, setSelectedMenu } = useContext(GlobalStateContext);
  const s1 = 'Visualize as notas fiscais que você tem.'
  const s2 = 'Visualize todos os seus compradores.'
  const s3 = 'Visualize os seus fornecedores.'

  return (
    <div className='relative flex w-screen '>
      <Sidebar />
      <form className='flex flex-col w-full'>
        <section className='bg-white border-b-2 w-full h-16'></section>
        <div className='flex flex-row pl-10 items-center'>
          <img className="pr-2 m-0 h-6 bold" src={icon} />
          <h1 className='text-start font-dm-sans font-bold text-2xl leading-7 text-dark-blue'>{selectedMenu}</h1>
        </div>
        {selectedMenu === 'Notas fiscais' && <h3 className='text-start pl-10 font-dm-sans text-gray-500'>{s1}</h3>}
        {selectedMenu === 'Compradores' && <h3 className='text-start pl-10 font-dm-sans text-gray-500'>{s2}</h3>}
        {selectedMenu === 'Fornecedores' && <h3 className='text-start pl-10 font-dm-sans text-gray-500'>{s3}</h3>}
        <Table />
      </form>
    </div>
  )
}

export default App
