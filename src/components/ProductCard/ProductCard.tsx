'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  isNew?: boolean;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured' | 'small';
}

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const cardClasses = {
    default: 'group card p-6 hover:scale-105',
    featured: 'group card p-8 hover:scale-105 border-2 border-primary-200 dark:border-primary-800',
    small: 'group card p-4 hover:scale-105'
  };

  const imageClasses = {
    default: 'w-full h-48 object-cover rounded-xl mb-4',
    featured: 'w-full h-56 object-cover rounded-xl mb-6',
    small: 'w-full h-32 object-cover rounded-xl mb-3'
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className={cardClasses[variant]}>
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-xl mb-4">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={variant === 'featured' ? 224 : variant === 'small' ? 128 : 192}
            className={`${imageClasses[variant]} group-hover:scale-110 transition-transform duration-500`}
          />
          
          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                جدید
              </span>
            )}
            {product.discount && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {product.discount}% تخفیف
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button className="absolute top-3 left-3 p-2 bg-white dark:bg-neutral-800 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-50 dark:hover:bg-red-900/20">
            <Heart className="w-4 h-4 text-neutral-600 dark:text-neutral-300 hover:text-red-500" />
          </button>

          {/* Quick Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 left-3 right-3 bg-primary-500 text-white py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary-600 flex items-center justify-center space-x-reverse space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">افزودن به سبد</span>
          </button>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded-full">
              {product.category}
            </span>
            <div className="flex items-center space-x-reverse space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm text-neutral-600 dark:text-neutral-300">
                {product.rating}
              </span>
              <span className="text-xs text-neutral-400">
                ({product.reviewCount})
              </span>
            </div>
          </div>

          <h3 className={`font-semibold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-primary-600 transition-colors ${
            variant === 'featured' ? 'text-lg' : variant === 'small' ? 'text-sm' : 'text-base'
          }`}>
            {product.name}
          </h3>

          <div className="flex items-center space-x-reverse space-x-3">
            <span className={`font-bold text-primary-600 dark:text-primary-400 ${
              variant === 'featured' ? 'text-xl' : 'text-lg'
            }`}>
              {product.price.toLocaleString('fa-IR')} تومان
            </span>
            {product.originalPrice && (
              <span className="text-neutral-400 line-through text-sm">
                {product.originalPrice.toLocaleString('fa-IR')}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}