import React, { useEffect, useState } from 'react';

export default function Products({ newData }) {
    const initialData = [
   
        {
          id: 1,
          count: 12,
          isSale: true,
          category: "mobile",
          name: "iPhone 14",
          price: 64000,
        },
        {
          id: 2,
          count: 13,
          isSale: true,
          category: "mobile",
          name: "iPhone 14 Pro",
          price: 70000,
        },
        {
          id: 3,
          count: 14,
          isSale: true,
          category: "mobile",
          name: "iPhone 16 Pro Max",
          price: 98000,
        },
        {
          id: 4,
          count: 5,
          isSale: false,
          category: "TV",
          name: "Toshiba 4K Smart TV",
          price: 35000,
        },
        {
          id: 5,
          count: 45,
          isSale: false,
          category: "TV",
          name: "LG OLED C3",
          price: 125000,
        },
        {
          id: 6,
          count: 55,
          isSale: false,
          category: "TV",
          name: "Samsung QLED Q80B",
          price: 90000,
        },
        {
          id: 7,
          count: 3,
          isSale: true,
          category: "tablet",
          name: "iPad Air",
          price: 55000,
        },
        {
          id: 8,
          count: 2,
          isSale: true,
          category: "tablet",
          name: "Samsung Galaxy Tab S9",
          price: 75000,
        },
        {
          id: 9,
          count: 5,
          isSale: true,
          category: "tablet",
          name: "Microsoft Surface Pro 9",
          price: 95000,
        },
        {
          id: 10,
          count: 8,
          isSale: false,
          category: "laptop",
          name: "MacBook Air M2",
          price: 110000,
        },
        {
          id: 11,
          count: 6,
          isSale: true,
          category: "laptop",
          name: "Dell XPS 15",
          price: 145000,
        },
        {
          id: 12,
          count: 10,
          isSale: false,
          category: "audio",
          name: "Sony WH-1000XM5",
          price: 28000,
        },
        {
          id: 13,
          count: 15,
          isSale: true,
          category: "audio",
          name: "AirPods Pro 2",
          price: 25000,
        },
        {
          id: 14,
          count: 20,
          isSale: false,
          category: "camera",
          name: "Canon EOS R6",
          price: 180000,
        },
        {
          id: 15,
          count: 7,
          isSale: true,
          category: "camera",
          name: "Sony A7 IV",
          price: 220000,
        },
      
    
  ];


  
  const [products, setProducts] = useState(initialData);
  const [notification, setNotification] = useState(null);

  // Handle new product addition
  useEffect(() => {
    if (newData && Object.keys(newData).length !== 0) {
      // Check if product already exists by name to avoid duplicates
      const exists = products.some(p => p.name === newData.name);
      if (!exists) {
        const newProductWithId = { 
          ...newData, 
          id: Math.max(...products.map(p => p.id), 0) + 1 
        };
        setProducts(prev => [...prev, newProductWithId]);
        setNotification(`${newData.name} added successfully!`);
        setTimeout(() => setNotification(null), 3000);
      }
    }
  }, [newData]);

  // Delete product
  const deleteProduct = (id) => {
    const productName = products.find(p => p.id === id)?.name;
    setProducts(prev => prev.filter(product => product.id !== id));
    setNotification(`${productName} deleted successfully!`);
    setTimeout(() => setNotification(null), 3000);
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === id 
          ? { ...product, count: product.count + 1 } 
          : product
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === id 
          ? { ...product, count: Math.max(0, product.count - 1) } 
          : product
      )
    );
  };

  // Category badge styling
  const getCategoryBadge = (category) => {
    const categoryClasses = {
      mobile: 'bg-primary',
      TV: 'bg-success',
      tablet: 'bg-info text-dark',
      laptop: 'bg-warning text-dark',
      audio: 'bg-secondary',
      camera: 'bg-danger'
    };
    return (
      <span className={`badge ${categoryClasses[category] || 'bg-dark'}`}>
        {category}
      </span>
    );
  };

  // Sale badge
  const getSaleBadge = (isSale) => {
    return isSale ? (
      <span className="badge bg-danger ms-2">SALE</span>
    ) : null;
  };

  // Quantity control component
  const renderQuantityControl = (product) => {
    return (
      <div className="d-flex align-items-center gap-2">
        <div className="input-group" style={{ maxWidth: '120px' }}>
          <button 
            className="btn btn-outline-secondary btn-sm" 
            onClick={() => decreaseQuantity(product.id)}
            disabled={product.count === 0}
          >
            -
          </button>
          <span className="form-control text-center">
            {product.count}
          </span>
          <button 
            className="btn btn-outline-secondary btn-sm" 
            onClick={() => increaseQuantity(product.id)}
          >
            +
          </button>
        </div>
        {product.count < 5 && product.count > 0 && (
          <span className="badge bg-warning text-dark">Low Stock</span>
        )}
      </div>
    );
  };

  return (
    <div className="container-fluid p-4">
      {notification && (
        <div className="alert alert-info alert-dismissible fade show" role="alert">
          {notification}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setNotification(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h2 className="mb-0">Products Inventory</h2>
          <p className="text-muted mb-0">
            Showing {products.length} products | 
            Total Stock: {products.reduce((sum, product) => sum + product.count, 0)}
          </p>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock Count</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td>#{product.id}</td>
                    <td>
                      {product.name}
                      {getSaleBadge(product.isSale)}
                    </td>
                    <td>{getCategoryBadge(product.category)}</td>
                    <td>₹{product.price.toLocaleString()}</td>
                    <td>{renderQuantityControl(product)}</td>
                    <td>
                      {product.count > 0 ? (
                        <span className="badge bg-success">In Stock</span>
                      ) : (
                        <span className="badge bg-secondary">Out of Stock</span>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteProduct(product.id)}
                      >
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}