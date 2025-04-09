import React, { useState } from 'react';

const FloatingActions = ({ onShowForm, onShowImporter }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-20">
      <div className={`flex flex-col items-end space-y-3 ${expanded ? 'visible' : 'invisible'}`}>
        <button
          onClick={onShowImporter}
          className="px-4 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-105"
        >
          Importar Excel
        </button>
        <button
          onClick={onShowForm}
          className="px-4 py-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all transform hover:scale-105"
        >
          Nuevo Producto
        </button>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 p-4 bg-white text-black rounded-full shadow-xl hover:shadow-2xl transition-all"
      >
        {expanded ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default FloatingActions;