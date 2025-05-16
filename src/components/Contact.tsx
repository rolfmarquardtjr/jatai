import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const elementsRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    if (elementsRef.current) {
      const elements = elementsRef.current.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }

    return () => {
      if (elementsRef.current) {
        const elements = elementsRef.current.querySelectorAll('.reveal');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio de formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Agradecemos seu contato. Retornaremos em breve.",
      });
      setFormState({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-jatai-very-light-gray" id="contato" ref={elementsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-jatai-dark-gray mb-4 reveal">Fale Conosco</h2>
          <p className="text-lg text-jatai-medium-gray max-w-2xl mx-auto reveal">
            Entre em contato para saber como podemos ajudar a transformar sua empresa
            com nossas soluções de inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-2xl overflow-hidden shadow-lg reveal">
            <div className="bg-jatai-gray p-8">
              <h3 className="text-2xl font-semibold text-jatai-light-gray mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-jatai-yellow/20 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-jatai-yellow" />
                  </div>
                  <div>
                    <p className="text-jatai-light-gray text-sm">Email</p>
                    <p className="text-jatai-light-gray">contato@jatai.tech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg reveal">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envie sua mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 block">Nome completo</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="bg-white border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 block">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="bg-white border-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-700 block">Empresa</label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Nome da sua empresa"
                  value={formState.company}
                  onChange={handleChange}
                  className="bg-white border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 block">Mensagem</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Como podemos ajudar sua empresa?"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="bg-white border-gray-300"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
