
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-jatai-dark-purple">
              Jatai<span className="text-jatai-purple">.AI</span>
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#o-que-fazemos" className="text-jatai-dark-purple hover:text-jatai-purple transition-colors duration-200">O que fazemos</a>
          <a href="#solucoes" className="text-jatai-dark-purple hover:text-jatai-purple transition-colors duration-200">Nossas soluções</a>
          <a href="#diferenciais" className="text-jatai-dark-purple hover:text-jatai-purple transition-colors duration-200">Diferenciais</a>
          <Button asChild className="bg-jatai-purple hover:bg-jatai-purple/90">
            <a href="#contato">Contato</a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            className="text-jatai-dark-purple"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#o-que-fazemos" 
              className="text-jatai-dark-purple hover:text-jatai-purple transition-colors duration-200 py-2"
              onClick={toggleMobileMenu}
            >
              O que fazemos
            </a>
            <a 
              href="#solucoes" 
              className="text-jatai-dark-purple hover:text-jatai-purple transition-colors duration-200 py-2"
              onClick={toggleMobileMenu}
            >
              Nossas soluções
            </a>
            <a 
              href="#diferenciais" 
              className="text-jatai-dark-purple hover:text-jatai-purple transition-colors duration-200 py-2"
              onClick={toggleMobileMenu}
            >
              Diferenciais
            </a>
            <Button asChild className="bg-jatai-purple hover:bg-jatai-purple/90 w-full">
              <a href="#contato" onClick={toggleMobileMenu}>Contato</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
