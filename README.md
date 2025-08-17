# کالا خواب - Next.js E-commerce

یک وب‌سایت فروشگاهی مدرن برای فروش لوازم خواب با استفاده از Next.js و TailwindCSS.

## ویژگی‌ها

- طراحی ریسپانسیو و مدرن
- پشتیبانی از تم تیره و روشن
- سبد خرید پیشرفته
- صفحات محصولات با جزئیات کامل
- انیمیشن‌های روان با Framer Motion
- فونت فارسی IRANSans

## راه‌اندازی محلی

```bash
# نصب وابستگی‌ها
npm install

# اجرای پروژه در حالت توسعه
npm run dev

# ساخت پروژه
npm run build

# اجرای پروژه در حالت تولید
npm start
```

## استقرار روی GitHub Pages

این پروژه برای استقرار خودکار روی GitHub Pages کانفیگ شده است.

### روش اول: استقرار خودکار (پیشنهادی)

1. پروژه را روی GitHub پوش کنید:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. در تنظیمات مخزن، بخش Pages را باز کنید:
   - Settings > Pages
   - Source را روی "GitHub Actions" تنظیم کنید
   
3. هر بار که کد جدیدی روی branch اصلی push کنید، سایت به‌روزرسانی می‌شود

**نکته مهم:** اگر خطای مجوز دریافت کردید، این تنظیمات را بررسی کنید:
- Settings > Actions > General > Workflow permissions
- "Read and write permissions" را انتخاب کنید

### روش دوم: استقرار دستی

```bash
# ساخت فایل‌های استاتیک
npm run export

# استقرار دستی (اختیاری)
npm run deploy
```

## ساختار پروژه

```
src/
├── app/                 # App Router صفحات
├── components/          # کامپوننت‌های قابل استفاده مجدد
└── stores/             # مدیریت state با Zustand

public/
├── fonts/              # فونت‌های فارسی
└── images/            # تصاویر محصولات
```

## تکنولوژی‌های استفاده شده

- **Next.js 14** - فریمورک React
- **TypeScript** - تایپ‌اسکریپت
- **TailwindCSS** - CSS Framework
- **Framer Motion** - انیمیشن
- **Zustand** - مدیریت State
- **Lucide React** - آیکون‌ها

## لایسنس

ISC
