import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BeeParticles from "./BeeParticles";

const Hero = () => {
  const elementsRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="min-h-screen bg-gradient-to-b from-jatai-dark-gray to-jatai-gray flex items-center pt-16 relative overflow-hidden" id="hero" ref={elementsRef}>
      <BeeParticles />
      <div className="container mx-auto px-4 pt-16 md:pt-24 pb-8 md:pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 reveal text-jatai-light-gray">
              Transforme sua empresa com <span className="text-jatai-yellow">Inteligência Artificial</span>
            </h1>
            <p className="text-xl md:text-2xl text-jatai-medium-gray mb-8 reveal">
              Desenvolvemos soluções tecnológicas baseadas em IA que otimizam processos empresariais e criam vantagem competitiva para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 reveal">
              <Button asChild className="bg-jatai-yellow hover:bg-jatai-yellow-accent text-jatai-dark-gray px-8 py-6">
                <a href="#contato">
                  Fale com nossos especialistas
                </a>
              </Button>
              <Button asChild variant="outline" className="border-jatai-yellow text-jatai-yellow hover:bg-jatai-yellow-hover px-8 py-6">
                <a href="#solucoes" className="flex items-center">
                  Conheça nossas soluções
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-12 -left-12 w-36 h-36 bg-jatai-yellow/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-jatai-yellow/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 reveal">
                <div className="animate-float">
                  <div className="bg-gradient-to-br from-jatai-gray/40 to-jatai-dark-gray/60 rounded-full p-8 backdrop-blur-sm">
                    <img
                      src="/lovable-uploads/e5ba509f-7c5d-4c80-89b0-6fa4c9ef7572.png"
                      alt="Logo Jatai.AI"
                      className="w-full h-auto max-w-[360px] mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
