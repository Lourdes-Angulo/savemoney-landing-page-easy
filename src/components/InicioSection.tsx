
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Smartphone, CircleDollarSign, Heart, Star, Smartphone as SmartphoneIcon } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Súper Rápido",
    description: "Registra tus gastos en segundos. Solo lo esencial, nada de formularios complicados."
  },
  {
    icon: Smartphone,
    title: "Sin Cuentas Bancarias",
    description: "No necesitas conectar ninguna cuenta. Perfecto para quienes manejan efectivo."
  },
  {
    icon: CircleDollarSign,
    title: "Control Total",
    description: "Ve exactamente en qué se te va la plata con reportes claros y fáciles de entender."
  },
  {
    icon: Heart,
    title: "Hecho para Ti",
    description: "Diseñado especialmente para jóvenes, trabajadores informales y emprendedores."
  }
];

const testimonials = [
  {
    name: "María González",
    role: "Estudiante Universitaria",
    content: "Antes no sabía en qué se me iba la plata de la semana. Con SaveMoney ahora puedo ahorrar para mis proyectos.",
    rating: 5
  },
  {
    name: "Carlos Ruiz",
    role: "Vendedor Independiente",
    content: "Perfecto para los que manejamos efectivo. No necesito conectar cuentas bancarias ni nada complicado.",
    rating: 5
  }
];

export const InicioSection = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in">
              Controla tu dinero
              <span className="block text-accent">sin complicaciones</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              La app móvil más fácil para saber en qué se te va la plata. Sin complicaciones, sin cuentas bancarias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg">
                <SmartphoneIcon className="mr-2 h-5 w-5" />
                Descargar para iOS
              </Button>
              <Button size="lg" className="bg-white/20 text-white hover:bg-white/30 font-semibold px-8 py-4 text-lg border-2 border-white/30">
                <SmartphoneIcon className="mr-2 h-5 w-5" />
                Descargar para Android
              </Button>
            </div>
            <p className="text-white/70">Descarga gratuita • Sin registros complicados • Empieza en segundos</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Features Section */}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Lo que dicen
              <span className="text-gradient"> nuestros usuarios</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Miles de personas ya están controlando mejor su dinero con SaveMoney.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-3">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <span className="font-semibold text-foreground">4.8/5 estrellas en las tiendas de apps</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
