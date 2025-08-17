'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/ProductCard/ProductCard';
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw, Award } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';

interface ProductPageClientProps {
  productId: string;
}

export default function ProductPageClient({ productId }: ProductPageClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('دو نفره');
  const [selectedColor, setSelectedColor] = useState('سفید');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  const { addItem } = useCartStore();

  // Mock product data - در پروژه واقعی از API یا دیتابیس دریافت می‌شود
  const product = {
    id: productId,
    name: 'تشک میموری فوم پریمیوم دو نفره',
    price: 2890000,
    originalPrice: 3200000,
    rating: 4.8,
    reviewCount: 245,
    category: 'تشک',
    brand: 'آسمیران',
    sku: 'MM-001',
    availability: 'موجود',
    description: 'تشک میموری فوم پریمیوم با فناوری پیشرفته که به شکل بدن شما تطبیق می‌یابد و حداکثر راحتی را فراهم می‌کند. مناسب برای افرادی که به دنبال خوابی آرام و بدون درد هستند.',
    features: [
      'فوم میموری با کیفیت پریمیوم',
      'تنظیم دمای بدن',
      'ضد حساسیت و ضد باکتری',
      'قابلیت شست‌وشو',
      'گارانتی ۵ ساله',
      'ارتفاع ۲۵ سانتی‌متر'
    ],
    images: [
      getImagePath('mattress-1.jpg'),
      getImagePath('bedroom-1.jpg'),
      getImagePath('bedding-1.jpg'),
      getImagePath('pillow-1.jpg')
    ],
    sizes: ['تک نفره', 'دو نفره', 'کینگ سایز'],
    colors: ['سفید', 'کرم', 'طوسی', 'آبی روشن']
  };

  const reviews = [
    {
      id: 1,
      author: 'مریم احمدی',
      rating: 5,
      date: '۱۴۰۳/۰۸/۱۵',
      comment: 'واقعاً محصول عالی‌ای بود. کیفیت فوق‌العاده و خوابم بهتر شده.',
      helpful: 23
    },
    {
      id: 2,
      author: 'علی محمدی',
      rating: 4,
      date: '۱۴۰۳/۰۷/۲۸',
      comment: 'تشک خوبی است ولی کمی سفت‌تر از انتظارم بود.',
      helpful: 12
    }
  ];

  const relatedProducts = [
    {
      id: '7',
      name: 'بالش میموری فوم',
      price: 450000,
      image: getImagePath('pillow-1.jpg'),
      rating: 4.7,
      reviewCount: 89,
      category: 'بالش'
    },
    {
      id: '8',
      name: 'محافظ تشک ضدآب',
      price: 320000,
      image: getImagePath('bedding-1.jpg'),
      rating: 4.5,
      reviewCount: 67,
      category: 'لوازم جانبی'
    }
  ];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="section-padding py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-reverse space-x-2 text-sm text-neutral-600 dark:text-neutral-300">
            <a href="/" className="hover:text-primary-600">خانه</a>
            <span>/</span>
            <a href="/shop" className="hover:text-primary-600">فروشگاه</a>
            <span>/</span>
            <a href="/shop" className="hover:text-primary-600">تشک</a>
            <span>/</span>
            <span className="text-neutral-900 dark:text-neutral-100">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative mb-6">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={500}
                className="w-full h-96 object-cover rounded-2xl"
              />
              <button className="absolute top-4 right-4 p-3 bg-white dark:bg-neutral-800 rounded-full shadow-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                <Heart className="w-5 h-5 text-neutral-600 dark:text-neutral-300 hover:text-red-500" />
              </button>
              <button className="absolute top-4 left-4 p-3 bg-white dark:bg-neutral-800 rounded-full shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                <Share2 className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-primary-500'
                      : 'border-neutral-200 dark:border-neutral-700'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - تصویر ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <div className="flex items-center space-x-reverse space-x-3 mb-3">
                <span className="text-sm text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  برند: {product.brand}
                </span>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-reverse space-x-4 mb-6">
                <div className="flex items-center space-x-reverse space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-500 fill-current'
                          : 'text-neutral-300 dark:text-neutral-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-neutral-600 dark:text-neutral-300">
                  {product.rating} ({product.reviewCount} نظر)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-center space-x-reverse space-x-4 mb-2">
                <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {product.price.toLocaleString('fa-IR')} تومان
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-neutral-400 line-through">
                    {product.originalPrice.toLocaleString('fa-IR')}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <span className="text-sm text-green-600 dark:text-green-400">
                  شما {((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0)}% صرفه‌جویی می‌کنید
                </span>
              )}
            </div>

            {/* Options */}
            <div className="space-y-6 mb-8">
              {/* Size Selection */}
              <div>
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-3">
                  سایز:
                </h4>
                <div className="flex space-x-reverse space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-xl border transition-colors ${
                        selectedSize === size
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 hover:border-primary-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-3">
                  رنگ:
                </h4>
                <div className="flex space-x-reverse space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-xl border transition-colors ${
                        selectedColor === color
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 hover:border-primary-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-3">
                  تعداد:
                </h4>
                <div className="flex items-center space-x-reverse space-x-4">
                  <div className="flex items-center border border-neutral-300 dark:border-neutral-600 rounded-xl">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 min-w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-green-600 dark:text-green-400">
                    {product.availability}
                  </span>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="w-full btn-primary flex items-center justify-center space-x-reverse space-x-3"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>افزودن به سبد خرید</span>
              </button>
              
              <button className="w-full btn-secondary">
                خرید سریع (پرداخت فوری)
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                <Truck className="w-6 h-6 text-primary-500 mb-2" />
                <span className="text-xs text-neutral-600 dark:text-neutral-300">ارسال رایگان</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                <Shield className="w-6 h-6 text-green-500 mb-2" />
                <span className="text-xs text-neutral-600 dark:text-neutral-300">گارانتی اصالت</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                <RotateCcw className="w-6 h-6 text-blue-500 mb-2" />
                <span className="text-xs text-neutral-600 dark:text-neutral-300">۷ روز ضمانت</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                <Award className="w-6 h-6 text-yellow-500 mb-2" />
                <span className="text-xs text-neutral-600 dark:text-neutral-300">کیفیت برتر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b border-neutral-200 dark:border-neutral-700 mb-8">
            <nav className="flex space-x-reverse space-x-8">
              {[
                { id: 'description', label: 'توضیحات' },
                { id: 'features', label: 'ویژگی‌ها' },
                { id: 'reviews', label: 'نظرات' },
                { id: 'shipping', label: 'ارسال' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                      : 'border-transparent text-neutral-600 dark:text-neutral-300 hover:text-primary-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {activeTab === 'description' && (
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {product.description}
                  </p>
                  <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                    این تشک با استفاده از جدیدترین فناوری میموری فوم تولید شده و قابلیت تطبیق کامل با شکل بدن را دارد. 
                    مواد اولیه استفاده شده کاملاً طبیعی و ضد حساسیت بوده و برای تمام افراد خانواده مناسب است.
                  </p>
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-6 text-lg">
                    ویژگی‌های محصول
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-reverse space-x-3 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-lg">
                      نظرات مشتریان ({reviews.length})
                    </h4>
                    <button className="btn-secondary text-sm">
                      نوشتن نظر
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="card p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-reverse space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
                              {review.author.charAt(0)}
                            </div>
                            <div>
                              <h5 className="font-medium text-neutral-900 dark:text-neutral-100">
                                {review.author}
                              </h5>
                              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                                {review.date}
                              </span>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'text-yellow-500 fill-current'
                                    : 'text-neutral-300 dark:text-neutral-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                          {review.comment}
                        </p>
                        
                        <button className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary-600 transition-colors">
                          مفید بود ({review.helpful})
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="space-y-6">
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-lg">
                    اطلاعات ارسال
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card p-6">
                      <h5 className="font-medium text-neutral-900 dark:text-neutral-100 mb-3">
                        ارسال عادی
                      </h5>
                      <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-2">
                        ۳-۵ روز کاری
                      </p>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        رایگان برای خریدهای بالای ۵۰۰,۰۰۰ تومان
                      </p>
                    </div>
                    
                    <div className="card p-6">
                      <h5 className="font-medium text-neutral-900 dark:text-neutral-100 mb-3">
                        ارسال اکسپرس
                      </h5>
                      <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-2">
                        ۱-۲ روز کاری
                      </p>
                      <p className="text-neutral-700 dark:text-neutral-300 font-medium">
                        ۱۵۰,۰۰۰ تومان
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  اطلاعات محصول
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">کد محصول:</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">{product.sku}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">برند:</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">{product.brand}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">وضعیت:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">{product.availability}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
            محصولات مرتبط
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="small" />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
