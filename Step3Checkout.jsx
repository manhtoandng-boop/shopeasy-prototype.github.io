import React, { useState } from 'react';

export default function Step3Checkout({ onSubmitOrder }) {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', paymentMethod: 'COD' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Vui lòng điền đầy đủ thông tin nhận hàng!');
      return;
    }
    onSubmitOrder(formData);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 mb-6">
      <h2 className="text-lg font-bold text-blue-900 flex items-center gap-2 mb-4">
        <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">3</span>
        ĐẶT HÀNG
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Họ tên</label>
          <input 
            type="text" 
            placeholder="Nguyễn Văn A"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
          <input 
            type="text" 
            placeholder="0912345678"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ nhận hàng</label>
          <input 
            type="text" 
            placeholder="123 Đường ABC, Quận XYZ, TP.HCM"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phương thức thanh toán</label>
          <select 
            value={formData.paymentMethod}
            onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="COD">Thanh toán khi nhận hàng (COD)</option>
            <option value="Banking">Chuyển khoản ngân hàng</option>
          </select>
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Xác nhận Đặt hàng
        </button>
      </form>
    </div>
  );
}