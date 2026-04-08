import Hero from '@/components/Hero';
import ContentReveal from '@/components/ContentReveal';
import ConsultationSection from '@/components/ConsultationSection';
import ProcessSection from '@/components/ProcessSection';
import BestSellers from '@/components/BestSellers';
import PromoBanner from '@/components/PromoBanner';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-black">
      <Hero />
      <ContentReveal />
      <ConsultationSection />
      <ProcessSection />
      <BestSellers />
      <PromoBanner />
      <Testimonials />
      <Footer />
    </main>
  );
}