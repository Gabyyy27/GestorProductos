import React, { useState } from 'react';
import { mockProducts } from '../mock/data';
import ProductGrid from './ProductGrid';
import ProductForm from './ProductForm';
import ExcelImporter from './ExcelImporter';
import FloatingActions from './FloatingActions';

const MainView = () => {
  const [products, setProducts] = useState(mockProducts);
  const [showForm, setShowForm] = useState(false);
  const [showImporter, setShowImporter] = useState(false);
  const [importedIds, setImportedIds] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowForm(false);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const importProducts = (importedProducts) => {
    const newProducts = [...products, ...importedProducts];
    setProducts(newProducts);
    setImportedIds(importedProducts.map(p => p.id));
    setShowImporter(false);
    
    // Reset animation after 2 seconds
    setTimeout(() => {
      setImportedIds([]);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 p-4">
          <ProductForm 
            onAddProduct={addProduct} 
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      {showImporter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 p-4">
          <ExcelImporter 
            onImport={importProducts} 
            onCancel={() => setShowImporter(false)}
          />
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Mis Productos</h2>
        <p className="text-sm text-gray-500">{products.length} productos</p>
      </div>

      <ProductGrid 
        products={products} 
        onDelete={deleteProduct}
        highlightedIds={importedIds}
      />
      
      <FloatingActions 
        onShowForm={() => setShowForm(true)}
        onShowImporter={() => setShowImporter(true)}
      />
    </div>
  );
};

export default MainView;