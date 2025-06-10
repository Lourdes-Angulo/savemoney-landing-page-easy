import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Star, Users, Shield, Wifi, HeadphonesIcon, Play } from "lucide-react";
const benefits = [{
  icon: Eye,
  title: "Control Total de tus Gastos",
  description: "Registra cada gasto y conoce a dónde va tu dinero de forma sencilla."
}, {
  icon: Star,
  title: "Planifica tus Ahorros",
  description: "Establece metas de ahorro y sigue tu progreso para alcanzar tus objetivos financieros."
}, {
  icon: Users,
  title: "Consejos Personalizados",
  description: "Recibe recomendaciones financieras basadas en tus hábitos y situación económica."
}];
const features = [{
  icon: Wifi,
  title: "Registro Offline",
  description: "Registra tus ingresos y gastos sin necesidad de conexión a internet."
}, {
  icon: Shield,
  title: "Seguridad de Datos",
  description: "Tus datos están seguros y protegidos, incluso cuando no estás conectado."
}, {
  icon: HeadphonesIcon,
  title: "Sincronización Automática",
  description: "Cuando te conectes, tus datos se sincronizarán automáticamente."
}];
const localBenefits = [{
  title: "Fácil de Usar",
  description: "Interfaz intuitiva y amigable, pensada para todos los usuarios."
}, {
  title: "Segura y Confiable",
  description: "Protegemos tu información y garantizamos la confidencialidad de tus datos."
}, {
  title: "Siempre Contigo",
  description: "Soporte técnico y atención personalizada para resolver tus dudas."
}];
const testimonials = [{
  name: "María Rodríguez",
  age: "22 Años, Lima",
  comment: "Con SaveMoney por fin entiendo a dónde se va mi plata. ¡La recomiendo!"
}, {
  name: "Carlos Pérez",
  age: "28 Años, Arequipa",
  comment: "La app es súper fácil de usar y los consejos me han ayudado a ahorrar más."
}];
export const InicioSection = () => {
  return <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch min-h-[600px]">
            {/* Content */}
            <div className="space-y-10 animate-fade-in flex flex-col justify-center">
              <div className="space-y-8">
                <h1 className="text-6xl lg:text-7xl font-black leading-tight text-foreground tracking-tight">
                  Organiza tus
                  <span className="block text-primary">Finanzas con</span>
                  <span className="block text-foreground font-black">SaveMoney</span>
                </h1>
                <div className="space-y-6">
                  <div className="bg-primary/10 border border-primary/20 rounded-2xl px-8 py-4 inline-block">
                    <span className="text-primary font-bold text-lg">Tu aliado financiero en Perú</span>
                  </div>
                  <p className="text-2xl text-muted-foreground leading-relaxed max-w-lg">
                    Descubre una nueva forma de manejar tu dinero con herramientas personalizadas y consejos adaptados a tu realidad.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-4 text-lg rounded-full">
                  Descargar Ahora
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-4 text-lg rounded-full">
                  Más Información
                </Button>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-md">
                La app peruana que te ayuda a controlar tus ingresos y gastos de manera fácil y efectiva. ¡Empieza hoy!
              </p>
            </div>
            
            {/* Image - Full Right Half */}
            <div className="relative w-full h-full min-h-[600px]">
              <img 
                src="/lovable-uploads/e51c1c5b-d9ac-4ebf-8dc3-1f8998fe704a.png" 
                alt="Planificación financiera"
                className="w-full h-full object-cover rounded-2xl shadow-2xl animate-scale-in"
                style={{animationDelay: '0.3s'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-2xl px-6 py-3">
              <span className="text-primary font-bold">Beneficios de SaveMoney</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-foreground max-w-4xl mx-auto leading-tight">
              Descubre lo que puedes lograr
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Simplifica tu vida financiera con nuestra app intuitiva y llena de funcionalidades pensadas para ti.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => <Card key={index} className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in text-center bg-card/50 backdrop-blur-sm" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-10 space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto">
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-muted-foreground font-medium">Compatible con tus métodos de pago favoritos</p>
          </div>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            
            <div className="text-2xl font-bold">Yape</div>
            <div className="text-2xl font-bold">Plin</div>
            <div className="text-2xl font-bold">Tarjeta</div>
            
          </div>
        </div>
      </section>

      {/* Offline Access Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-primary font-semibold">Funciona sin internet</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Accede a tu información en cualquier momento
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Lleva el control de tus finanzas incluso sin conexión. Ideal para zonas rurales o cuando no tienes datos.
                </p>
                <p className="text-muted-foreground">
                  Registra tus gastos, revisa tus presupuestos y mantén tus finanzas al día sin necesidad de estar conectado a internet.
                </p>
              </div>
              
              <div className="space-y-6">
                {features.map((feature, index) => <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <img 
                  src="/lovable-uploads/eccdbadb-71af-4dbe-9d85-66cdef35b27e.png" 
                  alt="Mujer usando calculadora"
                  className="w-full rounded-2xl shadow-2xl animate-scale-in"
                  style={{animationDelay: '0.3s'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Benefits Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-primary-foreground/80 font-semibold">Apoyando la economía local</p>
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Hecha en Perú, Pensada para Ti
                </h2>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Somos una app creada por peruanos, entendemos tus necesidades y te ofrecemos soluciones financieras a tu medida.
                </p>
              </div>
              
              <div className="space-y-6">
                {localBenefits.map((benefit, index) => <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-foreground">{benefit.title}</h4>
                      <p className="text-primary-foreground/80">{benefit.description}</p>
                    </div>
                  </div>)}
              </div>
              
              <Button variant="secondary" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-4 text-lg rounded-full">
                Conoce Nuestra Historia
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <p className="text-muted-foreground">Lo que dicen nuestros usuarios</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in overflow-hidden" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    <div className="space-y-1">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.age}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
    </div>;
};
