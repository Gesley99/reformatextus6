import { useEffect, useState } from "react";
import { waLink } from "@/lib/contact";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contato");
      const nearContact = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.6 : false;
      setShow(window.scrollY > 500 && !nearContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp py-3.5 pl-4 pr-5 font-semibold text-white shadow-[0_12px_30px_-8px_rgba(22,140,70,0.6)] transition-all duration-300 hover:bg-whatsapp-hover md:bottom-8 md:right-8 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="text-sm">Fale conosco</span>
    </a>
  );
}
