'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ProblemSection from '@/components/ProblemSection';
import BookSection from '@/components/BookSection';
import WhatsInsideSection from '@/components/WhatsInsideSection';
import ThirtyDaysSection from '@/components/ThirtyDaysSection';
import ForYouSection from '@/components/ForYouSection';
import AuthorSection from '@/components/AuthorSection';
import FinalCTASection from '@/components/FinalCTASection';
import FAQSection from '@/components/FAQSection';

export default function HomePage() {
  return (
    <div className="bg-obsidian min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <ProblemSection />
        <BookSection />
        <WhatsInsideSection />
        <ThirtyDaysSection />
        <ForYouSection />
        <AuthorSection />
        <FinalCTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
