import React, { useState } from 'react';
import logo from '../../public/logo.svg';
import menuIcon from '../../public/menuIcon.svg';
import barraSelect from '../../public/barraSelect.svg';

function Sidebar() {
    const [selectedMenu, setSelectedMenu] = useState('Notas fiscais');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <aside className='bg-slate-100 h-screen w-60 shadow-lg flex-none'>
            <div className='w-full'>
                <img src={logo} alt='Logo' className='flex p-4' />
                <menu className='flex flex-col items-start w-full text-custom-green font-dm-sans text-p14 font-semibold leading-tight text-left'>
                    <div 
                        className='flex items-center w-full p-4 cursor-pointer' 
                        onClick={() => handleMenuClick('Notas fiscais')}
                    >
                        {selectedMenu === 'Notas fiscais' && (
                            <img src={barraSelect} alt='Barra Select' className='pr-5 h-12 w-10' />
                        )}
                        <img src={menuIcon} alt='Menu Icon' className='pr-5' />
                        Notas fiscais
                    </div>
                    <div 
                        className='flex items-center w-full p-4 cursor-pointer' 
                        onClick={() => handleMenuClick('Compradores')}
                    >
                        {selectedMenu === 'Compradores' && (
                            <img src={barraSelect} alt='Barra Select' className='pr-5 h-12 w-10' />
                        )}
                        <img src={menuIcon} alt='Menu Icon' className='pr-5' />
                        Compradores
                    </div>
                    <div 
                        className='flex items-center w-full p-4 cursor-pointer' 
                        onClick={() => handleMenuClick('Fornecedores')}
                    >
                        {selectedMenu === 'Fornecedores' && (
                            <img src={barraSelect} alt='Barra Select' className='pr-5 h-12 w-10' />
                        )}
                        <img src={menuIcon} alt='Menu Icon' className='pr-5 h-12 w-10' />
                        Fornecedores
                    </div>
                </menu>
            </div>
        </aside>
    );
}

export default Sidebar;