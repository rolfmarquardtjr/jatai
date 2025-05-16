
import { useEffect, useRef } from 'react';
import { 
  Cpu, 
  LineChart, 
  Network, 
  Bot
} from "lucide-react";

const solutionItems = [
  {
    icon: Cpu,
    title: "Automação de Processos",
    description: "Utilizamos IA para automatizar tarefas administrativas e operacionais, reduzindo a intervenção manual e otimizando recursos empresariais.",
  },
  {
    icon: LineChart,
    title: "Análise Preditiva",
    description: "Implementação de sistemas que identificam padrões e antecipam problemas, garantindo manutenção proativa e continuidade operacional.",
  },
  {
    icon: Network,
    title: "Integração com Sistemas",
    description: "Nossas soluções se conectam diretamente com ERPs, CRMs e bancos de dados, mantendo a fluidez dos processos internos.",
  },
  {
    icon: Bot,
    title: "Agentes Inteligentes",
    description: "Sistemas que interpretam grandes volumes de dados e oferecem suporte estratégico e operacional para tomada de decisões.",
  }
];

const Solutions = () => {
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
    <section className="py-20 bg-jatai-dark-purple text-white" id="solucoes" ref={elementsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Nossas Soluções</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto reveal">
            Desenvolvemos plataformas autônomas e inteligentes que integram análise de dados, 
            automação e geração de insights preditivos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {solutionItems.map((item, index) => (
            <div 
              key={index} 
              className="glass-card p-6 h-full flex flex-col reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-jatai-purple/20 p-3 rounded-lg w-fit mb-4">
                <item.icon className="w-6 h-6 text-jatai-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 flex-grow">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-jatai-purple/10 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" 
              alt="Soluções Jatai.AI" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">O que fazemos</h2>
            <p className="text-lg text-gray-300 mb-6">
              Criamos plataformas autônomas e inteligentes que integram análise de dados, 
              automação de tarefas repetitivas e geração de insights preditivos, sempre com 
              foco em eficiência e redução de custos.
            </p>
            <p className="text-lg text-gray-300">
              Nossos sistemas são projetados para se adaptar a diferentes setores empresariais, 
              garantindo flexibilidade e personalização conforme as demandas específicas de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
