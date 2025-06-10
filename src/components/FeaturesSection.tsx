
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Smartphone, CircleDollarSign, Heart } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Súper Rápido",
    description: "Registra tus gastos en segundos. Solo lo esencial, nada de formularios complicados."
  },
  {
    icon: Smartphone,
    title: "Sin Cuentas Bancarias",
    description: "No necesitas conectar ninguna cuenta. Perfecto para quienes manejan efectivo o no tienen cuenta bancaria."
  },
  {
    icon: CircleDollarSign,
    title: "Control Total",
    description: "Ve exactamente en qué se te va la plata con reportes claros y fáciles de entender."
  },
  {
    icon: Heart,
    title: "Hecho para Ti",
    description: "Diseñado especialmente para jóvenes, trabajadores informales y emprendedores como tú."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            ¿Por qué elegir 
            <span className="text-gradient"> SaveMoney</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Porque entendemos que necesitas algo simple, rápido y que realmente funcione en tu día a día.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
