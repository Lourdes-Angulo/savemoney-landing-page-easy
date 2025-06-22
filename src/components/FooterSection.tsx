import { Button } from "@/components/ui/button";
import { Smartphone, Mail } from "lucide-react";
export const FooterSection = () => {
  return <footer className="bg-gradient-hero text-white">
      {/* CTA Section */}
      <div className="border-b border-white/20">
        
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
                <span className="break-all">langulor2@upao.edu.pe
ycachoq1@upao.edu.pe</span>
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