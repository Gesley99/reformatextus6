import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />

        {/* Seção de Suporte Contínuo */}
        <section className="relative py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="/images/suporte-continuo.jpg"
              alt="Suporte Contínuo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Nosso suporte é contínuo, com orientações personalizadas e acompanhamento dedicado
              para garantir que você tenha clareza, estrutura e segurança em cada etapa até a entrega final.
            </h3>
            <a
              href="https://wa.me/61996212692"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-500 hover:bg-green-600 transition-colors duration-300"
            >
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M27.6 14.8c0 6.6-5.4 12-12.1 12-2.1 0-4.1-.5-5.8-1.5L4 27.9l1.7-5.6c-1.1-1.9-1.7-4.1-1.7-6.5 0-6.6 5.4-12 12.1-12s12.1 5.4 12.1 12zM15.5 4.6C9.8 4.6 5.1 9.3 5.1 15c0 2.3.7 4.4 1.9 6.1l-1.2 3.8 3.9-1.2c1.6 1.1 3.6 1.7 5.8 1.7 5.6 0 10.3-4.7 10.3-10.4S21.1 4.6 15.5 4.6z"
                />
                <path
                  fill="currentColor"
                  d="M20 17.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.4-.2-1.5-.6-2.8-1.8-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.6.1-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.4-.3-.7-.5-.6-.7-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8 0 1.6 1.2 3.1 1.4 3.3.2.2 2.4 3.6 5.7 5.1.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 2-.8 2.3-1.6.3-.8.3-1.4.2-1.6 0-.1-.2-.1-.5-.3z"
                />
              </svg>
              Entrar em Contato Agora!
            </a>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
