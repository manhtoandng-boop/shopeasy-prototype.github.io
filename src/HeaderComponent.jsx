import React from 'react';

export default function HeaderComponent({ searchTerm, setSearchTerm }) {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">🛒 ShopEasy</span>
          <span className="text-xs bg-blue-500 px-2 py-1 rounded">Mua sắm thông minh</span>
        </div>
        <input 
          type="text" 
          placeholder="Tìm kiếm sản phẩm..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-gray-800 text-sm px-3 py-1 rounded border outline-none w-48 md:w-64"
        />
      </div>
      <div className="bg-blue-700 py-6 px-4 text-center">
        <h1 className="text-2xl font-bold mb-1">Công nghệ cho cuộc sống tốt hơn</h1>
        <p className="text-blue-100 text-xs">Sản phẩm chính hãng – Giá tốt mỗi ngày</p>
      </div>
    </header>
  );
}