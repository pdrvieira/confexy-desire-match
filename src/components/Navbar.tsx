/**
 * Navbar Component - Confexy Landing Page
 * 
 * Uma navbar moderna, acessível e performática com:
 * - Efeito glassmorphism ao rolar (blur + backdrop)
 * - Scrollspy para indicar seção ativa via IntersectionObserver
 * - Menu mobile acessível (ESC, click outside, focus trap)
 * - Suporte a Safari iOS (backdrop-filter fallback)
 * - Skip to content link para acessibilidade
 * - Micro-animações suaves (150-250ms)
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import titleLogo from "@/assets/realassets/titlelogo.png";

// =============================================================================
// CONFIGURATION
// =============================================================================

const NAV_LINKS = [
    { label: "Como Funciona", href: "#como-funciona", sectionId: "como-funciona" },
    { label: "Benefícios", href: "#beneficios", sectionId: "beneficios" },
    { label: "Depoimentos", href: "#depoimentos", sectionId: "depoimentos" },
    { label: "FAQ", href: "#faq", sectionId: "faq" },
] as const;

// Altura da navbar para offset do scroll
const NAVBAR_HEIGHT = 72;

// Scroll threshold para aplicar efeito glassmorphism
const SCROLL_THRESHOLD = 16;

// =============================================================================
// CUSTOM HOOK: useScrollspy
// Calcula qual seção está mais próxima do topo do viewport
// =============================================================================

function useScrollspy(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const calculateActiveSection = () => {
            // Se está no topo da página (Hero section), nenhum link fica ativo
            // O Hero ocupa ~100vh, então usamos window.innerHeight como referência
            const heroThreshold = window.innerHeight * 0.6; // 60% da altura do viewport

            if (window.scrollY < heroThreshold) {
                if (activeSection !== "") {
                    setActiveSection("");
                }
                return;
            }

            // Ponto de referência: logo abaixo da navbar
            const referencePoint = NAVBAR_HEIGHT + 50;

            let closestSection = "";
            let closestDistance = Infinity;

            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (!element) return;

                const rect = element.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionBottom = rect.bottom;

                // Se a seção está visível no viewport (parcialmente)
                if (sectionBottom > referencePoint && sectionTop < window.innerHeight) {
                    // Distância do topo da seção ao ponto de referência
                    const distance = Math.abs(sectionTop - referencePoint);

                    // Se o topo da seção está acima ou próximo do ponto de referência
                    if (sectionTop <= referencePoint + 100 && distance < closestDistance) {
                        closestDistance = distance;
                        closestSection = id;
                    }
                }
            });

            // Se nenhuma seção foi encontrada, verificar qual está ocupando o viewport
            if (!closestSection) {
                sectionIds.forEach((id) => {
                    const element = document.getElementById(id);
                    if (!element) return;

                    const rect = element.getBoundingClientRect();
                    // Se o topo da seção já passou do ponto de referência
                    if (rect.top <= referencePoint && rect.bottom > referencePoint) {
                        closestSection = id;
                    }
                });
            }

            if (closestSection !== activeSection) {
                setActiveSection(closestSection);
            }
        };

        // Calcular inicialmente
        calculateActiveSection();

        // Listener com throttle via requestAnimationFrame
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    calculateActiveSection();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds, activeSection]);

    return activeSection;
}

// =============================================================================
// CUSTOM HOOK: useScrolled
// Detecta se a página foi rolada além do threshold
// =============================================================================

function useScrolled(threshold: number = SCROLL_THRESHOLD) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Verificar estado inicial
        setIsScrolled(window.scrollY > threshold);

        const handleScroll = () => {
            // Usar requestAnimationFrame para performance
            requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > threshold);
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return isScrolled;
}

// =============================================================================
// CUSTOM HOOK: useFocusTrap
// Trap de foco para acessibilidade do menu mobile
// =============================================================================

function useFocusTrap(isActive: boolean, containerRef: React.RefObject<HTMLDivElement | null>) {
    useEffect(() => {
        if (!isActive || !containerRef.current) return;

        const container = containerRef.current;
        const focusableElements = container.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                }
            }
        };

        // Focar no primeiro elemento ao abrir
        firstElement?.focus();

        container.addEventListener("keydown", handleKeyDown);
        return () => container.removeEventListener("keydown", handleKeyDown);
    }, [isActive, containerRef]);
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    // Hooks personalizados
    const isScrolled = useScrolled();
    const activeSection = useScrollspy(NAV_LINKS.map(link => link.sectionId));

    // Aplicar focus trap no menu mobile
    useFocusTrap(isMobileMenuOpen, mobileMenuRef);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================

    /**
     * Scroll suave para a seção com offset da navbar
     */
    const scrollToSection = useCallback((href: string, closeMobileMenu = false) => {
        if (closeMobileMenu) {
            setIsMobileMenuOpen(false);
        }

        const sectionId = href.replace("#", "");
        const element = document.getElementById(sectionId);

        if (element) {
            const offset = NAVBAR_HEIGHT;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset - 16; // 16px extra padding

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }, []);

    /**
     * Scroll para o topo ao clicar no logo
     */
    const scrollToTop = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    /**
     * Toggle do menu mobile
     */
    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    /**
     * Fechar menu mobile
     */
    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
        // Devolver foco ao botão do menu
        menuButtonRef.current?.focus();
    }, []);

    // =========================================================================
    // EFFECTS
    // =========================================================================

    /**
     * Travar scroll do body quando menu mobile está aberto
     */
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.touchAction = "none";
        } else {
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
        };
    }, [isMobileMenuOpen]);

    /**
     * Fechar menu mobile com ESC
     */
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isMobileMenuOpen) {
                closeMobileMenu();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isMobileMenuOpen, closeMobileMenu]);

    /**
     * Fechar menu mobile ao redimensionar para desktop
     */
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize, { passive: true });
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobileMenuOpen]);

    // =========================================================================
    // RENDER
    // =========================================================================

    return (
        <>
            {/* Skip to Content - Acessibilidade */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] 
                   focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground 
                   focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-glow
                   transition-all duration-200"
            >
                Pular para o conteúdo principal
            </a>

            {/* Navbar Principal */}
            <nav
                aria-label="Navegação principal"
                className={`
                    fixed top-0 left-0 right-0 z-50
                    transition-all duration-200 ease-out
                    ${isScrolled ? "navbar-scrolled" : "navbar-top"}
                `}
                style={{
                    paddingTop: "env(safe-area-inset-top, 0px)",
                }}
            >
                {/* Container com largura máxima */}
                <div className="mx-auto px-6 lg:px-10 max-w-7xl">
                    <div className="flex items-center justify-between h-16 lg:h-[72px]">

                        {/* LOGO */}
                        <a
                            href="#"
                            onClick={scrollToTop}
                            className="flex-shrink-0 flex items-center"
                            aria-label="Confexy - Voltar ao início"
                        >
                            <img
                                src={titleLogo}
                                alt="Confexy"
                                className="h-6 lg:h-7 transition-transform duration-200 hover:scale-105"
                            />
                        </a>

                        {/* DESKTOP NAVIGATION - Centralizado */}
                        <div className="hidden lg:flex items-center justify-center flex-1 px-8">
                            <div className="flex items-center gap-2">
                                {NAV_LINKS.map((link) => {
                                    const isActive = activeSection === link.sectionId;
                                    return (
                                        <button
                                            key={link.href}
                                            onClick={() => scrollToSection(link.href)}
                                            className={`
                                                px-4 py-2 text-[13px] font-medium
                                                transition-colors duration-200
                                                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-lg
                                                ${isActive
                                                    ? "text-white"
                                                    : "text-white/55 hover:text-white/90"
                                                }
                                            `}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {link.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            ref={menuButtonRef}
                            onClick={toggleMobileMenu}
                            className={`
                                lg:hidden p-2.5 -mr-2
                                rounded-xl
                                transition-all duration-200
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                                ${isMobileMenuOpen
                                    ? "bg-transparent text-white z-[80] relative"
                                    : "text-white/80 hover:text-white hover:bg-white/5"
                                }
                            `}
                            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu de navegação"}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">
                                {isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                            </span>
                            <div className="relative w-5 h-5">
                                <Menu
                                    className={`
                                        absolute inset-0 h-5 w-5
                                        transition-all duration-200
                                        ${isMobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}
                                    `}
                                />
                                <X
                                    className={`
                                        absolute inset-0 h-5 w-5
                                        transition-all duration-200
                                        ${isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}
                                    `}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* ===================================================================== */}
            {/* MOBILE SIDEBAR MENU */}
            {/* ===================================================================== */}

            {/* Backdrop Overlay */}
            <div
                className={`
                    fixed inset-0 z-[60] lg:hidden bg-black/60 backdrop-blur-sm
                    transition-opacity duration-300
                    ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
                onClick={closeMobileMenu}
                aria-hidden="true"
            />

            {/* Sidebar Container */}
            <div
                id="mobile-menu"
                ref={mobileMenuRef}
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navegação"
                className={`
                    fixed top-0 right-0 bottom-0 z-[70] lg:hidden
                    w-[85vw] max-w-sm h-full
                    flex flex-col
                    bg-[#0A0A0A] border-l border-white/10
                    transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1)
                    ${isMobileMenuOpen ? "translate-x-0 shadow-2xl shadow-black" : "translate-x-full shadow-none"}
                `}
            >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-confexy-purple-dark/10 pointer-events-none" />

                {/* Sidebar Header */}
                <div className="relative z-10 flex items-center justify-between px-6 h-20 shrink-0 border-b border-white/5">
                    <span className="text-lg font-bold text-white tracking-widest uppercase opacity-90">
                        Menu
                    </span>

                    {/* Botão de fechar redundante (UX) */}
                    <button
                        onClick={closeMobileMenu}
                        className="p-2 -mr-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
                        aria-label="Fechar menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Sidebar Links */}
                <nav className="relative z-10 flex-1 px-6 py-8 overflow-y-auto space-y-6">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.sectionId;
                        return (
                            <button
                                key={link.href}
                                onClick={() => scrollToSection(link.href, true)}
                                className={`
                                    w-full flex items-center justify-between text-left group
                                    py-2
                                    transition-colors duration-200
                                `}
                            >
                                <span className={`
                                    text-2xl font-bold tracking-tight
                                    ${isActive ? "text-white" : "text-white/40 group-hover:text-white"}
                                `}>
                                    {link.label}
                                </span>

                                {isActive && (
                                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
                                )}
                            </button>
                        );
                    })}
                </nav>

                {/* Sidebar Footer / CTAs */}
                <div className="relative z-10 p-6 pb-8 border-t border-white/10 bg-[#0F0F0F]">
                    <p className="text-xs text-white/40 font-medium mb-4 uppercase tracking-wider">
                        Baixe o App
                    </p>

                    <div className="space-y-3">
                        <Button
                            className="w-full h-12 bg-white hover:bg-white/90 text-black border-0 rounded-xl flex items-center justify-center gap-2 shadow-sm font-semibold"
                            onClick={() => {
                                closeMobileMenu();
                                window.open("https://play.google.com/store/apps/details?id=com.confexy", "_blank");
                            }}
                        >
                            <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                            Play Store
                        </Button>

                        <Button
                            className="w-full h-12 bg-[#1A1A1A] hover:bg-[#252525] text-white border border-white/10 rounded-xl flex items-center justify-center gap-2 shadow-sm font-semibold"
                            onClick={() => {
                                closeMobileMenu();
                                window.open("https://apps.apple.com/us/app/confexy/id6755045041", "_blank");
                            }}
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                            </svg>
                            App Store
                        </Button>
                    </div>
                </div>
            </div>

            {/* ===================================================================== */}
            {/* STYLES */}
            {/* ===================================================================== */}
            <style>{`
                .navbar-top { background: transparent; }
                
                .navbar-scrolled {
                    background: rgba(10, 10, 10, 0.7);
                    backdrop-filter: blur(24px);
                    -webkit-backdrop-filter: blur(24px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                @supports not (backdrop-filter: blur(24px)) {
                    .navbar-scrolled { background: rgba(10, 10, 10, 0.95); }
                }

                /* Sidebar Animation Handling */
                /* As transições agora são controladas diretamente pelas classes Tailwind */
            `}</style>
        </>
    );
};

export default Navbar;
