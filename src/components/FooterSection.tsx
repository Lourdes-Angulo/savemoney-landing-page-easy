import { Button } from "@/components/ui/button";
import { Smartphone, Mail } from "lucide-react";
export const FooterSection = () => {
  return <footer className="bg-gradient-hero text-white">
      {/* CTA Section */}
      <div className="border-b border-white/20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              ¿Listo para tomar control
              <span className="block text-neutral-50">de tu dinero?</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Únete a miles de personas que ya están ahorrando y controlando mejor sus finanzas con SaveMoney.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg">
                <Smartphone className="mr-2 h-5 w-5" />
                Descargar para iOS
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg">
                <Smartphone className="mr-2 h-5 w-5" />
                Descargar para Android
              </Button>
            </div>
            <p className="text-white/70">Descarga gratuita • Sin registros complicados • Empieza en segundos</p>
          </div>
        </div>
      </div>
      
      {/* Footer Info */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">SaveMoney</h3>
            <p className="text-white/80 leading-relaxed">
              La app más fácil para controlar tu dinero diario. Sin complicaciones, sin cuentas bancarias, solo resultados.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Características</h4>
            <ul className="space-y-2 text-white/80">
              <li>• Control de gastos diarios</li>
              <li>• Reportes fáciles de entender</li>
              <li>• Sin conexión bancaria necesaria</li>
              <li>• Interfaz súper simple</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span>admin@savemoney.app</span>
              </div>
              <p className="text-white/80">¿Tienes dudas? ¡Escríbenos!</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
          <p>© 2025 SaveMoney. Todos los derechos reservados.
Lourdes Angulo - Yuliana Cacho | Grupo 24</p>
        </div>
      </div>
    </footer>;
};