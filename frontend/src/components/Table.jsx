import React, { useContext, useEffect, useState } from 'react';
import { GlobalStateContext } from '../context/GlobalStateContext';

function Table() {
  const { selectedMenu } = useContext(GlobalStateContext);
  const [data, setData] = useState([]);
  const [chaves, setChaves] = useState([]);
  const [valores, setValores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setData([]);
      if (selectedMenu === 'Notas fiscais') {
        try {
          const response = await fetch('http://localhost:3000/api/orders');
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else if (selectedMenu === 'Compradores') {
        try {
          const response = await fetch('http://localhost:3000/api/buyers');
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else if (selectedMenu === 'Fornecedores') {
        try {
          const response = await fetch('http://localhost:3000/api/providers');
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
      const chaves = Object.keys(data[0]); // Extrai as chaves do primeiro objeto
      const valores = data.map(item => Object.values(item)); // Extrai os valores de cada objeto
      setChaves(chaves);
      setValores(valores);
    }
  }, [data]); // Atualiza chaves e valores quando `data` muda

  return (
    <div className="overflow-x-auto ml-5 mr-5 text-sm">
      <table className="w-full text-left p-5 border-separate" style={{ borderSpacing: '0 10px' }}>
        <thead>
          <tr className="text-gray-400">
            {chaves.map((chave, index) => (
              <th key={index} className="px-4 py-2 border-gray-200">{chave}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {valores.map((linha, index) => (
            <tr key={index} className="bg-white  font-semibold text-gray-600">
              {linha.map((valor, idx) => (
                <td key={idx} className={`px-4 py-2 border-b-2 border-t-2 ${idx === 0 ? 'border-l-2 rounded' : ''} ${ idx == '5' ? 'text-custom-green' : ''} ${ idx == '4' ? 'text-custom-green' : ''} border-gray-200`}>{valor}</td>
              ))}
              <td className="px-4 py-2 border-b-2 border-t-2 border-r-2 rounded-r-md border-gray-200">
                <button className="border border-gray-200 bg-white rounded-full px-3 py-1">Dados do cedente</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
