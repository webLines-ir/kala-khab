'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'محصولات',
      links: [
        { name: 'تشک', href: '/shop' },
        { name: 'بالش', href: '/shop' },
        { name: 'روتختی', href: '/shop' },
        { name: 'پتو و لحاف', href: '/shop' },
        { name: 'لوازم جانبی', href: '/shop' },
      ]
    },
    {
      title: 'خدمات',
      links: [
        { name: 'مشاوره خرید', href: '/' },
        { name: 'گارانتی', href: '/' },
        { name: 'ارسال و تحویل', href: '/' },
        { name: 'پشتیبانی', href: '/' },
        { name: 'تعویض و بازگشت', href: '/' },
      ]
    },
    {
      title: 'شرکت',
      links: [
        { name: 'درباره ما', href: '/' },
        { name: 'تماس با ما', href: '/' },
        { name: 'وبلاگ', href: '/' },
        { name: 'فرصت‌های شغلی', href: '/' },
        { name: 'حریم خصوصی', href: '/' },
      ]
    }
  ];

  return (
    <footer className="bg-neutral-900 dark:bg-black text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="section-padding py-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              همیشه در جریان باشید
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              از جدیدترین محصولات، تخفیف‌های ویژه و نکات مفید برای خواب بهتر باخبر شوید
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="ایمیل شما"
                className="flex-1 px-6 py-3 rounded-xl border-0 text-neutral-900 focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 px-8 py-3 rounded-xl font-medium hover:bg-neutral-100 transition-colors">
                عضویت
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-reverse space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">خ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">خواب آسوده</h3>
                <p className="text-neutral-400 text-sm">فروشگاه کالای خواب</p>
              </div>
            </div>
            
            <p className="text-neutral-300 mb-6 leading-relaxed">
              ما در خواب آسوده متعهد به ارائه بهترین محصولات کالای خواب با کیفیت بین‌المللی هستیم. 
              هدف ما کمک به شما برای داشتن خوابی راحت و سالم است.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-reverse space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-neutral-300">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-neutral-300">info@khab-asoude.com</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-neutral-300">تهران، میدان ولیعصر، پلاک ۱۲۳</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800">
        <div className="section-padding py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-reverse space-x-6 mb-4 md:mb-0">
              <p className="text-neutral-400 text-sm">
                © ۱۴۰۳ خواب آسوده. تمامی حقوق محفوظ است.
              </p>
            </div>
            
            <div className="flex items-center space-x-reverse space-x-4">
              <span className="text-neutral-400 text-sm ml-4">ما را دنبال کنید:</span>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}