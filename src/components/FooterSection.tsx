
import { Button } from "@/components/ui/button";
import { Smartphone, Mail } from "lucide-react";

export const FooterSection = () => {
  return <footer className="bg-gradient-hero text-white">
      {/* CTA Section */}
      <div className="border-b border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center space-y-6 sm:space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              ¿Listo para tomar control
              <span className="block text-neutral-50">de tu dinero?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed px-4">
              Únete a miles de personas que ya están ahorrando y controlando mejor sus finanzas con SaveMoney.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                <Smartphone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Descargar para iOS
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                <Smartphone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Descargar para Android
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Info */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-violet-950">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold">SaveMoney</h3>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              La app más fácil para controlar tu dinero diario. Sin complicaciones, sin cuentas bancarias, solo resultados.
            </p>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Características</h4>
            <ul className="space-y-1 sm:space-y-2 text-white/80 text-sm sm:text-base">
              <li>• Control de gastos diarios</li>
              <li>• Reportes fáciles de entender</li>
              <li>• Sin conexión bancaria necesaria</li>
              <li>• Interfaz súper simple</li>
            </ul>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/80 text-sm sm:text-base">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="break-all">admin@savemoney.app</span>
              </div>
              <p className="text-white/80 text-sm sm:text-base">¿Tienes dudas? ¡Escríbenos!</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-white/70 text-xs sm:text-sm">
          <p>© 2025 SaveMoney. Todos los derechos reservados.</p>
          <p className="mt-1">Lourdes Angulo - Yuliana Cacho | Grupo 24</p>
        </div>
      </div>
    </footer>;
};
