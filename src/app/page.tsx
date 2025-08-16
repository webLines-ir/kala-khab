import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import CategorySection from '@/components/CategorySection/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import SpecialOffers from '@/components/SpecialOffers/SpecialOffers';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <SpecialOffers />
      <Testimonials />
      <Footer />
    </main>
  );
}