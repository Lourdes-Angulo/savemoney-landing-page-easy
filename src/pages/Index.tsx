
import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { InicioSection } from "@/components/InicioSection";
import { ConsejosFinancierosSection } from "@/components/ConsejosFinancierosSection";
import { PlanesSection } from "@/components/PlanesSection";
import { ContactoSection } from "@/components/ContactoSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isLoading, setIsLoading] = useState(false);

  // Handle section changes with loading state for better mobile experience
  const handleSectionChange = (section: string) => {
    if (section === activeSection) return;
    
    setIsLoading(true);
    setActiveSection(section);
    
    // Simulate loading for smooth transitions on mobile
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      // Close mobile menu on resize if screen becomes large
      if (window.innerWidth >= 768) {
        // Mobile menu will be automatically hidden by CSS
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderSection = () => {
    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-primary"></div>
        </div>
      );
    }

    switch (activeSection) {
      case 'inicio':
        return <InicioSection />;
      case 'consejos':
        return <ConsejosFinancierosSection />;
      case 'planes':
        return <PlanesSection />;
      case 'contacto':
        return <ContactoSection />;
      default:
        return <InicioSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main className="transition-opacity duration-300 ease-in-out">
        {renderSection()}
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
