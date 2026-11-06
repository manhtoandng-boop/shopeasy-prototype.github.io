import React from 'react';

const PRODUCTS = [
  { id: 1, name: 'Tai nghe Bluetooth', price: 1290000, category: 'Âm thanh' },
  { id: 2, name: 'Smartwatch FitPro', price: 2490000, category: 'Phụ kiện' },
  { id: 3, name: 'Chuột không dây', price: 650000, category: 'Phụ kiện' },
  { id: 4, name: 'Bàn phím cơ RGB', price: 1850000, category: 'Máy tính' },
];

export default function Step1Browse({ searchTerm, onAddToCart }) {
  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
      <h2 className="text-lg font-bold text-blue-900 mb-4">1. Danh sách sản phẩm</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col justify-between bg-gray-50">
            <div>
              <h3 className="font-bold text-sm">{product.name}</h3>
              <p className="text-xs text-gray-500">{product.category}</p>
              <p className="text-blue-600 font-bold my-2">{product.price.toLocaleString('vi-VN')} đ</p>
            </div>
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-blue-600 text-white text-xs py-2 rounded hover:bg-blue-700 transition"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}