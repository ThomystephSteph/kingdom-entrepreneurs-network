
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CoursePreview from '@/components/CoursePreview';
import CommunitySection from '@/components/CommunitySection';
import MembershipSection from '@/components/MembershipSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <CoursePreview />
        <CommunitySection />
        <MembershipSection />
        <TestimonialSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
