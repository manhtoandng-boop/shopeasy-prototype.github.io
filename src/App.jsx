import React, { useState } from 'react';
import HeaderComponent from './HeaderComponent';
import Step1Browse from './Step1Browse';
import Step2Cart from './Step2Cart';
import Step3Checkout from './Step3Checkout';
import Step4Result from './Step4Result';
import ArchitectureSection from './ArchitectureSection';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [orderCode, setOrderCode] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  // Thêm sản phẩm vào giỏ hàng (Chuyển từ Bước 1 sang Bước 2)
  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setCurrentStep(2);
  };

  // Cập nhật số lượng sản phẩm trong giỏ hàng
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
    } else {
      setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    }
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const handleRemoveItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Xử lý khi đặt hàng thành công (Chuyển sang Bước 4)
  const handleSubmitOrder = (formData) => {
    const randomCode = '#SE' + Math.floor(100000 + Math.random() * 900000);
    setOrderCode(randomCode);
    setCurrentStep(4);
  };

  // Đặt lại từ đầu
  const handleReset = () => {
    setCart([]);
    setCurrentStep(1);
    setOrderCode('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
      {/* Header và Banner */}
      <HeaderComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Nội dung chính ứng dụng */}
      <main className="max-w-6xl mx-auto px-4 py-8 w-full space-y-8">
        
        {/* Thanh trạng thái quy trình */}
        <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-blue-100">
          <div className={`cursor-pointer font-bold ${currentStep === 1 ? 'text-blue-600' : 'text-gray-400'}`} onClick={() => setCurrentStep(1)}>1. Duyệt sản phẩm</div>
          <span>➔</span>
          <div className={`cursor-pointer font-bold ${currentStep === 2 ? 'text-blue-600' : 'text-gray-400'}`} onClick={() => setCurrentStep(2)}>2. Giỏ hàng</div>
          <span>➔</span>
          <div className={`cursor-pointer font-bold ${currentStep === 3 ? 'text-blue-600' : 'text-gray-400'}`} onClick={() => setCurrentStep(3)}>3. Đặt hàng</div>
          <span>➔</span>
          <div className={`cursor-pointer font-bold ${currentStep === 4 ? 'text-blue-600' : 'text-gray-400'}`}>4. Kết quả</div>
        </div>

        {/* Hiển thị tương ứng theo từng bước */}
        {currentStep === 1 && (
          <Step1Browse 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            onAddToCart={handleAddToCart} 
          />
        )}

        {currentStep === 2 && (
          <Step2Cart 
            cart={cart} 
            onUpdateQuantity={handleUpdateQuantity} 
            onRemoveItem={handleRemoveItem} 
            onNextStep={() => setCurrentStep(3)} 
          />
        )}

        {currentStep === 3 && (
          <Step3Checkout 
            onSubmitOrder={handleSubmitOrder} 
          />
        )}

        {currentStep === 4 && (
          <Step4Result 
            orderCode={orderCode} 
            onReset={handleReset} 
          />
        )}

        {/* Phần kiến trúc 3 hệ thống kết nối ở chân trang */}
        <ArchitectureSection />
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center text-sm mt-8">
        <p>ShopEasy – "Mua sắm dễ dàng, quản lý tài chính thông minh"</p>
      </footer>
    </div>
  );
}