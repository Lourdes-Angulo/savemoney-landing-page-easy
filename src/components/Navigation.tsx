
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
    { id: 'contacto', label: 'FQA/Contacto' }
  ];

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 text-white border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/d6167398-11e7-468f-a49a-f876855a97ce.png" 
              alt="SaveMoney Logo" 
              className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3"
            />
            <span className="text-lg sm:text-xl font-bold">SaveMoney</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`font-medium hover:text-blue-400 transition-colors text-sm lg:text-base ${
                  activeSection === section.id ? 'text-blue-400' : 'text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <Button 
            onClick={() => onSectionChange('contacto')}
            className="hidden md:flex bg-transparent border border-white text-white hover:bg-white hover:text-gray-800 font-medium rounded-full px-4 lg:px-6 text-sm lg:text-base"
          >
            <span className="hidden lg:inline">Contáctenos</span>
            <span className="lg:hidden">Contacto</span>
            <ArrowRight className="ml-1 lg:ml-2 h-3 w-3 lg:h-4 lg:w-4" />
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionChange(section.id)}
                  className={`text-left font-medium hover:text-blue-400 transition-colors py-2 ${
                    activeSection === section.id ? 'text-blue-400' : 'text-white'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <Button 
                onClick={() => handleSectionChange('contacto')}
                className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-800 font-medium rounded-full px-6 py-2 mt-4 self-start"
              >
                Contáctenos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
