import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";
export const ContactoSection = () => {
  return <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground px-4">
            ¿Tienes
            <span className="text-gradient"> dudas?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos aquí para ayudarte. Contáctanos y te responderemos lo más pronto posible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Información de contacto con imagen FAQ */}
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl flex items-center justify-center">
              <img src="/lovable-uploads/FQ.png" alt="FAQ Icon" className="w-full h-full object-contain max-h-64 sm:max-h-80 lg:max-h-96" />
            </div>
          </div>
          
          {/* Preguntas frecuentes */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Preguntas Frecuentes</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">¿SaveMoney es gratis?</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Sí, la descarga y las funciones básicas son completamente gratuitas. Tenemos funciones premium opcionales.</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">¿Necesito conectar mi cuenta bancaria?</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">No, puedes usar SaveMoney sin conectar ninguna cuenta bancaria. Está diseñada para quienes manejan efectivo.</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">¿Mis datos están seguros?</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Absolutamente. Usamos encriptación de nivel bancario y nunca compartimos tu información personal.</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">¿Está disponible para iPhone y Android?</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Sí, SaveMoney está disponible tanto en App Store como en Google Play Store.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-hero rounded-2xl p-6 sm:p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">¿No encontraste lo que buscabas?</h3>
            <p className="text-lg sm:text-xl text-white/90 mb-4 sm:mb-6">Regístrate con nosotras y te enviaremos un correo a la brevedad</p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Escribir un email
            </Button>
          </div>
        </div>
      </div>
    </section>;
};