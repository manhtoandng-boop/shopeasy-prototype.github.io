import React from 'react';

export default function Step4Result({ orderCode, onReset }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 mb-6 text-center">
      <h2 className="text-lg font-bold text-blue-900 flex items-center justify-center gap-2 mb-4">
        <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">4</span>
        NHẬN KẾT QUẢ
      </h2>

      <div className="my-6">
        <div className="text-5xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-600">Đặt hàng thành công!</h3>
        <p className="text-gray-600 text-sm mt-1">Mã đơn hàng: <span className="font-semibold text-blue-600">{orderCode}</span></p>
        <p className="text-xs text-gray-500 mt-2">Theo dõi trạng thái đơn hàng & Nhận thông báo qua email / SMS.</p>
      </div>

      <button 
        onClick={onReset}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
      >
        Tiếp tục mua sắm
      </button>
    </div>
  );
}