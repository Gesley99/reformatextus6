import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import About from "@/components/site/About";
import Testimonials from "@/components/site/Testimonials";
import Commitments from "@/components/site/Commitments";
import Faq from "@/components/site/Faq";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppFab from "@/components/site/WhatsAppFab";

const Index = () => (
  <>
    <a href="#contato" className="skip-link">Pular para o contato</a>
    <Header />
    <main>
      <Hero />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <Commitments />
      <Faq />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFab />
  </>
);

export default Index;
