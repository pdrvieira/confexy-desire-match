import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Mostra o CTA quando o usuário rolar mais de 600px (passou da Hero)
            const show = window.scrollY > 600;
            setIsVisible(show);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`
        fixed bottom-6 left-4 right-4 z-50 lg:hidden
        transform transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1)
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}
      `}
        >
            <div className="
        flex items-center justify-between p-2 
        bg-[#7C3AED]/95 backdrop-blur-xl 
        border border-white/20 
        rounded-2xl shadow-2xl shadow-purple-900/40
      ">
                <div className="pl-3 pr-2">
                    <span className="text-sm font-bold text-white block">
                        Baixe Agora
                    </span>
                    <span className="text-[10px] text-white/50 block leading-tight">
                        Grátis e Seguro
                    </span>
                </div>

                <div className="flex gap-2">
                    <Button
                        size="sm"
                        className="h-10 px-4 bg-white text-black hover:bg-white/90 rounded-xl font-bold text-xs"
                        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.confexy', '_blank')}
                    >
                        Android
                    </Button>
                    <Button
                        size="sm"
                        className="h-10 px-4 bg-white/10 text-white hover:bg-white/20 border border-white/10 rounded-xl font-bold text-xs"
                        onClick={() => window.open('https://apps.apple.com/us/app/confexy/id6755045041', '_blank')}
                    >
                        iOS
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FloatingCTA;
