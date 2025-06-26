import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
export const PlanesSection = () => {
  const handleRegistroClick = () => {
    window.open('https://forms.gle/LX8X5ed16wVHEsL17', '_blank');
  };
  const planes = [{
    nombre: "Plan Free",
    precio: "0.00",
    caracteristicas: ["Registro Manualmente de ingresos y gastos", "Registro por voz y foto limitado", "Gráfico mensual", "Categorías básicas", "Retos y recordatorios limitados"],
    boton: "Estás en este plan",
    esGratuito: true,
    destacado: false
  }, {
    nombre: "Plan Premium",
    precio: "14.90",
    caracteristicas: ["Registro Manualmente de ingresos y gastos", "Registro por voz y foto ilimitado", "Gráfico mensual y pdf de reportes", "Categorías básicas", "Retos y recordatorios ilimitados"],
    boton: "Adquirir ahora",
    esGratuito: false,
    destacado: true
  }];
  return <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground px-4">
            Nuestros
            <span className="text-gradient"> Planes</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Elige el plan que mejor se adapte a tus necesidades financieras
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {planes.map((plan, index) => <Card key={index} className={`relative border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${plan.destacado ? 'border-primary/50 bg-gradient-card' : 'border-border hover:border-primary/30'}`}>
              {plan.destacado && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-hero text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recomendado
                  </span>
                </div>}
              
              <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                {/* Header del plan */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {plan.nombre}
                  </h3>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-3xl sm:text-4xl font-bold text-foreground">
                      S/. {plan.precio}
                    </span>
                    <span className="text-lg text-muted-foreground">por</span>
                  </div>
                  <p className="text-lg text-muted-foreground">Mes</p>
                </div>

                {/* Lista de características */}
                <div className="space-y-3 sm:space-y-4">
                  {plan.caracteristicas.map((caracteristica, idx) => <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm sm:text-base text-foreground leading-relaxed">
                        {caracteristica}
                      </p>
                    </div>)}
                </div>

                {/* Botón de acción */}
                <div className="pt-4">
                  
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Llamada a la acción adicional */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-hero rounded-2xl p-6 sm:p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              ¿Tienes dudas sobre nuestros planes?
            </h3>
            <p className="text-lg sm:text-xl text-white/90 mb-4 sm:mb-6">
              Contáctanos y te ayudaremos a elegir el plan perfecto para ti
            </p>
            <Button onClick={handleRegistroClick} className="bg-white text-primary hover:bg-white/90 font-semibold">
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </section>;
};