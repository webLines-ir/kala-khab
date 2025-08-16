'use client';

import Link from 'next/link';
import { Home, ArrowRight, Clock, AlertCircle } from 'lucide-react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
        <div className="section-padding py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full">
                <AlertCircle className="w-16 h-16 text-primary-500" />
              </div>
              <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
                ۴۰۴
              </div>
            </div>

            {/* Main Message */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                محتوای این صفحه هنوز منتشر نشده است
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-4 max-w-2xl mx-auto leading-relaxed">
                متأسفانه صفحه‌ای که به دنبال آن هستید در حال حاضر در دسترس نیست. ممکن است این محتوا هنوز آماده انتشار نباشد یا آدرس صفحه تغییر کرده باشد.
              </p>
              
              {/* Status Message */}
              <div className="inline-flex items-center space-x-reverse space-x-2 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 px-6 py-3 rounded-xl border border-amber-200 dark:border-amber-700/30">
                <Clock className="w-5 h-5" />
                <span className="font-medium">این محتوا به زودی منتشر خواهد شد</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/"
                className="inline-flex items-center space-x-reverse space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Home className="w-5 h-5" />
                <span>بازگشت به صفحه اصلی</span>
              </Link>
              
              <Link
                href="/shop"
                className="inline-flex items-center space-x-reverse space-x-2 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 px-8 py-4 rounded-xl font-medium border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all duration-300"
              >
                <span>مشاهده محصولات</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                شاید این صفحات مفید باشند:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/shop"
                  className="group p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors border border-transparent hover:border-primary-200 dark:hover:border-primary-700/30"
                >
                  <div className="text-primary-500 group-hover:text-primary-600 font-medium mb-1">
                    فروشگاه
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">
                    مشاهده تمام محصولات
                  </div>
                </Link>
                
                <Link
                  href="/about"
                  className="group p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors border border-transparent hover:border-primary-200 dark:hover:border-primary-700/30"
                >
                  <div className="text-primary-500 group-hover:text-primary-600 font-medium mb-1">
                    درباره ما
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">
                    آشنایی با خواب آسوده
                  </div>
                </Link>
                
                <Link
                  href="/contact"
                  className="group p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors border border-transparent hover:border-primary-200 dark:hover:border-primary-700/30"
                >
                  <div className="text-primary-500 group-hover:text-primary-600 font-medium mb-1">
                    تماس با ما
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">
                    ارتباط با پشتیبانی
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
