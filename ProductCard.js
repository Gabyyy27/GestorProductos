import React from 'react';

const ProductCard = ({ product, onDelete, isHighlighted }) => {
  const profitMargin = ((product.price - product.cost) / product.cost) * 100;

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${isHighlighted ? 'ring-2 ring-green-500 scale-105' : 'hover:shadow-lg'}`}>
      <div className="h-48 bg-gray-100 overflow-hidden relative">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        {isHighlighted && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            Nuevo
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div>
            <p className="text-sm text-gray-500">Precio</p>
            <p className="font-medium">${product.price.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Costo</p>
            <p className="font-medium">${product.cost.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Margen</p>
            <p className={`font-medium ${profitMargin >= 50 ? 'text-green-600' : profitMargin >= 20 ? 'text-yellow-600' : 'text-red-600'}`}>
              {profitMargin.toFixed(2)}%
            </p>
          </div>
        </div>

        <button
          onClick={() => onDelete(product.id)}
          className="mt-4 w-full py-2 text-sm text-red-600 hover:text-red-800 transition-colors"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

// Los demás archivos (MainView.js, ProductGrid.js, ExcelImporter.js, etc.) se mantienen igual que en la versión anterior

// DONE