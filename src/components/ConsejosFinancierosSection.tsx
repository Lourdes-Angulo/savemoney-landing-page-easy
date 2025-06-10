
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, PiggyBank, TrendingUp, Calculator } from "lucide-react";

const consejos = [
  {
    icon: PiggyBank,
    titulo: "Regla del 50/30/20",
    descripcion: "Destina 50% de tus ingresos a gastos necesarios, 30% a gustos y 20% al ahorro.",
    detalle: "Esta regla te ayuda a mantener un equilibrio entre vivir bien hoy y asegurar tu futuro financiero."
  },
  {
    icon: Calculator,
    titulo: "Registra todos tus gastos",
    descripcion: "Anota cada peso que gastes durante una semana completa.",
    detalle: "Te sorprenderás de dónde se va tu dinero. Este es el primer paso para tomar control."
  },
  {
    icon: TrendingUp,
    titulo: "Ahorra antes de gastar",
    descripcion: "Apenas recibas dinero, separa inmediatamente tu ahorro.",
    detalle: "Si esperas a ahorrar lo que te sobre al final del mes, nunca ahorrarás nada."
  },
  {
    icon: Lightbulb,
    titulo: "Elimina gastos hormiga",
    descripcion: "Esos pequeños gastos diarios pueden sumar más de lo que imaginas.",
    detalle: "Un café de $5 diario son $150 al mes y $1,800 al año. ¿Vale la pena?"
  }
];

export const ConsejosFinancierosSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Consejos
            <span className="text-gradient"> Financieros</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tips prácticos y fáciles de aplicar para mejorar tu relación con el dinero desde hoy mismo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {consejos.map((consejo, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <consejo.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{consejo.titulo}</h3>
                <p className="text-lg font-medium text-primary">{consejo.descripcion}</p>
                <p className="text-muted-foreground leading-relaxed">{consejo.detalle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">¿Quieres más consejos personalizados?</h3>
            <p className="text-xl text-white/90 mb-6">
              En SaveMoney no solo registras gastos, también te damos tips basados en tus hábitos de consumo.
            </p>
            <div className="inline-block bg-white/20 rounded-full px-8 py-3 text-lg font-semibold">
              ¡Descarga la app y descúbrelos!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
