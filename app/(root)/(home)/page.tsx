import About from '@/components/About';
import Hero from '@/components/Hero';
import InfoSlide from '@/components/InfoSlide';
import Questions from '@/components/Questions';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <InfoSlide />
      <Questions />
    </>
  );
}
