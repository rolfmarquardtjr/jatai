import { useEffect, useRef } from 'react';

const Footer = () => {
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
    <footer className="bg-jatai-dark-gray text-jatai-light-gray py-12" ref={elementsRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="reveal">
            <a href="#" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-jatai-light-gray">
                Jatai<span className="text-jatai-yellow">.AI</span>
              </span>
            </a>
            <p className="text-jatai-light-gray mb-4">
              Transformando operações empresariais complexas em processos inteligentes e otimizados.
            </p>
          </div>

          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-lg font-semibold mb-4">Links Rápidos</h2>
            <ul className="space-y-2">
              <li>
                <a href="#o-que-fazemos" className="text-jatai-light-gray hover:text-jatai-yellow transition-colors duration-200">O que fazemos</a>
              </li>
              <li>
                <a href="#solucoes" className="text-jatai-light-gray hover:text-jatai-yellow transition-colors duration-200">Nossas soluções</a>
              </li>
              <li>
                <a href="#diferenciais" className="text-jatai-light-gray hover:text-jatai-yellow transition-colors duration-200">Diferenciais</a>
              </li>
              <li>
                <a href="#contato" className="text-jatai-light-gray hover:text-jatai-yellow transition-colors duration-200">Contato</a>
              </li>
            </ul>
          </div>

          <div className="reveal" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-lg font-semibold mb-4">Soluções</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-jatai-light-gray hover:text-jatai-yellow transition-colors duration-200">Automação de Processos</a>
              </li>
              <li>
                <a href="#" className="text-jatai-light-gray hover:text-jatai-yellow transition-colors duration-200">Análise Preditiva</a>
              </li>
              <li>
                <a href="#" className="text-jatai-light-gray hover:text-jatai-yellow transition-colors duration-200">Integração com Sistemas</a>
              </li>
              <li>
                <a href="#" className="text-jatai-light-gray hover:text-jatai-yellow transition-colors duration-200">Agentes Inteligentes</a>
              </li>
            </ul>
          </div>

          <div className="reveal" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-lg font-semibold mb-4">Contato</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-jatai-yellow">Email:</span>
                <a href="mailto:contato@jatai.tech" className="text-jatai-light-gray hover:text-jatai-yellow transition-colors duration-200">contato@jatai.tech</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-jatai-gray/30 mt-12 pt-8 reveal">
          <p className="text-center text-jatai-light-gray">
            © {new Date().getFullYear()} Jatai.AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
