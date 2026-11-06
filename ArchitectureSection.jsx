import React from 'react';

export default function ArchitectureSection() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-8">
      <div className="text-center mb-6">
        <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Ba hệ thống kết nối
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <h4 className="font-bold text-blue-900 mb-2">💻 FRONTEND</h4>
          <p className="text-gray-600 text-xs">HTML • Tailwind CSS • JavaScript<br />Responsive • Wireframe</p>
        </div>
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <h4 className="font-bold text-green-700 mb-2">⚙️ BACKEND & DATABASE</h4>
          <p className="text-gray-600 text-xs">Node.js • Express<br />MySQL • API • CRUD • Validation</p>
        </div>
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <h4 className="font-bold text-purple-700 mb-2">☁️ HỆ THỐNG PHỤ TRỢ</h4>
          <p className="text-gray-600 text-xs">Google Analytics (tracking)<br />Sentry (logging & error monitoring)</p>
        </div>
      </div>
    </div>
  );
}