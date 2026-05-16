import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';

import { OrderContext } from '@/App';

interface HomeProps {
  onSubmitClick: (context?: OrderContext) => void;
  onTrackClick: () => void;
}

export default function Home({ onSubmitClick, onTrackClick }: HomeProps) {
  return (
    <main>
      <Hero onSubmitClick={() => onSubmitClick({ tier: 'General Inquiry', service: 'Not specified' })} onTrackClick={onTrackClick} />
      <Marquee />
      <Services onSubmitClick={onSubmitClick} />
      <HowItWorks />
      <Pricing onSubmitClick={onSubmitClick} />
      <WhyUs />
      <Testimonials />
    </main>
  );
}
