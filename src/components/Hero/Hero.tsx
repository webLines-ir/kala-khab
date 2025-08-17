'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Award, Truck } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Main Hero Section */}
      <div className="relative bg-gradient-to-br from-warm-50 via-white to-lavender-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <div className="section-padding py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="fade-in">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-sm font-medium">
                  <Star className="w-4 h-4 ml-2" />
                  برترین کیفیت در ایران
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 leading-tight">
                خواب آسوده،
                <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  زندگی سالم‌تر
                </span>
              </h1>
              
              <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                با بهترین محصولات کالای خواب، تجربه‌ای منحصربه‌فرد از آرامش و راحتی را در منزل خود بسازید. 
                کیفیت بین‌المللی، قیمت مناسب.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop" className="btn-primary inline-flex items-center justify-center">
                  مشاهده محصولات
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Link>
                <Link href="/contact" className="btn-secondary inline-flex items-center justify-center">
                  مشاوره رایگان
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-reverse space-x-8 mt-12">
                <div className="flex items-center space-x-reverse space-x-2">
                  <Award className="w-5 h-5 text-primary-500" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">گارانتی اصالت</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <Truck className="w-5 h-5 text-primary-500" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">ارسال رایگان</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <Star className="w-5 h-5 text-primary-500" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">رضایت ۹۸%</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-4xl"></div>
                <Image
                  src={getImagePath("bedroom-1.jpg")}
                  alt="خواب آسوده - تشک و کالای خواب با کیفیت"
                  width={600}
                  height={500}
                  className="rounded-4xl shadow-2xl relative z-10"
                  priority
                />
                
                {/* Floating Cards */}
                <div className="absolute top-8 -right-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-4 max-w-40">
                  <div className="flex items-center space-x-reverse space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">خواب عمیق</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">۸ ساعت آرامش</p>
                </div>
                
                <div className="absolute bottom-8 -left-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-4 max-w-44">
                  <div className="flex items-center space-x-reverse space-x-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">۴.۹/۵</span>
                  </div>
                  <p className="text-xs text-neutral-500">۱۲,۰۰۰+ نظر مثبت</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white dark:bg-neutral-800 border-y border-neutral-200 dark:border-neutral-700">
        <div className="section-padding py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">۱۰۰,۰۰۰+</div>
              <div className="text-neutral-600 dark:text-neutral-300">مشتری راضی</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">۵+</div>
              <div className="text-neutral-600 dark:text-neutral-300">سال تجربه</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warm-600 dark:text-warm-400 mb-2">۲۴/۷</div>
              <div className="text-neutral-600 dark:text-neutral-300">پشتیبانی</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lavender-600 dark:text-lavender-400 mb-2">۱۰۰%</div>
              <div className="text-neutral-600 dark:text-neutral-300">گارانتی کیفیت</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}