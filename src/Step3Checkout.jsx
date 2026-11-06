import React, { useState } from 'react';

export default function Step3Checkout({ onSubmitOrder }) {
  const [form, setForm] = useState({ name: '', phone: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    onSubmitOrder(form);
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm max-w-md mx-auto">
      <h2 className="text-lg font-bold text-blue-900 mb-4">3. Thông tin đặt hàng</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input 
          type="text" 
          placeholder="Họ tên" 
          value={form.name} 
          onChange={e => setForm({...form, name: e.target.value})}
          className="w-full border p-2 text-xs rounded" 
        />
        <input 
          type="text" 
          placeholder="Số điện thoại" 
          value={form.phone} 
          onChange={e => setForm({...form, phone: e.target.value})}
          className="w-full border p-2 text-xs rounded" 
        />
        <input 
          type="text" 
          placeholder="Địa chỉ nhận hàng" 
          value={form.address} 
          onChange={e => setForm({...form, address: e.target.value})}
          className="w-full border p-2 text-xs rounded" 
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded text-xs font-bold hover:bg-blue-700">
          XÁC NHẬN ĐẶT HÀNG
        </button>
      </form>
    </div>
  );
}