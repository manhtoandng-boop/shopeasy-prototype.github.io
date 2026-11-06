import React from 'react';

export default function HeaderComponent({ searchTerm, setSearchTerm }) {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">🛒 ShopEasy</span>
          <span className="text-xs bg-blue-500 px-2 py-1 rounded">Mua sắm thông minh</span>
        </div>
        <div className="text-sm">Mua sắm mọi lúc mọi nơi</div>
      </div>

      {/* Main Header / Banner Section */}
      <div className="bg-blue-700 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Mua sắm thông minh – Cuộc sống dễ dàng hơn</h1>
            <p className="text-blue-100 text-sm max-w-xl">
              Website bán hàng trực tuyến với đa dạng sản phẩm, trải nghiệm mua sắm tiện lợi, an toàn và nhanh chóng.
            </p>
            {/* Quick Features */}
            <div className="flex flex-wrap gap-4 mt-4 text-xs">
              <span className="bg-blue-800 px-3 py-1.5 rounded-full flex items-center gap-1">🔍 Sản phẩm đa dạng</span>
              <span className="bg-blue-800 px-3 py-1.5 rounded-full flex items-center gap-1">🚚 Giao hàng nhanh</span>
              <span className="bg-blue-800 px-3 py-1.5 rounded-full flex items-center gap-1">💳 Thanh toán an toàn</span>
              <span className="bg-blue-800 px-3 py-1.5 rounded-full flex items-center gap-1">🎧 Hỗ trợ 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}