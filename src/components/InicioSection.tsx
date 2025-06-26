import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Star, Users, Shield, Wifi, HeadphonesIcon, Play } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

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
const testimonials = [{
  name: "María Rodríguez",
  age: "22 Años, Lima",
  comment: "Con SaveMoney por fin entiendo a dónde se va mi plata. ¡La recomiendo!",
  image: "/lovable-uploads/317c76d7-8815-40c0-b856-2ecce418e337.png"
}, {
  name: "Carlos Pérez",
  age: "28 Años, Arequipa",
  comment: "La app es súper fácil de usar y los consejos me han ayudado a ahorrar más.",
  image: "/lovable-uploads/446f6339-ea62-4293-8eee-2205e0023022.png"
}];
export const InicioSection = () => {
  return <div className="space-y-0">
      {/* Hero Section */}
      <section className="pt-4 sm:pt-8 pb-16 sm:pb-24 lg:pb-32 bg-background relative overflow-hidden">
       <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl">
        
         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]"> 

            {/* Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-fade-in flex flex-col justify-center order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-foreground tracking-tight">
                  Organiza tus
                  <span className="block text-primary">Finanzas con</span>
                  <span className="block text-foreground font-black">SaveMoney</span>
                </h1>
                <div className="space-y-4 sm:space-y-6">
                 <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                    Descubre una nueva forma de manejar tu dinero con herramientas personalizadas y consejos adaptados a tu realidad.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                
                <ContactForm trigger={<Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full w-full sm:w-auto">
                      Más Información
                    </Button>} />
              </div>
              
              <p className="text-base sm:text-lg text-muted-foreground max-w-md">
                La app peruana que te ayuda a controlar tus ingresos y gastos de manera fácil y efectiva. ¡Empieza hoy!
              </p>
            </div>
            
           {/* Collage de pantallas estilo mockup */}
             <div className="flex justify-center items-center w-full order-1 lg:order-2">
               <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto">
                  <div className="flex justify-center items-center w-full h-full">
                <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl scale-90 sm:scale-100 lg:scale-110 xl:scale-125 mx-auto">
                    <img src="/lovable-uploads/Collage.png" alt="Planificación financiera" className="w-full h-[300px] sm:h-[380px] lg:h-[460px] object-cover object-top animate-scale-in" style={{
                    animationDelay: '0.6s',
                    borderRadius: '0px',
                    boxShadow: 'none',
                    background: 'transparent'
                  }} />
                 </div>
             </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6">
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-2xl px-4 sm:px-6 py-2 sm:py-3">
              <span className="text-primary font-bold text-sm sm:text-base">Beneficios de SaveMoney</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground max-w-4xl mx-auto leading-tight px-2">
              Descubre lo que puedes lograr
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
              Simplifica tu vida financiera con nuestra app intuitiva y llena de funcionalidades pensadas para ti.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => <Card key={index} className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in text-center bg-card/50 backdrop-blur-sm" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto">
                    <benefit.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Video Section */}
    <section className="py-12 sm:py-16 bg-background">
  <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl">
    <div className="text-center mb-8 sm:mb-12">
       <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground px-2">
         Mira la funcionalidad de la app SaveMoney
       </h2>
    </div>
    <div className="flex justify-center items-center">
      <div className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl aspect-video">
        <iframe className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/Zbwml7MeS8g" title="Video de métodos de pago" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  </div>
    </section>

      {/* Offline Access Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Accede a tu información en cualquier momento
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Lleva el control de tus finanzas incluso sin conexión. Ideal para zonas rurales o cuando no tienes datos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Registra tus gastos, revisa tus presupuestos y mantén tus finanzas al día sin necesidad de estar conectado a internet.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {features.map((feature, index) => <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
            
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <img src="/lovable-uploads/eccdbadb-71af-4dbe-9d85-66cdef35b27e.png" alt="Mujer usando calculadora" className="w-full rounded-2xl shadow-2xl animate-scale-in" style={{
                animationDelay: '0.3s'
              }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <p className="text-muted-foreground">Lo que dicen nuestros usuarios</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in overflow-hidden" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <CardContent className="p-0">
                  {testimonial.image ? <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-top object-cover" />
                    </div> : <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full"></div>
                    </div>}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <p className="text-muted-foreground italic leading-relaxed text-sm sm:text-base">
                      "{testimonial.comment}"
                    </p>
                    <div className="space-y-1">
                      <div className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.age}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
    </div>;
};
