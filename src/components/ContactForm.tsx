import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  workType: string;
  academicLevel: string;
  description: string;
}

const WORK_TYPES = ["TCC", "Artigo Científico", "Projeto Acadêmico", "Relatório", "Revisão e Normalização", "Outro"];
const ACADEMIC_LEVELS = ["Graduação", "Especialização", "Mestrado", "Doutorado", "Outro"];

const initialForm: FormData = { name: "", email: "", phone: "", workType: "", academicLevel: "", description: "" };

function validateEmail(e: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function validatePhone(p: string) { return /^[\d\s()+-]{10,}$/.test(p); }

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const { toast } = useToast();
  const ref = useScrollReveal<HTMLElement>();

  const set = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched.has(field)) validate({ ...form, [field]: value }, field);
  };

  const touch = (field: keyof FormData) => {
    setTouched((prev) => new Set(prev).add(field));
    validate(form, field);
  };

  const validate = (data: FormData, field?: keyof FormData) => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!field || field === "name") { if (!data.name.trim()) e.name = "Nome é obrigatório."; }
    if (!field || field === "email") { if (!data.email.trim()) e.email = "Email é obrigatório."; else if (!validateEmail(data.email)) e.email = "Email inválido."; }
    if (!field || field === "phone") { if (!data.phone.trim()) e.phone = "Telefone é obrigatório."; else if (!validatePhone(data.phone)) e.phone = "Telefone inválido."; }
    if (!field || field === "workType") { if (!data.workType) e.workType = "Selecione o tipo de trabalho."; }
    if (!field || field === "description") { if (!data.description.trim()) e.description = "Descrição é obrigatória."; else if (data.description.trim().length < 20) e.description = "Mínimo de 20 caracteres."; }
    if (field) {
      setErrors((prev) => ({ ...prev, [field]: e[field] || undefined }));
    } else {
      setErrors(e);
    }
    return e;
  };

  const isValid = form.name.trim() && validateEmail(form.email) && validatePhone(form.phone) && form.workType && form.description.trim().length >= 20;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allErrors = validate(form);
    setTouched(new Set(Object.keys(form)));
    if (Object.keys(allErrors).length > 0) return;

    const msg = `Olá! Meu nome é ${form.name}. Preciso de apoio acadêmico em: ${form.workType}. Nível: ${form.academicLevel || "Não informado"}. Detalhes: ${form.description}. Email: ${form.email}. Telefone: ${form.phone}.`;
    const url = `https://wa.me/55619621262?text=${encodeURIComponent(msg)}`;

    toast({ title: "Redirecionando para o WhatsApp...", description: "Aguarde um momento." });
    setTimeout(() => window.open(url, "_blank"), 1500);
  };

  const inputClass = (field: keyof FormData) =>
    `w-full rounded-lg border px-4 py-3 md:py-3 text-sm font-body bg-background text-foreground transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent/30 ${
      errors[field] && touched.has(field) ? "border-destructive" : "border-input"
    }`;

  return (
    <section id="contato" className="bg-background py-20 md:py-28 px-4 md:px-6" aria-labelledby="contact-title" ref={ref}>
      <div className="container mx-auto max-w-3xl scroll-reveal">
        <h2 id="contact-title" className="font-display text-2xl md:text-4xl text-primary text-center text-balance">
          Solicite Sua Orientação Acadêmica Personalizada
        </h2>
        <p className="mt-3 text-center text-muted-foreground font-body text-sm">Responderemos em até 2 horas úteis</p>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5" noValidate>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-primary mb-1.5">Nome Completo *</label>
            <input id="name" type="text" className={inputClass("name")} value={form.name} onChange={(e) => set("name", e.target.value)} onBlur={() => touch("name")} aria-required="true" aria-describedby={errors.name ? "name-error" : undefined} maxLength={100} />
            {errors.name && touched.has("name") && <p id="name-error" className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-primary mb-1.5">Email *</label>
            <input id="email" type="email" className={inputClass("email")} value={form.email} onChange={(e) => set("email", e.target.value)} onBlur={() => touch("email")} aria-required="true" aria-describedby={errors.email ? "email-error" : undefined} maxLength={255} />
            {errors.email && touched.has("email") && <p id="email-error" className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-primary mb-1.5">Telefone (WhatsApp) *</label>
            <input id="phone" type="tel" placeholder="+55 61 99999-9999" className={inputClass("phone")} value={form.phone} onChange={(e) => set("phone", e.target.value)} onBlur={() => touch("phone")} aria-required="true" aria-describedby={errors.phone ? "phone-error" : undefined} />
            {errors.phone && touched.has("phone") && <p id="phone-error" className="text-destructive text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Work Type */}
          <div>
            <label htmlFor="workType" className="block text-sm font-bold text-primary mb-1.5">Tipo de Trabalho *</label>
            <select id="workType" className={inputClass("workType")} value={form.workType} onChange={(e) => set("workType", e.target.value)} onBlur={() => touch("workType")} aria-required="true">
              <option value="">Selecione...</option>
              {WORK_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.workType && touched.has("workType") && <p className="text-destructive text-xs mt-1">{errors.workType}</p>}
          </div>

          {/* Academic Level */}
          <div>
            <label htmlFor="academicLevel" className="block text-sm font-bold text-primary mb-1.5">Nível Acadêmico</label>
            <select id="academicLevel" className={inputClass("academicLevel")} value={form.academicLevel} onChange={(e) => set("academicLevel", e.target.value)}>
              <option value="">Selecione...</option>
              {ACADEMIC_LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-bold text-primary mb-1.5">Descrição da Demanda *</label>
            <textarea id="description" rows={4} className={inputClass("description")} value={form.description} onChange={(e) => set("description", e.target.value)} onBlur={() => touch("description")} aria-required="true" aria-describedby={errors.description ? "desc-error" : undefined} placeholder="Descreva brevemente o que precisa (mínimo 20 caracteres)" maxLength={1000} />
            {errors.description && touched.has("description") && <p id="desc-error" className="text-destructive text-xs mt-1">{errors.description}</p>}
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center">
            <Button type="submit" variant="default" size="xl" className={`rounded-full px-8 transition-all duration-300 ${isValid ? "hover:scale-105 hover:shadow-[0_0_16px_hsl(var(--accent)/0.4)]" : "opacity-60 cursor-not-allowed"}`} disabled={!isValid}>
              Enviar para WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
