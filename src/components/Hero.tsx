
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    <section className="min-h-screen bg-hero-pattern flex items-center pt-16" id="hero" ref={elementsRef}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 reveal">
              Transforme sua empresa com <span className="bg-gradient-to-r from-jatai-purple to-jatai-blue bg-clip-text text-transparent">Inteligência Artificial</span>
            </h1>
            <p className="text-lg md:text-xl text-jatai-gray mb-8 reveal">
              Desenvolvemos soluções tecnológicas baseadas em IA que otimizam processos empresariais e criam vantagem competitiva para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 reveal">
              <Button asChild className="bg-jatai-purple hover:bg-jatai-purple/90 text-white px-8 py-6">
                <a href="#contato">
                  Fale com nossos especialistas
                </a>
              </Button>
              <Button asChild variant="outline" className="border-jatai-purple text-jatai-purple hover:bg-jatai-purple/10 px-8 py-6">
                <a href="#solucoes" className="flex items-center">
                  Conheça nossas soluções
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-jatai-purple/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-jatai-blue/20 rounded-full blur-2xl"></div>
              <div className="relative z-10 reveal">
                <div className="animate-float">
                  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path 
                      fill="#9b87f5" 
                      d="M40,-62.7C54.7,-56.9,71.5,-50.8,79.5,-39.2C87.4,-27.7,86.4,-10.9,82,4.1C77.6,19.1,69.6,32.3,59.5,42.7C49.3,53.1,37,60.6,23.6,65.5C10.2,70.3,-4.5,72.4,-18.8,69.6C-33.1,66.8,-47,59.1,-57.2,48.3C-67.5,37.5,-74.1,23.7,-76.2,9C-78.3,-5.7,-75.8,-21.2,-68.5,-34.1C-61.2,-47,-49,-57.3,-36,-63.5C-22.9,-69.7,-9.1,-71.8,2.7,-76C14.5,-80.3,26.9,-87.7,35.4,-82.3C43.9,-76.9,48.3,-58.7,55.6,-44.3C62.8,-29.9,76.7,-19.3,80.6,-6.3C84.6,6.8,78.6,21.4,72.8,36.7C67,51.9,61.4,67.9,50.3,75.3C39.3,82.7,22.9,81.7,9.4,76.1C-4.2,70.4,-15.1,60.1,-27.4,54.5C-39.7,48.8,-53.3,47.8,-62.2,40.8C-71.1,33.8,-75.3,20.7,-76.2,7.7C-77.2,-5.3,-75,-18.4,-69.1,-29.4C-63.2,-40.3,-53.5,-49.3,-42.2,-55.8C-30.9,-62.3,-17.6,-66.4,-3.3,-62C11,-57.6,22,-68.6,40,-62.7Z" 
                      transform="translate(100 100)" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=300&auto=format&fit=crop" 
                      alt="Tecnologia Jatai.AI" 
                      className="rounded-full w-36 h-36 object-cover border-4 border-white shadow-lg"
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
