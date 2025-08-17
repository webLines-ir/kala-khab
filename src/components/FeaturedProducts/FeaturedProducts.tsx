'use client';

import ProductCard from '@/components/ProductCard/ProductCard';
import Link from 'next/link';
import { getImagePath } from '@/lib/utils';

export default function FeaturedProducts() {
  const featuredProducts = [
    {
      id: '1',
      name: 'تشک میموری فوم پریمیوم دو نفره',
      price: 2890000,
      originalPrice: 3200000,
      image: getImagePath('mattress-1.jpg'),
      rating: 4.8,
      reviewCount: 245,
      category: 'تشک',
      isNew: true,
      discount: 10
    },
    {
      id: '2',
      name: 'سرویس خواب ۶ تکه لوکس',
      price: 1250000,
      image: getImagePath('blanket-1.jpg'),
      rating: 4.9,
      reviewCount: 189,
      category: 'روتختی'
    },
    {
      id: '3',
      name: 'بالش طبی لاتکس',
      price: 890000,
      originalPrice: 1050000,
      image: getImagePath('pillow-1.jpg'),
      rating: 4.7,
      reviewCount: 156,
      category: 'بالش',
      discount: 15
    },
    {
      id: '4',
      name: 'پتوی نرم و گرم زمستانی',
      price: 450000,
      image: getImagePath('comforter-1.jpg'),
      rating: 4.6,
      reviewCount: 98,
      category: 'پتو'
    }
  ];

  return (
    <section className="section-padding py-20 bg-neutral-50 dark:bg-neutral-800/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          محصولات پرفروش
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          انتخاب مشتریان و پرفروش‌ترین محصولات ما با بالاترین کیفیت
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            variant={index === 0 ? 'featured' : 'default'}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/shop" className="btn-primary">
          مشاهده همه محصولات
        </Link>
      </div>
    </section>
  );
}