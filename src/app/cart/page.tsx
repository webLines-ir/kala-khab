'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Gift } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';

export default function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCartStore();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const shippingFee = totalPrice >= 500000 ? 0 : 150000;
  const finalTotal = totalPrice - discount + shippingFee;

  const handleApplyPromo = () => {
    if (promoCode === 'WELCOME10') {
      setDiscount(totalPrice * 0.1);
    } else if (promoCode === 'SAVE50K') {
      setDiscount(50000);
    } else {
      alert('کد تخفیف معتبر نیست');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="section-padding py-20">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-neutral-300 dark:text-neutral-600 mx-auto mb-8" />
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              سبد خرید شما خالی است
            </h1>
            <p className="text-neutral-600 dark:text-neutral-300 mb-8">
              هنوز محصولی به سبد خرید خود اضافه نکرده‌اید
            </p>
            <Link href="/shop" className="btn-primary">
              شروع خرید
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="section-padding py-12">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            سبد خرید
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300">
            {totalItems} محصول در سبد خرید شما
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="card p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-32 h-32 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                          {item.name}
                        </h3>
                        <div className="flex items-center space-x-reverse space-x-4 text-sm text-neutral-600 dark:text-neutral-300">
                          {item.size && <span>سایز: {item.size}</span>}
                          {item.color && <span>رنگ: {item.color}</span>}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-600 transition-colors p-2"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-neutral-300 dark:border-neutral-600 rounded-xl">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 min-w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="text-left">
                        <div className="font-bold text-lg text-primary-600 dark:text-primary-400">
                          {(item.price * item.quantity).toLocaleString('fa-IR')} تومان
                        </div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                          {item.price.toLocaleString('fa-IR')} × {item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <div className="flex justify-between items-center pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-600 transition-colors text-sm"
              >
                پاک کردن سبد خرید
              </button>
              <Link href="/shop" className="text-primary-600 dark:text-primary-400 hover:underline text-sm">
                ادامه خرید
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-6 text-lg">
                خلاصه سفارش
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-300">جمع کل محصولات:</span>
                  <span className="font-medium">{totalPrice.toLocaleString('fa-IR')} تومان</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>تخفیف:</span>
                    <span>-{discount.toLocaleString('fa-IR')} تومان</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-300">هزینه ارسال:</span>
                  <span className={`font-medium ${shippingFee === 0 ? 'text-green-600 dark:text-green-400' : ''}`}>
                    {shippingFee === 0 ? 'رایگان' : `${shippingFee.toLocaleString('fa-IR')} تومان`}
                  </span>
                </div>
                
                <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>مجموع نهایی:</span>
                    <span className="text-primary-600 dark:text-primary-400">
                      {finalTotal.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex items-center space-x-reverse space-x-2 mb-3">
                  <Gift className="w-5 h-5 text-neutral-500" />
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">کد تخفیف</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="کد تخفیف"
                    className="flex-1 input-field py-2 text-sm"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="px-4 py-2 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors text-sm"
                  >
                    اعمال
                  </button>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                  کدهای تستی: WELCOME10، SAVE50K
                </p>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout" className="w-full btn-primary flex items-center justify-center space-x-reverse space-x-3">
                <span>ادامه پرداخت</span>
                <ArrowLeft className="w-5 h-5" />
              </Link>
              
              <div className="mt-4 text-center">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  پرداخت امن با رمزنگاری ۲۵۶ بیتی
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}