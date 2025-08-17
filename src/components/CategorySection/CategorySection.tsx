'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

export default function CategorySection() {
  const categories = [
    {
      id: 'mattress',
      name: 'تشک',
      description: 'تشک‌های فنری، لاتکس و میموری فوم',
      image: getImagePath('mattress-1.jpg'),
      href: '/shop/mattress',
      size: 'large'
    },
    {
      id: 'pillow',
      name: 'بالش',
      description: 'بالش‌های طبی و آرام‌بخش',
      image: getImagePath('pillow-1.jpg'),
      href: '/shop/pillow',
      size: 'medium'
    },
    {
      id: 'bedding',
      name: 'روتختی',
      description: 'سرویس خواب و ملحفه',
      image: getImagePath('blanket-1.jpg'),
      href: '/shop/bedding',
      size: 'medium'
    },
    {
      id: 'blanket',
      name: 'پتو و لحاف',
      description: 'پتوهای نرم و گرم',
      image: getImagePath('comforter-1.jpg'),
      href: '/shop/blanket',
      size: 'small'
    },
    {
      id: 'accessories',
      name: 'لوازم جانبی',
      description: 'محافظ تشک، چراغ خواب',
      image: getImagePath('bedding-1.jpg'),
      href: '/shop/accessories',
      size: 'small'
    }
  ];

  return (
    <section className="section-padding py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          دسته‌بندی محصولات
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          از تشک‌های عالی تا روتختی‌های زیبا، همه‌چیز برای خواب راحت و آسوده
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {categories.map((category, index) => {
          const gridClasses = {
            large: 'lg:col-span-6 md:row-span-2',
            medium: 'lg:col-span-3 md:col-span-1',
            small: 'lg:col-span-3 md:col-span-1'
          };

          const heightClasses = {
            large: 'h-80 md:h-96',
            medium: 'h-64',
            small: 'h-48'
          };

          return (
            <Link
              key={category.id}
              href={category.href}
              className={`group relative overflow-hidden rounded-2xl ${gridClasses[category.size as keyof typeof gridClasses]} ${heightClasses[category.size as keyof typeof heightClasses]}`}
            >
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                <h3 className={`font-bold mb-2 ${
                  category.size === 'large' ? 'text-2xl' : 'text-xl'
                }`}>
                  {category.name}
                </h3>
                <p className={`mb-4 opacity-90 ${
                  category.size === 'large' ? 'text-base' : 'text-sm'
                }`}>
                  {category.description}
                </p>
                <div className="flex items-center space-x-reverse space-x-2 text-primary-300 group-hover:text-primary-200 transition-colors">
                  <span className="text-sm font-medium">مشاهده همه</span>
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}