// src/components/Table.jsx
import React, { useContext, useEffect, useState } from 'react';
import { GlobalStateContext } from '../context/GlobalStateContext';
import Modal from './Modal'; 

function Table() {
  const { selectedMenu } = useContext(GlobalStateContext);
  const { setFornecedores } = useContext(GlobalStateContext);
  const [data, setData] = useState([]);
  const [chaves, setChaves] = useState([]);
  const [valores, setValores] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cedente, setCedente] = useState(null);

  const fetchFornecedores = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/providers');
      const result = await response.json();
      setFornecedores(result);
    } catch (error) {
      console.error('Error fetching providers:', error);
    }
  };

  useEffect(() => {
    fetchFornecedores();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setData([]);
      let url = '';
      if (selectedMenu === 'Notas fiscais') url = 'http://localhost:3000/api/orders';
      else if (selectedMenu === 'Compradores') url = 'http://localhost:3000/api/buyers';
      else if (selectedMenu === 'Fornecedores') url = 'http://localhost:3000/api/providers';
      
      if (url) {
        try {
          const response = await fetch(url);
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [selectedMenu]);

  useEffect(() => {
    if (data.length > 0) {
      const chaves = Object.keys(data[0]); 
      const valores = data.map(item => Object.values(item)); 
      setChaves(chaves);
      setValores(valores);
    }
  }, [data]);

  const handleOpenModal = (cedente) => {
    setCedente(cedente); 
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCedente(null);
  };

  const handleButtonClick = (event, item) => {
    event.preventDefault(); 
    const cedenteValue = item[2]; 
    handleOpenModal(cedenteValue);
  };

  return (
    <div className="overflow-x-auto ml-5 mr-5 text-sm">
      <table className="w-full text-left border-separate" style={{ borderSpacing: '0 10px' }}>
        <thead>
          <tr className="text-gray-400">
            {chaves.map((chave, index) => (
              <th key={index} className="px-4 py-2 border-gray-200 whitespace-nowrap text-xs-90">{chave}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {valores.map((linha, index) => (
            <tr key={index} className="bg-white font-semibold text-gray-600">
              {linha.map((valor, idx) => (
                <td key={idx} className={`px-4 py-2 border-b-2 border-t-2 ${idx === 0 ? 'border-l-2 rounded' : ''} ${idx === 5 || idx === 4 ? 'text-custom-green' : ''} border-gray-200 whitespace-nowrap text-xs-90`}>
                  {valor}
                </td>
              ))}
              {selectedMenu === 'Notas fiscais' && (
                <td className="px-4 py-2 border-b-2 border-t-2 border-r-2 rounded-r-md border-gray-200">
                  <button
                    className="border border-gray-200 bg-white rounded-full px-3 py-1"
                    onClick={(e) => handleButtonClick(e, linha)} 
                  >
                    Dados do cedente
                  </button>
                </td>
              )}
              {selectedMenu !== 'Notas fiscais' && (
                <td className="px-4 py-2 border-b-2 border-t-2 border-r-2 rounded-r-md border-gray-200">

                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} cedente={cedente}>
        <h2 className="text-xl font-semibold mb-4">Dados do Cedente</h2>
        <pre>{cedente}</pre>
      </Modal>
    </div>
  );
}

export default Table;
