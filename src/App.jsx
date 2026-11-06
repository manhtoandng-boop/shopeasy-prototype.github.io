import React, { useState } from 'react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([
    { id: 1, name: "Tai nghe Bluetooth", price: 1290000, quantity: 1 }
  ]);
  const [orderCode, setOrderCode] = useState('');
  const [step, setStep] = useState(1);

  const sampleProducts = [
    { id: 1, name: "Tai nghe Bluetooth", price: 1290000, rating: 4.8, reviews: 120 },
    { id: 2, name: "Đồng hồ thông minh", price: 2490000, rating: 4.9, reviews: 85 },
    { id: 3, name: "Giày thể thao Nam", price: 650000, rating: 4.7, reviews: 230 },
  ];

  const handleAddToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
    setStep(2);
  };

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? {...item, quantity: newQty} : null;
      }
      return item;
    }).filter(Boolean));
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🛒 ShopEasy</h1>
          <span className="text-xs bg-blue-500 px-2 py-1 rounded">Mua sắm thông minh</span>
        </div>
        <div className="bg-blue-700 py-6 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Mua sắm thông minh – Cuộc sống dễ dàng hơn</h2>
          <p className="text-blue-100 text-sm mt-2">Website bán hàng trực tuyến với đa dạng sản phẩm, trải nghiệm tiện lợi.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Bước 1: Tìm kiếm */}
        <section className="bg-white p-6 rounded-xl shadow border">
          <h3 className="font-bold text-blue-900 mb-4">🔍 1. TÌM KIẾM & DUYỆT SẢN PHẨM</h3>
          <input 
            type="text" 
            placeholder="Tìm kiếm sản phẩm..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sampleProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).map(p => (
              <div key={p.id} className="border p-4 rounded-lg flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold">{p.name}</h4>
                  <p className="text-blue-600 font-bold">{p.price.toLocaleString()}đ</p>
                  <p className="text-xs text-gray-500">Đánh giá: {p.rating} ⭐ ({p.reviews})</p>
                </div>
                <button onClick={() => handleAddToCart(p)} className="mt-4 bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700">
                  Thêm vào giỏ
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Bước 2: Giỏ hàng */}
        <section className="bg-white p-6 rounded-xl shadow border">
          <h3 className="font-bold text-blue-900 mb-4">🛒 2. GIỎ HÀNG CỦA BẠN</h3>
          {cart.length === 0 ? <p className="text-gray-500">Giỏ hàng trống</p> : (
            <div>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b py-2">
                  <span>{item.name} ({item.price.toLocaleString()}đ)</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.id, -1)} className="px-2 bg-gray-200 rounded">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="px-2 bg-gray-200 rounded">+</button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between font-bold mt-4 pt-2 border-t">
                <span>Tổng tiền:</span>
                <span className="text-blue-600">{totalAmount.toLocaleString()}đ</span>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}