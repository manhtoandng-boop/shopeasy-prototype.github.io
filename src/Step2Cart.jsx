import React from 'react';

export default function Step2Cart({ cart, onUpdateQuantity, onRemoveItem, onNextStep }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
      <h2 className="text-lg font-bold text-blue-900 mb-4">2. Giỏ hàng của bạn</h2>
      {cart.length === 0 ? (
        <p className="text-sm text-gray-500">Giỏ hàng đang trống.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.price.toLocaleString('vi-VN')} đ</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded text-xs">-</button>
                <span className="text-sm font-bold">{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded text-xs">+</button>
                <button onClick={() => onRemoveItem(item.id)} className="text-xs text-red-500 ml-2">Xóa</button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="font-bold text-sm">Tổng cộng:</span>
            <span className="font-bold text-blue-600">{total.toLocaleString('vi-VN')} đ</span>
          </div>
          <button 
            onClick={onNextStep} 
            className="w-full bg-blue-600 text-white py-2 rounded text-sm font-medium hover:bg-blue-700"
          >
            Chuyển sang Đặt hàng
          </button>
        </div>
      )}
    </div>
  );
}