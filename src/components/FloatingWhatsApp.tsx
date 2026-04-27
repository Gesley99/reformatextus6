import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

<<<<<<< HEAD
const WA_LINK = "https://wa.me/556196212692?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20orienta%C3%A7%C3%A3o%20acad%C3%AAmica%20da%20Textus.%20Obrigado!";
=======
const WA_LINK = "https://wa.me/556196212692?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20apoio%20acad%C3%AAmico%20Textus.%20Obrigado!";
>>>>>>> 046218b01546855bc85d478cbc589878f54830ad

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
      {hover && (
        <div className="absolute bottom-full right-0 mb-2 bg-foreground text-background text-xs font-body rounded-md px-3 py-1.5 whitespace-nowrap animate-fade-rise shadow-lg">
          Fale conosco no WhatsApp
        </div>
      )}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-bounce-in block w-14 h-14 md:w-[60px] md:h-[60px] rounded-full bg-whatsapp hover:bg-whatsapp-hover flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] animate-pulse-scale active:scale-95 transition-all duration-200"
        aria-label="Conversar no WhatsApp"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <MessageCircle className="text-primary-foreground" size={28} />
      </a>
    </div>
  );
}
