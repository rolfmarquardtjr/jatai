
import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import Differentials from "../components/Differentials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Adicionar a funcionalidade de scroll suave para os links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e: Event) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Ajuste para o header fixo
          behavior: 'smooth'
        });
      });
    });
    
    // Inicializar a animação de elementos revelados ao carregar a página
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Solutions />
      <Differentials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
