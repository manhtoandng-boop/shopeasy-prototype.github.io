import React from 'react';

export default function Step2Cart({ cart, onUpdateQuantity, onRemoveItem, onNextStep }) {
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 mb-6">
      <h2 className="text-lg font-bold text-blue-900 flex items-center gap-2 mb-4">
        <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
        THÊM VÀO GIỎ HÀNG
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-sm">Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-3">
              <div>
                <h4 className="font-medium text-gray-800">{item.name}</h4>
                <p className="text-blue-600 text-sm">{item.price.toLocaleString()}đ</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded">
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-100">-</button>
                  <span className="px-3">{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-100">+</button>
                </div>
                <button onClick={() => onRemoveItem(item.id)} className="text-red-500 hover:text-red-700 text-sm">🗑️ Xóa</button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4 pt-4 border-t font-bold">
            <span>Tổng tiền ngay lập tức:</span>
            <span className="text-blue-600 text-lg">{totalAmount.toLocaleString()}đ</span>
          </div>

          <button 
            onClick={onNextStep}
            className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Tiến hành Đặt hàng ➡️
          </button>
        </div>
      )}
    </div>
  );
}