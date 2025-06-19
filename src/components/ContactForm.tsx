
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail } from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
}

interface ContactFormProps {
  trigger: React.ReactNode;
}

export const ContactForm = ({ trigger }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.firstName || !formData.lastName) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Crear el asunto y cuerpo del email
      const subject = encodeURIComponent("Solicitud de información sobre SaveMoney");
      const body = encodeURIComponent(`Hola!

Me interesa SaveMoney y quiero más información.

Mis datos:
• Nombre: ${formData.firstName}
• Apellido: ${formData.lastName}

Fecha: ${new Date().toLocaleString('es-ES')}

Saludos cordiales.`);

      // Crear el link de email
      const emailUrl = `mailto:abigailfm04@gmail.com?subject=${subject}&body=${body}`;
      
      // Abrir el cliente de email
      window.location.href = emailUrl;

      toast({
        title: "¡Formulario enviado!",
        description: "Se ha abierto tu cliente de email para enviar el mensaje.",
      });

      // Limpiar formulario y cerrar modal
      setFormData({
        firstName: "",
        lastName: ""
      });
      setIsOpen(false);

    } catch (error) {
      console.error("Error al enviar formulario:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu solicitud. Intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Más Información sobre SaveMoney
          </DialogTitle>
          <DialogDescription>
            Completa el formulario y te contactaremos por email
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nombre *</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Tu nombre"
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={isLoading}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido *</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Tu apellido"
                value={formData.lastName}
                onChange={handleInputChange}
                disabled={isLoading}
                required
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar por Email
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              disabled={isLoading}
            >
              Cancelar
            </Button>
          </div>
        </form>
        <p className="text-xs text-muted-foreground mt-2">
          * Campos obligatorios. Te contactaremos por email a la brevedad.
        </p>
      </DialogContent>
    </Dialog>
  );
};
