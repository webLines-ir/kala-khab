import ProductPageClient from '@/components/ProductPage/ProductPageClient';

interface PageProps {
  params: { id: string };
}

// Generate static paths for all products
export async function generateStaticParams() {
  // در پروژه واقعی، این لیست از API یا دیتابیس دریافت می‌شود
  const productIds = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    'mattress-1', 'pillow-1', 'blanket-1', 'comforter-1', 'bedding-1'
  ];

  return productIds.map((id) => ({
    id: id,
  }));
}

export default function ProductPage({ params }: PageProps) {
  return <ProductPageClient productId={params.id} />;
}