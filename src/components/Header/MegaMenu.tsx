'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';

interface MegaMenuProps {
  isOpen: boolean;
}

export default function MegaMenu({ isOpen }: MegaMenuProps) {
  const categories = [
    {
      title: 'تشک و زیرانداز',
      items: [
        { name: 'تشک فنری', href: '/shop' },
        { name: 'تشک لاتکس', href: '/shop' },
        { name: 'تشک میموری فوم', href: '/product/1' },
        { name: 'تشک طبی', href: '/shop' },
        { name: 'زیرانداز تشک', href: '/shop' },
      ]
    },
    {
      title: 'بالش و کوسن',
      items: [
        { name: 'بالش میموری فوم', href: '/product/3' },
        { name: 'بالش لاتکس', href: '/product/3' },
        { name: 'بالش طبی', href: '/product/3' },
        { name: 'کوسن تزیینی', href: '/shop' },
        { name: 'بالش کودک', href: '/shop' },
      ]
    },
    {
      title: 'روتختی و ملحفه',
      items: [
        { name: 'سرویس خواب', href: '/product/2' },
        { name: 'ملحفه و کتان', href: '/shop' },
        { name: 'روبالشی', href: '/shop' },
        { name: 'رومیزی', href: '/shop' },
        { name: 'پتو و لحاف', href: '/product/4' },
      ]
    },
    {
      title: 'لوازم خواب',
      items: [
        { name: 'محافظ تشک', href: '/shop' },
        { name: 'تنظیم‌کننده دما', href: '/shop' },
        { name: 'چراغ خواب', href: '/shop' },
        { name: 'آرام‌بخش طبیعی', href: '/shop' },
        { name: 'ماسک چشم', href: '/shop' },
      ]
    }
  ];

  const featuredProducts = [
    {
      name: 'تشک میموری فوم پریمیوم',
      price: '۲,۸۹۰,۰۰۰',
      image: getImagePath('mattress-1.jpg')
    },
    {
      name: 'سرویس خواب لوکس',
      price: '۱,۲۵۰,۰۰۰',
      image: getImagePath('blanket-1.jpg')
    }
  ];

  return (
    <div className={`mega-menu ${isOpen ? 'active' : ''}`}>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Categories */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div key={category.title}>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4 text-lg">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Products */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4 text-lg">
              محصولات ویژه
            </h3>
            <div className="space-y-4">
              {featuredProducts.map((product) => (
                <div key={product.name} className="group">
                  <div className="relative overflow-hidden rounded-xl mb-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={150}
                      className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1">
                    {product.name}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                    {product.price} تومان
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
          <div className="bg-gradient-to-r from-warm-50 to-lavender-50 dark:from-warm-900/20 dark:to-lavender-900/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  مشاوره رایگان خرید
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  کارشناسان ما آماده راهنمایی شما هستند
                </p>
              </div>
              <Link href="/" className="btn-primary">
                تماس با ما
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}