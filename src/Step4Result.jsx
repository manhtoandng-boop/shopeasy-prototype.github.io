import React from 'react';

export default function Step4Result({ orderCode, onReset }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-green-200 text-center shadow-sm max-w-md mx-auto">
      <div className="text-4xl mb-2">🎉</div>
      <h2 className="text-lg font-bold text-green-700 mb-2">Đặt hàng thành công!</h2>
      <p className="text-xs text-gray-600 mb-4">Mã đơn hàng của bạn: <b className="text-blue-600">{orderCode}</b></p>
      <button 
        onClick={onReset} 
        className="bg-blue-600 text-white px-4 py-2 rounded text-xs font-bold hover:bg-blue-700"
      >
        Mua sắm tiếp
      </button>
    </div>
  );
}