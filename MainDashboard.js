import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';
import ExcelImporter from './ExcelImporter';
import { mockProducts } from '../mock/data';

const MainDashboard = () => {
  const [products, setProducts] = useState(mockProducts);
  const [activeTab, setActiveTab] = useState('products');

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const importProducts = (importedProducts) => {
    setProducts([...products, ...importedProducts]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-4 px-6 font-medium text-sm ${activeTab === 'products' ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('products')}
        >
          Productos
        </button>
        <button
          className={`py-4 px-6 font-medium text-sm ${activeTab === 'add' ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('add')}
        >
          Agregar
        </button>
        <button
          className={`py-4 px-6 font-medium text-sm ${activeTab === 'import' ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('import')}
        >
          Importar
        </button>
      </div>

      {activeTab === 'products' && <ProductTable products={products} onDelete={deleteProduct} />}
      {activeTab === 'add' && <ProductForm onAddProduct={addProduct} />}
      {activeTab === 'import' && <ExcelImporter onImport={importProducts} />}
    </div>
  );
};

export default MainDashboard;