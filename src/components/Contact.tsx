import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// Select components and MessageCircle removed since the simplified form no longer needs them

const Contact = () => {
  // Simplified form data for name, phone and message
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /**
   * When the user submits the contact form we redirect them to WhatsApp with a
   * pre‑filled message. This avoids collecting any data on our site and
   * facilitates a direct conversation, cumprindo as políticas de anúncios do
   * Google. The message contains the name, telefone e a descrição da
   * necessidade, separados por quebras de linha. Caso algum campo esteja
   * vazio, ele será omitido da mensagem.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    const parts: string[] = [];
    if (name) parts.push(`Nome: ${name}`);
    if (phone) parts.push(`Telefone: ${phone}`);
    if (message) parts.push(`Necessidade: ${message}`);
    const text = encodeURIComponent(parts.join("\n"));
    // Link de WhatsApp com código de país brasileiro (55) e DDD 61
    const url = `https://wa.me/556196212692?text=${text}`;
    // Redireciona diretamente sem pop-up de alerta
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Entre em <span className="gradient-primary bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Pronto para dar o próximo passo em sua jornada acadêmica?
            Nossa equipe está aqui para orientar e esclarecer todas as suas dúvidas.
          </p>
        </div>

        {/* Form container (único card) */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant border border-border rounded-xl">
            <CardHeader>
              {/* Título convidativo */}
              <CardTitle className="text-2xl">Conte-nos sobre seu projeto</CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Campo Nome */}
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    className="focus:ring-2 focus:ring-primary"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                {/* Campo Telefone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(DDD) 99999-9999"
                    className="focus:ring-2 focus:ring-primary"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
                {/* Campo Mensagem */}
                <div className="space-y-2">
                  <Label htmlFor="message">Descreva seu projeto ou dúvida</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Explique brevemente como podemos ajudar"
                    className="min-h-[160px] resize-y focus:ring-2 focus:ring-primary"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                  />
                </div>
                {/* Botão */}
                <div className="pt-2">
                  <Button type="submit" variant="hero" className="w-full text-lg py-3">
                    Enviar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
