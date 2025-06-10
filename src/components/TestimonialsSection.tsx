
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
  },
  {
    name: "Ana Martínez",
    role: "Freelancer",
    content: "Me ayuda a separar mis gastos personales de los del trabajo. Súper fácil de usar y muy práctica.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
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
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
  );
};
