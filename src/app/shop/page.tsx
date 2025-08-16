'use client';

import { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/ProductCard/ProductCard';
import { Search, Filter, Grid, List, ChevronDown } from 'lucide-react';

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000000]);

  const products = [
    {
      id: '1',
      name: 'تشک میموری فوم پریمیوم دو نفره',
      price: 2890000,
      originalPrice: 3200000,
      image: '/images/mattress-1.jpg',
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
      image: '/images/blanket-1.jpg',
      rating: 4.9,
      reviewCount: 189,
      category: 'روتختی'
    },
    {
      id: '3',
      name: 'بالش طبی لاتکس',
      price: 890000,
      originalPrice: 1050000,
      image: '/images/pillow-1.jpg',
      rating: 4.7,
      reviewCount: 156,
      category: 'بالش',
      discount: 15
    },
    {
      id: '4',
      name: 'پتوی نرم و گرم زمستانی',
      price: 450000,
      image: '/images/comforter-1.jpg',
      rating: 4.6,
      reviewCount: 98,
      category: 'پتو'
    },
    {
      id: '5',
      name: 'تشک فنری پاکتی دو نفره',
      price: 1890000,
      image: '/images/bedroom-1.jpg',
      rating: 4.5,
      reviewCount: 134,
      category: 'تشک'
    },
    {
      id: '6',
      name: 'سرویس خواب نوزاد',
      price: 680000,
      image: '/images/pillow-1.jpg',
      rating: 4.8,
      reviewCount: 67,
      category: 'روتختی',
      isNew: true
    }
  ];

  const categories = [
    { value: 'all', label: 'همه محصولات' },
    { value: 'تشک', label: 'تشک' },
    { value: 'بالش', label: 'بالش' },
    { value: 'روتختی', label: 'روتختی' },
    { value: 'پتو', label: 'پتو' },
  ];

  const sortOptions = [
    { value: 'newest', label: 'جدیدترین' },
    { value: 'price-low', label: 'ارزان‌ترین' },
    { value: 'price-high', label: 'گران‌ترین' },
    { value: 'rating', label: 'بهترین امتیاز' },
    { value: 'popularity', label: 'محبوب‌ترین' },
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-warm-50 to-lavender-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="section-padding py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              فروشگاه کالای خواب
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              انتخاب از بیش از ۱۰۰۰ محصول با کیفیت عالی و قیمت مناسب
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="card p-6 sticky top-24">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                فیلترها
              </h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  دسته‌بندی
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.value} className="flex items-center space-x-reverse space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-sm text-neutral-600 dark:text-neutral-300">
                        {category.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  محدوده قیمت
                </h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="5000000"
                    step="100000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="w-full accent-primary-500"
                  />
                  <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-300">
                    <span>۰ تومان</span>
                    <span>{priceRange[1].toLocaleString('fa-IR')} تومان</span>
                  </div>
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  برند
                </h4>
                <div className="space-y-2">
                  {['همه برندها', 'آسمیران', 'پیکان', 'رادین', 'پرشیا'].map((brand) => (
                    <label key={brand} className="flex items-center space-x-reverse space-x-3 cursor-pointer">
                      <input type="checkbox" className="text-primary-500 focus:ring-primary-500" />
                      <span className="text-sm text-neutral-600 dark:text-neutral-300">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Top Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
              <div className="flex items-center space-x-reverse space-x-4">
                <span className="text-neutral-600 dark:text-neutral-300">
                  {filteredProducts.length} محصول یافت شد
                </span>
              </div>

              <div className="flex items-center space-x-reverse space-x-4">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="input-field pr-4 pl-10 py-2 text-sm appearance-none"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center border border-neutral-300 dark:border-neutral-600 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-neutral-600 dark:text-neutral-300'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-neutral-600 dark:text-neutral-300'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  variant={viewMode === 'list' ? 'default' : 'default'}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-reverse space-x-2">
                <button className="px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                  قبلی
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded-xl transition-colors ${
                      page === 1
                        ? 'bg-primary-500 text-white'
                        : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                  بعدی
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}