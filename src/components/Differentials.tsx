import { useEffect, useRef } from 'react';
import { Check } from "lucide-react";

const differentials = [
  {
    title: "Tecnologia Escalável",
    description: "Nossas plataformas são projetadas para crescer junto com sua empresa, permitindo fácil integração com sistemas existentes."
  },
  {
    title: "Soluções Customizadas",
    description: "Adaptamos as funcionalidades conforme as características específicas do seu setor de atuação."
  },
  {
    title: "Resultados Mensuráveis",
    description: "Foco na entrega de soluções que geram impacto direto nos resultados financeiros e operacionais da sua empresa."
  },
  {
    title: "Suporte Especializado",
    description: "Nossa equipe está pronta para apoiar desde a implementação até o acompanhamento contínuo das soluções."
  }
];

const Differentials = () => {
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
    <section className="py-20 bg-jatai-very-light-gray" id="diferenciais" ref={elementsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-jatai-dark-gray mb-4 reveal">Nossos Diferenciais</h2>
          <p className="text-lg text-jatai-gray max-w-2xl mx-auto reveal">
            O que nos diferencia e faz da Jatai.AI a escolha ideal para sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex gap-4 reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-jatai-yellow rounded-full p-1 h-fit mt-1">
                <Check className="w-5 h-5 text-gray-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative py-16 px-8 bg-gradient-to-r from-jatai-dark-gray to-jatai-gray rounded-3xl shadow-xl overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#FFFFFF" d="M42.7,-65.1C56.9,-55.3,71.2,-45.6,79.1,-31.5C87.1,-17.4,88.8,1.1,83.7,17.1C78.6,33,66.9,46.4,53.2,57.8C39.4,69.2,23.6,78.6,6.9,79.8C-9.8,81,-27.5,74,-41.5,63C-55.5,52,-65.7,37.1,-72.8,19.9C-79.9,2.7,-84,-17,-77.9,-32.6C-71.8,-48.3,-55.5,-60.1,-39.6,-69.1C-23.8,-78.1,-8.3,-84.4,4.4,-81.5C17.1,-78.6,34.1,-66.4,42.7,-65.1Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="relative z-10 text-center text-jatai-light-gray">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-jatai-yellow">Transforme sua operação empresarial</h3>
            <p className="text-xl md:max-w-3xl mx-auto">
              Nosso objetivo é transformar operações empresariais complexas em processos inteligentes e otimizados,
              ajudando sua empresa a alcançar excelência operacional e vantagem competitiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
