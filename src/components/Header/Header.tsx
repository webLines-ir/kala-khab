'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Moon, Sun, Menu, X, User, Heart } from 'lucide-react';
import { useThemeStore } from '@/stores/themeStore';
import { useCartStore } from '@/stores/cartStore';
import MegaMenu from './MegaMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();
  const { totalItems } = useCartStore();

  return (
    <header className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700 sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center py-2 text-sm">
        <p>🎉 تخفیف ویژه تا ۳۰% برای تمام محصولات | ارسال رایگان برای خریدهای بالای ۵۰۰ هزار تومان</p>
      </div>

      <div className="section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-reverse space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">خ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                خواب آسوده
              </h1>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">فروشگاه کالای خواب</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-reverse space-x-8">
          
            <div className="relative">
              <button
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
                className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 transition-colors flex items-center space-x-reverse space-x-1"
              >
                <span>محصولات</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <MegaMenu isOpen={isMegaMenuOpen} />
              </div>
            </div>
            <Link href="/" className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 transition-colors">
              درباره ما
            </Link>
            <Link href="/" className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 transition-colors">
              تماس با ما
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="جستجو در محصولات..."
                className="w-full pl-12 pr-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-reverse space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button className="hidden md:flex p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
              <Heart className="w-5 h-5" />
            </button>

            <button className="hidden md:flex p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
              <User className="w-5 h-5" />
            </button>

            <Link href="/cart" className="relative p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-neutral-200 dark:border-neutral-700">
            <div className="flex flex-col space-y-4">
              <div className="md:hidden mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="جستجو در محصولات..."
                    className="w-full pl-12 pr-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                </div>
              </div>
              
              <Link href="/" className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 transition-colors py-2">
                صفحه اصلی
              </Link>
              <Link href="/shop" className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 transition-colors py-2">
                فروشگاه
              </Link>
              <Link href="/" className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 transition-colors py-2">
                درباره ما
              </Link>
              <Link href="/" className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 transition-colors py-2">
                تماس با ما
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}