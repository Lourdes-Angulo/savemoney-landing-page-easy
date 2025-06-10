
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'consejos', label: 'Consejos Financieros' },
    { id: 'contacto', label: 'FQA/Contacto' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 text-white border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/d6167398-11e7-468f-a49a-f876855a97ce.png" 
              alt="SaveMoney Logo" 
              className="h-8 w-8 mr-3"
            />
            <span className="text-xl font-bold">SaveMoney</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`font-medium hover:text-blue-400 transition-colors ${
                  activeSection === section.id ? 'text-blue-400' : 'text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <Button 
            onClick={() => onSectionChange('contacto')}
            className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-800 font-medium rounded-full px-6"
          >
            Contáctenos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
