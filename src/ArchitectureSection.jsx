import React from 'react';

export default function ArchitectureSection() {
  return (
    <section className="bg-gray-100 border border-gray-200 rounded-xl p-6">
      <div className="text-center mb-4">
        <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase">
          Ba hệ thống kết nối
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <h4 className="font-bold text-blue-900 mb-1">💻 FRONTEND</h4>
          <p className="text-gray-600">HTML • Tailwind CSS • JavaScript<br />Responsive • Wireframe</p>
        </div>
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <h4 className="font-bold text-green-700 mb-1">⚙️ BACKEND & DATABASE</h4>
          <p className="text-gray-600">Node.js • Express<br />MySQL • API • CRUD • Validation</p>
        </div>
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <h4 className="font-bold text-purple-700 mb-1">☁️ HỆ THỐNG PHỤ TRỢ</h4>
          <p className="text-gray-600">Google Analytics (tracking)<br />Sentry (logging & error monitoring)</p>
        </div>
      </div>
    </section>
  );
}