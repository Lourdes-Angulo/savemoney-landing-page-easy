
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  trigger: React.ReactNode;
}

export const ContactForm = ({ trigger }: ContactFormProps) => {
  const handleRedirect = () => {
    window.open('https://forms.gle/LX8X5ed16wVHEsL17', '_blank');
  };

  return (
    <div onClick={handleRedirect} className="cursor-pointer">
      {trigger}
    </div>
  );
};
