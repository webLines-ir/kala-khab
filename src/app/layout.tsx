import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'خواب آسوده | فروشگاه کالای خواب',
  description: 'خرید آنلاین تشک، بالش، روتختی و ملحفه با کیفیت برتر و قیمت مناسب. بهترین برندهای کالای خواب در ایران',
  keywords: 'تشک، بالش، روتختی، ملحفه، کالای خواب، فروشگاه آنلاین، خواب راحت',
  authors: [{ name: 'خواب آسوده' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'خواب آسوده | فروشگاه کالای خواب',
    description: 'خرید آنلاین تشک، بالش، روتختی و ملحفه با کیفیت برتر',
    url: 'https://khab-asoude.com',
    siteName: 'خواب آسوده',
    locale: 'fa_IR',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}