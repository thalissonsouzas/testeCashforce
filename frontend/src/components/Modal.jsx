// src/components/Modal.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Modal({ isOpen, onClose, cedente }) {
  const [cedenteData, setCedenteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen || !cedente) return; // Não faz nada se o modal não estiver aberto ou o cedente não estiver definido

    const fetchCedenteData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/providers/${encodeURIComponent(cedente)}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setCedenteData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCedenteData();
  }, [isOpen, cedente]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white p-4 rounded shadow-lg">
        {/* Botão de fechar reduzido */}
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="space-y-4 mt-4">
          <h2 className="text-xl pt-5 font-semibold mb-4">Dados do Cedente</h2>
          {loading && <p>Carregando...</p>}
          {error && <p className="text-red-500">Erro: {error}</p>}
          {cedenteData && (
            <div className="space-y-2">
              {Object.entries(cedenteData).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="font-semibold">{key}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  cedente: PropTypes.string,
};