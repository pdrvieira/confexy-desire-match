import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, CheckCircle2 } from "lucide-react";

interface BetaSignupDialogProps {
  trigger: React.ReactNode;
}

const BetaSignupDialog = ({ trigger }: BetaSignupDialogProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [previousEmail, setPreviousEmail] = useState("");
  const { toast } = useToast();

  // Verificar se já enviou cadastro
  const checkPreviousSubmission = () => {
    const lastSubmission = localStorage.getItem('confexy_beta_submission');
    if (lastSubmission) {
      const data = JSON.parse(lastSubmission);
      const submissionDate = new Date(data.timestamp);
      const daysSince = (Date.now() - submissionDate.getTime()) / (1000 * 60 * 60 * 24);
      
      // Bloqueia por 7 dias
      if (daysSince < 7) {
        setHasSubmitted(true);
        setPreviousEmail(data.email);
        return true;
      }
    }
    return false;
  };

  // Verificar ao abrir o dialog
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen) {
      checkPreviousSubmission();
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verifica se já enviou
    if (checkPreviousSubmission()) {
      toast({
        title: "Você já se cadastrou!",
        description: "Aguarde a confirmação no seu email.",
        variant: "destructive",
      });
      return;
    }
    
    if (!email || !validateEmail(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Usando Web3Forms para enviar email direto para confexybr@gmail.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "a25cdc4b-2927-4608-a48b-159fcfc7bb11",
          subject: `🎯 Novo cadastro Beta Confexy - ${name || email}`,
          from_name: "Confexy Landing Page",
          email: email,
          name: name || "Não informado",
          message: `
Nova solicitação de acesso ao teste fechado do Confexy!

Nome: ${name || "Não informado"}
Email do Google Play: ${email}
Data: ${new Date().toLocaleString('pt-BR')}

---
PRÓXIMOS PASSOS:
1. Acesse o Google Play Console
2. Vá em Testes > Teste fechado
3. Adicione o email: ${email}
4. Responda este email confirmando o acesso

Este email foi enviado automaticamente pela landing page do Confexy.
          `.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Salva no localStorage para evitar reenvio
        localStorage.setItem('confexy_beta_submission', JSON.stringify({
          email,
          timestamp: new Date().toISOString(),
        }));
        
        setIsSuccess(true);
        setHasSubmitted(true);
        setPreviousEmail(email);
        
        toast({
          title: "Cadastro realizado! 🎉",
          description: "Você receberá um email de confirmação em breve.",
        });
      } else {
        throw new Error("Erro ao enviar");
      }
    } catch (error) {
      console.error("Erro:", error);
      toast({
        title: "Erro ao cadastrar",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[85vh] sm:max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background/90 via-background/85 to-primary/5 border-2 border-primary/30 backdrop-blur-xl p-4 sm:p-6 shadow-2xl shadow-primary/20 rounded-2xl">
        <DialogHeader className="space-y-2 sm:space-y-3">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent leading-tight">
            {hasSubmitted && !isSuccess ? "Você já está na lista!" : isSuccess ? "Cadastro Confirmado!" : "Participar do Teste Fechado"}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground text-sm sm:text-base pt-1 space-y-2">
            {isSuccess ? (
              <span className="block">Seu pedido foi enviado com sucesso!</span>
            ) : (
              <>
                <span className="block">Para participar do teste fechado, cadastre seu email abaixo.</span>
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-500 text-xs font-medium">
                  <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Exclusivo para Android
                </span>
              </>
            )}
          </DialogDescription>
        </DialogHeader>
        
        {hasSubmitted && !isSuccess ? (
          <div className="flex flex-col items-center justify-center py-4 sm:py-6 space-y-4 sm:space-y-6">
            <CheckCircle2 className="h-14 w-14 sm:h-20 sm:w-20 text-blue-500 animate-in zoom-in duration-300" />
            
            <div className="space-y-3 sm:space-y-4 text-center px-2 sm:px-4">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                Você já solicitou acesso!
              </h3>
              
              <div className="space-y-2 sm:space-y-3 text-muted-foreground">
                <p className="text-sm sm:text-base leading-relaxed">
                  Encontramos um cadastro anterior com o email:
                </p>
                
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-foreground break-all px-1">
                  {previousEmail}
                </p>
                
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 sm:p-4 space-y-1.5 sm:space-y-2 text-left backdrop-blur-sm">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    • Se ainda não recebeu o email de confirmação, aguarde até 3 horas
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    • Verifique sua caixa de spam
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    • Você pode solicitar novamente em 7 dias
                  </p>
                </div>
                
                <p className="text-xs text-muted-foreground/70 text-center pt-2">
                  Dúvidas ou problemas?{" "}
                  <a 
                    href="mailto:confexybr@gmail.com" 
                    className="text-primary hover:text-primary-glow underline font-medium"
                  >
                    confexybr@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            <Button
              onClick={() => setOpen(false)}
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-6 sm:px-8 py-5 sm:py-6 mt-2 sm:mt-4 w-full sm:w-auto min-h-[52px] text-base rounded-xl shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              Entendi
            </Button>
          </div>
        ) : isSuccess ? (
          <div className="flex flex-col items-center justify-center py-4 sm:py-6 space-y-4 sm:space-y-6">
            <CheckCircle2 className="h-14 w-14 sm:h-20 sm:w-20 text-green-500 animate-in zoom-in duration-300" />
            
            <div className="space-y-3 sm:space-y-4 text-center px-2 sm:px-4">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                Solicitação Enviada com Sucesso!
              </h3>
              
              <div className="space-y-2 sm:space-y-3 text-muted-foreground">
                <p className="text-sm sm:text-base leading-relaxed">
                  Recebemos sua solicitação de acesso ao teste fechado do Confexy.
                </p>
                
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 sm:p-4 space-y-2 text-left backdrop-blur-sm">
                  <p className="font-semibold text-foreground text-xs sm:text-sm">Próximos passos:</p>
                  <ul className="text-xs sm:text-sm space-y-1.5">
                    <li>✓ Você receberá um email de confirmação em <strong className="text-foreground">até 3 horas</strong></li>
                    <li>✓ Após aprovado, poderá baixar o app na Play Store</li>
                  </ul>
                </div>
                
                <p className="text-xs sm:text-sm text-muted-foreground/80">
                  Email cadastrado: <strong className="text-foreground break-all">{email}</strong>
                </p>
              </div>
            </div>
            
            <Button
              onClick={() => {
                setOpen(false);
                setIsSuccess(false);
                setEmail("");
                setName("");
              }}
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-6 sm:px-8 py-5 sm:py-6 mt-2 sm:mt-4 w-full sm:w-auto min-h-[52px] text-base rounded-xl shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              Fechar
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold text-sm sm:text-base">
                Email da sua conta Google Play Store *
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all h-12 sm:h-12 text-base sm:text-base rounded-lg"
                  required
                  disabled={isLoading}
                />
              </div>
              <p className="text-xs text-amber-600 dark:text-amber-400 font-medium leading-tight">
                ⚠️ Atenção: Use exatamente o mesmo email que você usa na Play Store
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground text-sm sm:text-base">
                Nome (opcional)
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Como prefere ser chamado?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all h-12 sm:h-12 text-base sm:text-base rounded-lg"
                disabled={isLoading}
              />
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 sm:p-4 space-y-2 backdrop-blur-sm">
              <p className="text-xs sm:text-sm font-medium text-foreground">O que acontece depois?</p>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                <li>✓ Você receberá um convite por email</li>
                <li>✓ Acesso antecipado a todas as funcionalidades</li>
                <li>✓ Influencie o desenvolvimento do app</li>
              </ul>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold py-5 sm:py-6 shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base min-h-[52px] rounded-xl"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Quero Participar do Beta"
              )}
            </Button>

            <div className="space-y-2 pt-1">
              <p className="text-xs text-center text-muted-foreground leading-relaxed">
                Ao se cadastrar, você concorda em receber convites para testar o Confexy.
              </p>
              <p className="text-xs text-center text-muted-foreground">
                Já participa do teste?{" "}
                <a 
                  href="https://play.google.com/store/apps/details?id=com.confexy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-glow underline font-medium"
                >
                  Baixe na Play Store
                </a>
              </p>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BetaSignupDialog;

