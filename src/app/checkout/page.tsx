'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Shield, Truck, CreditCard, MapPin, User, Phone, Mail } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'online'
  });

  const shippingFee = totalPrice >= 500000 ? 0 : 150000;
  const finalTotal = totalPrice + shippingFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // در پروژه واقعی، اینجا سفارش به سرور ارسال می‌شود
    alert('سفارش شما با موفقیت ثبت شد! کد پیگیری: KA-' + Math.random().toString(36).substr(2, 9).toUpperCase());
    clearCart();
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="section-padding py-12">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            تسویه حساب
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300">
            لطفاً اطلاعات خود را تکمیل کنید
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personal Information */}
              <div className="card p-6">
                <div className="flex items-center space-x-reverse space-x-3 mb-6">
                  <User className="w-6 h-6 text-primary-500" />
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    اطلاعات شخصی
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      نام
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      نام خانوادگی
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      شماره موبایل
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="card p-6">
                <div className="flex items-center space-x-reverse space-x-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary-500" />
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    آدرس ارسال
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      آدرس کامل
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="input-field resize-none"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        شهر
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                      >
                        <option value="">انتخاب شهر</option>
                        <option value="تهران">تهران</option>
                        <option value="مشهد">مشهد</option>
                        <option value="اصفهان">اصفهان</option>
                        <option value="شیراز">شیراز</option>
                        <option value="تبریز">تبریز</option>
                        <option value="کرج">کرج</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        کد پستی
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="card p-6">
                <div className="flex items-center space-x-reverse space-x-3 mb-6">
                  <CreditCard className="w-6 h-6 text-primary-500" />
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    روش پرداخت
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <label className="flex items-center space-x-reverse space-x-4 p-4 border border-neutral-300 dark:border-neutral-600 rounded-xl cursor-pointer hover:border-primary-300 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={formData.paymentMethod === 'online'}
                      onChange={handleInputChange}
                      className="text-primary-500 focus:ring-primary-500"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-neutral-900 dark:text-neutral-100">پرداخت آنلاین</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-300">پرداخت امن از طریق درگاه بانکی</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center space-x-reverse space-x-4 p-4 border border-neutral-300 dark:border-neutral-600 rounded-xl cursor-pointer hover:border-primary-300 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleInputChange}
                      className="text-primary-500 focus:ring-primary-500"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-neutral-900 dark:text-neutral-100">پرداخت در محل</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-300">پرداخت هنگام تحویل کالا</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-6 text-lg">
                  خلاصه سفارش
                </h3>
                
                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center space-x-reverse space-x-4">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-neutral-900 dark:text-neutral-100 text-sm">
                          {item.name}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          {item.size} × {item.quantity}
                        </p>
                      </div>
                      <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {(item.price * item.quantity).toLocaleString('fa-IR')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-300">جمع محصولات:</span>
                    <span>{totalPrice.toLocaleString('fa-IR')} تومان</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-300">هزینه ارسال:</span>
                    <span className={shippingFee === 0 ? 'text-green-600 dark:text-green-400' : ''}>
                      {shippingFee === 0 ? 'رایگان' : `${shippingFee.toLocaleString('fa-IR')} تومان`}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-3 border-t border-neutral-200 dark:border-neutral-700">
                    <span>مجموع:</span>
                    <span className="text-primary-600 dark:text-primary-400">
                      {finalTotal.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-reverse space-x-3 mb-4"
                >
                  <Shield className="w-5 h-5" />
                  <span>ثبت سفارش نهایی</span>
                </button>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="flex flex-col items-center p-2">
                    <Shield className="w-5 h-5 text-green-500 mb-1" />
                    <span className="text-xs text-neutral-600 dark:text-neutral-300">پرداخت امن</span>
                  </div>
                  <div className="flex flex-col items-center p-2">
                    <Truck className="w-5 h-5 text-blue-500 mb-1" />
                    <span className="text-xs text-neutral-600 dark:text-neutral-300">ارسال سریع</span>
                  </div>
                  <div className="flex flex-col items-center p-2">
                    <Phone className="w-5 h-5 text-purple-500 mb-1" />
                    <span className="text-xs text-neutral-600 dark:text-neutral-300">پشتیبانی ۲۴/۷</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}