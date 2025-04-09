import React from 'react';

const LayoutHeader = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">StockMaster</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Nuevo Producto
          </button>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;