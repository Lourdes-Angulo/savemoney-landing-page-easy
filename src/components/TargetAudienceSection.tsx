
import { Card, CardContent } from "@/components/ui/card";

const audiences = [
  {
    title: "Jóvenes",
    description: "Estudiantes y recién graduados que quieren empezar a controlar sus gastos sin complicaciones.",
    emoji: "🎓"
  },
  {
    title: "Trabajadores Informales", 
    description: "Freelancers, vendedores ambulantes y trabajadores por días que manejan efectivo.",
    emoji: "💼"
  },
  {
    title: "Emprendedores",
    description: "Dueños de pequeños negocios que necesitan separar gastos personales de los del negocio.",
    emoji: "🚀"
  },
  {
    title: "Amas de Casa",
    description: "Quienes administran el presupuesto familiar y quieren optimizar los gastos del hogar.",
    emoji: "🏠"
  }
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Perfecta para
            <span className="text-gradient"> personas como tú</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SaveMoney está diseñada para adaptarse a tu estilo de vida, sin importar cómo manejes tu dinero.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in group"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {audience.emoji}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{audience.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿Te identificas con alguno?</h3>
            <p className="text-xl text-white/90 mb-6">
              No importa cuál sea tu situación, SaveMoney se adapta a ti.
            </p>
            <div className="inline-block bg-white/20 rounded-full px-6 py-3 text-lg font-semibold">
              ¡Descarga gratis y compruébalo!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
