
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'consejos', label: 'Consejos Financieros' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-gradient">SaveMoney</div>
          <div className="flex space-x-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
                onClick={() => onSectionChange(section.id)}
                className="font-medium"
              >
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
