
import { Button } from "@/components/ui/button";
import { Smartphone, Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Controla tu dinero
                <span className="block text-accent"> sin complicaciones</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                SaveMoney es la app que necesitas para saber en qué se te va la plata. 
                Fácil, rápida y sin necesidad de cuenta bancaria.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg">
                <Smartphone className="mr-2 h-5 w-5" />
                Descargar Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg">
                Ver Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white/90">4.8/5 en las tiendas de apps</span>
            </div>
          </div>
          
          {/* Phone mockup */}
          <div className="flex justify-center animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="w-80 h-[600px] bg-white rounded-[3rem] p-4 shadow-2xl animate-float">
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-[2.5rem] p-8 flex flex-col justify-between">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-4">SaveMoney</h3>
                    <div className="space-y-4">
                      <div className="bg-white/20 rounded-xl p-4">
                        <p className="text-sm opacity-90">Balance Total</p>
                        <p className="text-3xl font-bold">$125,450</p>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-white/20 rounded-lg p-3 flex justify-between">
                          <span>Café</span>
                          <span>-$3,500</span>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3 flex justify-between">
                          <span>Transporte</span>
                          <span>-$8,000</span>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3 flex justify-between">
                          <span>Almuerzo</span>
                          <span>-$12,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-1 bg-white/30 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
