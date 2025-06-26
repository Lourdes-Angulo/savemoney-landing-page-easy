
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'consejos', label: 'Consejos Financieros' },
    { id: 'planes', label: 'Planes' },
    { id: 'contacto', label: 'FAQ/Contacto' }
  ];

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsMobileMenuOpen(false);
    // Scroll to top for better mobile experience
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 text-white border-b border-gray-700 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo - Responsive sizing */}
          <div className="flex items-center cursor-pointer" onClick={() => handleSectionChange('inicio')}>
            <img 
              src="/lovable-uploads/d6167398-11e7-468f-a49a-f876855a97ce.png" 
              alt="SaveMoney Logo" 
              className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-bold">SaveMoney</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={`font-medium hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base px-3 py-2 rounded-md ${
                  activeSection === section.id 
                    ? 'text-blue-400 bg-blue-400/10' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <Button 
            onClick={() => handleSectionChange('contacto')}
            className="hidden md:flex bg-transparent border border-white text-white hover:bg-white hover:text-gray-800 font-medium rounded-full px-4 lg:px-6 py-2 text-sm lg:text-base transition-all duration-200"
          >
            <span className="hidden lg:inline">Contáctenos</span>
            <span className="lg:hidden">Contacto</span>
            <ArrowRight className="ml-1 lg:ml-2 h-3 w-3 lg:h-4 lg:w-4" />
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-80 opacity-100 py-4 border-t border-gray-700' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={`text-left font-medium transition-colors duration-200 py-3 px-4 rounded-md ${
                  activeSection === section.id 
                    ? 'text-blue-400 bg-blue-400/10' 
                    : 'text-white hover:text-blue-400 hover:bg-white/10'
                }`}
              >
                {section.label}
              </button>
            ))}
            <Button 
              onClick={() => handleSectionChange('contacto')}
              className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-800 font-medium rounded-full px-6 py-3 mt-4 self-start transition-all duration-200"
            >
              Contáctenos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
