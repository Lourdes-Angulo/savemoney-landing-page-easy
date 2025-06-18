import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";
export const ContactoSection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            ¿Tienes
            <span className="text-gradient"> dudas?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y te responderemos lo más pronto posible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto con imagen FAQ */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-32 h-32 flex items-center justify-center">
              <img src="/lovable-uploads/9609de6b-468b-4fd1-8184-5f61be9028fe.png" alt="FAQ Icon" className="w-full h-full object-contain" />
            </div>
            <div className="text-center space-y-4">
              
              
            </div>
          </div>
          
          {/* Preguntas frecuentes */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Preguntas Frecuentes</h3>
            
            <div className="space-y-4">
              <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">¿SaveMoney es gratis?</h4>
                  <p className="text-muted-foreground">Sí, la descarga y las funciones básicas son completamente gratuitas. Tenemos funciones premium opcionales.</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">¿Necesito conectar mi cuenta bancaria?</h4>
                  <p className="text-muted-foreground">No, puedes usar SaveMoney sin conectar ninguna cuenta bancaria. Está diseñada para quienes manejan efectivo.</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">¿Mis datos están seguros?</h4>
                  <p className="text-muted-foreground">Absolutamente. Usamos encriptación de nivel bancario y nunca compartimos tu información personal.</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">¿Está disponible para iPhone y Android?</h4>
                  <p className="text-muted-foreground">Sí, SaveMoney está disponible tanto en App Store como en Google Play Store.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿No encontraste lo que buscabas?</h3>
            <p className="text-xl text-white/90 mb-6">
              Escríbenos directamente y te ayudaremos con cualquier duda que tengas.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Mail className="mr-2 h-5 w-5" />
              Escribir un email
            </Button>
          </div>
        </div>
      </div>
    </section>;
};