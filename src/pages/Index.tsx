import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import SecondaryCTA from "@/components/SecondaryCTA";
import ComplianceBadges from "@/components/ComplianceBadges";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LegalNotice from "@/components/LegalNotice";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <>
      <a href="#contato" className="skip-link">Pular para o conteúdo principal</a>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorks />
        <AboutSection />
        <TestimonialsSection />
        <StatsSection />
        <DifferentialsSection />
        <SecondaryCTA />
        <ComplianceBadges />
        <FAQSection />
        <ContactForm />
      </main>
      <LegalNotice />
      <FooterSection />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
