export const CONTACT = {
  email: "textuscademico@gmail.com",
  phoneDisplay: "+55 61 99621-2692",
  phoneHref: "tel:+5561996212692",
  waNumber: "5561996212692",
  instagram: "https://instagram.com/textusacademico",
  facebook: "https://www.facebook.com/profile.php?id=61580266383775&locale=pt_BR",
};

export const waLink = (msg = "Olá! Gostaria de saber mais sobre a orientação acadêmica da Textus.") =>
  `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(msg)}`;

export const scrollToId = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
