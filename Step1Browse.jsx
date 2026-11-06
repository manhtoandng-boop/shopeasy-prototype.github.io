import React from 'react';

export default function Step1Browse({ searchTerm, setSearchTerm, onAddToCart }) {
  const sampleProducts = [
    { id: 1, name: "Tai nghe Bluetooth", price: 1290000, rating: 4.8, reviews: 120, category: "Công nghệ" },
    { id: 2, name: "Đồng hồ thông minh", price: 2490000, rating: 4.9, reviews: 85, category: "Công nghệ" },
    { id: 3, name: "Giày thể thao Nam", price: 650000, rating: 4.7, reviews: 230, category: "Thời trang" },
  ];

  const filteredProducts = sampleProducts.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-blue-900 flex items-center gap-2">
          <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
          TÌM KIẾM & DUYỆT SẢN PHẨM
        </h2>
      </div>
      
      {/* Search Input */}
      <div className="relative mb-4">
        <input 
          type="text" 
          placeholder="Tìm kiếm sản phẩm..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 rounded-lg flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center text-3xl mb-3">🎧</div>
              <h3 className="font-semibold text-gray-800">{product.name}</h3>
              <p className="text-blue-600 font-bold mt-1">{product.price.toLocaleString()}đ</p>
              <p className="text-xs text-gray-500 mt-1">Đánh giá: {product.rating} ⭐ ({product.reviews})</p>
            </div>
            <button 
              onClick={() => onAddToCart(product)}
              className="mt-4 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}