import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/10 py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Confexy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Descubra desejos em comum de forma segura e privada.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Visite</span>
              <a 
                href="https://www.confexy.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors font-medium"
              >
                www.confexy.com.br
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://legal.confexy.com.br/terms-conditions.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Termos e Condições
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://legal.confexy.com.br/privacy-policy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Política de Privacidade
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://legal.confexy.com.br/account-deletion.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Exclusão de Conta
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://legal.confexy.com.br/child-safety.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Segurança Infantil
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Download</h4>
            <div className="space-y-3">
              <a 
                href="https://play.google.com/store/apps/details?id=com.confexy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Disponível no Google Play" 
                  className="h-12 opacity-80 hover:opacity-100 transition-opacity hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Contato</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Para suporte e dúvidas:
              </p>
              <a 
                href="mailto:confexybr@gmail.com"
                className="text-sm text-primary hover:text-primary-glow font-medium transition-colors inline-block"
              >
                confexybr@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-primary/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Confexy. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/5 rounded-full border border-primary/10">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full" />
              <span className="text-xs text-primary font-medium">
                +18 - Conteúdo adulto
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
