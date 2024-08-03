

function Table() {
    const data = [
        { notaFiscal: '1234', sacado: 'SACADO 001', cedente: 'CEDENTE 002', emissao: '12/02/2020', valor: 'R$ 49.725,00', status: 'RECEBIDO' },
        { notaFiscal: '1234', sacado: 'SACADO 001', cedente: 'CEDENTE 002', emissao: '12/02/2020', valor: 'R$ 49.725,00', status: 'RECEBIDO' },
        { notaFiscal: '1234', sacado: 'SACADO 001', cedente: 'CEDENTE 002', emissao: '12/02/2020', valor: 'R$ 49.725,00', status: 'RECEBIDO' },
      ];

  return (
    <div className="overflow-x-auto ml-5 mr-5 text-sm ">
    <table className="w-full text-left p-5 border-separate" style={{ borderSpacing: '0 10px' }}>
      <thead>
        <tr className=" text-gray-400">
          <th className="px-4 py-2">NOTA FISCAL</th>
          <th className="px-4 py-2">SACADO</th>
          <th className="px-4 py-2">CEDENTE</th>
          <th className="px-4 py-2">EMISSÃO</th>
          <th className="px-4 py-2">VALOR</th>
          <th className="px-4 py-2">STATUS</th>
          <th className="px-4 py-2"></th>
        </tr>
      </thead>
      <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white font-semibold text-gray-600">
              <td className="px-4 py-2 border-b border-l border-t border-gray-200 rounded-l-md">{item.notaFiscal}</td>
              <td className="px-4 py-2 border-b border-t border-gray-200">{item.sacado}</td>
              <td className="px-4 py-2 border-b border-t border-gray-200">{item.cedente}</td>
              <td className="px-4 py-2 border-b border-t border-gray-200">{item.emissao}</td>
              <td className="px-4 py-2 border-b border-t border-gray-200 text-custom-green">{item.valor}</td>
              <td className="px-4 py-2 border-b border-t border-gray-200 text-custom-green ">{item.status}</td>
              <td className="px-4 py-2 border-b border-t border-r rounded-r-md border-gray-200">
                <button className="border border-gray-300 rounded px-3 py-1">Dados do cedente</button>
              </td>
            </tr>
          ))}
        </tbody>
    </table>
  </div>



  )
}

export default Table;
