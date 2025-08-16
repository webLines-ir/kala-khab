'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'مریم احمدی',
      location: 'تهران',
      rating: 5,
      text: 'تشک میموری فوم خریداری شده از خواب آسوده واقعاً کیفیت عالی داشت. خوابم بهتر شده و درد کمرم کاهش پیدا کرده.',
      product: 'تشک میموری فوم'
    },
    {
      id: 2,
      name: 'علی رضایی',
      location: 'اصفهان',
      rating: 5,
      text: 'سرویس خواب خریداری شده بسیار زیبا و با کیفیت بود. ارسال سریع و بسته‌بندی عالی. حتماً دوباره خرید می‌کنم.',
      product: 'سرویس خواب لوکس'
    },
    {
      id: 3,
      name: 'فاطمه کریمی',
      location: 'شیراز',
      rating: 5,
      text: 'بالش طبی خریداری شده مشکل گردن درد من را حل کرد. واقعاً توصیه می‌کنم به همه.',
      product: 'بالش طبی لاتکس'
    }
  ];

  return (
    <section className="section-padding py-20 bg-gradient-to-br from-warm-50/50 to-lavender-50/50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          نظرات مشتریان
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          رضایت و تجربه واقعی مشتریان از کیفیت محصولات ما
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="card p-8 text-center">
            <Quote className="w-8 h-8 text-primary-500 mx-auto mb-6" />
            
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              "{testimonial.text}"
            </p>
            
            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                {testimonial.name}
              </h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                {testimonial.location}
              </p>
              <p className="text-xs text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full inline-block">
                خریدار {testimonial.product}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}