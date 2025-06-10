
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { InicioSection } from "@/components/InicioSection";
import { ConsejosFinancierosSection } from "@/components/ConsejosFinancierosSection";
import { ContactoSection } from "@/components/ContactoSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <InicioSection />;
      case 'consejos':
        return <ConsejosFinancierosSection />;
      case 'contacto':
        return <ContactoSection />;
      default:
        return <InicioSection />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="pt-0">
        {renderSection()}
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
