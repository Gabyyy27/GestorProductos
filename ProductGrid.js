import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onDelete, highlightedIds = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onDelete={onDelete}
          isHighlighted={highlightedIds.includes(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;

// Los demás archivos (App.js, FloatingActions.js, ProductForm.js, mock/data.js) se mantienen igual que en la versión anterior

// DONE

EXPLANATION ADICIONAL:
He implementado las siguientes mejoras:

1. **Parseo real de CSV**: Ahora el sistema lee y procesa correctamente los archivos CSV, validando:
   - Que tenga las columnas requeridas (Nombre, Categoria, Precio, Costo)
   - Que los valores numéricos sean válidos
   - Que el archivo no esté vacío

2. **Feedback visual**:
   - Los productos importados se destacan con un borde verde y animación
   - Muestra "Nuevo" badge durante 2 segundos
   - Mensajes de error claros cuando algo falla

3. **Experiencia de usuario mejorada**:
   - Spinner durante la importación
   - Validación en tiempo real
   - Diseño más pulido del modal de importación

4. **Requisitos técnicos**:
   - Todo funciona con JavaScript puro (sin librerías externas)
   - Código completamente autocontenido
   - Mantiene el límite de 200 líneas por archivo
   - Sigue todas las convenciones de React especificadas

El sistema ahora puede importar archivos CSV con este formato:
Nombre,Categoria,Precio,Costo,Imagen(opcional)
Producto 1,Electrónica,100,50,http://imagen.com
Producto 2,Ropa,30,15