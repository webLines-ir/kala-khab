'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Timer, Star, ArrowLeft } from 'lucide-react';

export default function SpecialOffers() {
  return (
    <section className="section-padding py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Offer */}
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-primary-500 to-secondary-600 text-white p-8 lg:p-12">
          <div className="relative z-10">
            <div className="flex items-center space-x-reverse space-x-2 mb-4">
              <Timer className="w-5 h-5" />
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                پیشنهاد محدود
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              تا ۴۰% تخفیف
              <span className="block text-xl md:text-2xl mt-2 opacity-90">
                روی تمام تشک‌های میموری فوم
              </span>
            </h3>
            
            <p className="text-lg opacity-90 mb-6">
              فرصت طلایی برای تجربه بهترین کیفیت خواب با قیمت استثنایی
            </p>
            
            <Link href="/shop/mattress" className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-xl font-medium hover:bg-neutral-100 transition-colors">
              خرید کنید
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Link>
          </div>
          
          <div className="absolute left-0 top-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12"></div>
        </div>

        {/* Secondary Offers */}
        <div className="space-y-6">
          <div className="card p-6 group hover:scale-105">
            <div className="flex items-center space-x-reverse space-x-4">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                <Image
                  src="/images/blanket-1.jpg"
                  alt="سرویس خواب"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-reverse space-x-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                    ویژه
                  </span>
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                  سرویس خواب کامل
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
                  ۲۰% تخفیف برای خرید ست کامل
                </p>
                <Link href="/shop/bedding-sets" className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline">
                  مشاهده پیشنهاد
                </Link>
              </div>
            </div>
          </div>

          <div className="card p-6 group hover:scale-105">
            <div className="flex items-center space-x-reverse space-x-4">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                <Image
                  src="/images/pillow-1.jpg"
                  alt="بالش طبی"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-reverse space-x-2 mb-2">
                  <span className="text-sm bg-lavender-100 dark:bg-lavender-900/30 text-lavender-800 dark:text-lavender-200 px-2 py-1 rounded-full">
                    جدید
                  </span>
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                  بالش‌های طبی جدید
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
                  مناسب برای مشکلات گردن
                </p>
                <Link href="/shop/medical-pillows" className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline">
                  مشاهده محصولات
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-warm-100 to-lavender-100 dark:from-warm-900/20 dark:to-lavender-900/20 rounded-2xl p-6">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              خبرنامه خواب آسوده
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
              از آخرین تخفیف‌ها و محصولات جدید باخبر شوید
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="ایمیل شما"
                className="flex-1 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-sm"
              />
              <button className="bg-primary-500 text-white px-4 py-2 rounded-xl hover:bg-primary-600 transition-colors text-sm">
                عضویت
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}