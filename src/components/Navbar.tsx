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
import { Menu, X, Download } from "lucide-react";
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

// Altura da navbar para offset do scroll (desktop/mobile)
const NAVBAR_HEIGHT_DESKTOP = 64;
const NAVBAR_HEIGHT_MOBILE = 56;

// Scroll threshold para aplicar efeito glassmorphism
const SCROLL_THRESHOLD = 16;

// =============================================================================
// CUSTOM HOOK: useScrollspy
// Usa IntersectionObserver para detectar seção ativa (performance otimizada)
// =============================================================================

function useScrollspy(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        // Offset para considerar a navbar fixa
        const rootMargin = `-${NAVBAR_HEIGHT_DESKTOP + 32}px 0px -60% 0px`;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin, threshold: 0 }
        );

        // Observar todas as seções
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sectionIds]);

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
            const offset = window.innerWidth >= 1024 ? NAVBAR_HEIGHT_DESKTOP : NAVBAR_HEIGHT_MOBILE;
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
                                    ? "bg-white/10 text-white"
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
            {/* MOBILE MENU OVERLAY */}
            {/* ===================================================================== */}
            <div
                id="mobile-menu"
                ref={mobileMenuRef}
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navegação"
                className={`
          fixed inset-0 z-40 lg:hidden
          transition-all duration-300 ease-out
          ${isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }
        `}
                style={{
                    paddingTop: "env(safe-area-inset-top, 0px)",
                }}
            >
                {/* Backdrop com blur */}
                <div
                    className={`
            absolute inset-0
            mobile-menu-backdrop
            transition-opacity duration-300
            ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}
          `}
                    onClick={closeMobileMenu}
                    aria-hidden="true"
                />

                {/* Menu Content Container */}
                <div
                    className={`
            absolute inset-x-0 top-14 bottom-0
            flex flex-col
            transition-all duration-300 ease-out
            ${isMobileMenuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"
                        }
          `}
                >
                    {/* Navigation Links */}
                    <div className="flex-1 flex flex-col items-center justify-center gap-2 px-6 py-8 overflow-y-auto">
                        {NAV_LINKS.map((link) => {
                            const isActive = activeSection === link.sectionId;
                            return (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href, true)}
                                    className={`
                                        w-full max-w-xs py-4 px-6
                                        text-xl font-medium text-center
                                        transition-colors duration-200
                                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-xl
                                        ${isActive
                                            ? "text-white"
                                            : "text-white/50 hover:text-white/80"
                                        }
                                    `}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {link.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Mobile CTAs */}
                    <div className="p-6 pb-8 border-t border-white/10 space-y-3 bg-gradient-to-t from-background to-transparent">
                        {/* CTA Principal - Baixar Android */}
                        <Button
                            size="lg"
                            className="w-full
                         bg-gradient-to-r from-primary to-confexy-purple-dark
                         hover:from-primary hover:to-primary
                         text-primary-foreground font-bold
                         py-6 text-lg rounded-2xl
                         shadow-xl shadow-primary/25
                         transition-all duration-200
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                            onClick={() => {
                                closeMobileMenu();
                                window.open(
                                    "https://play.google.com/store/apps/details?id=com.confexy",
                                    "_blank",
                                    "noopener,noreferrer"
                                );
                            }}
                        >
                            <Download className="mr-2 h-5 w-5" />
                            Baixar na Play Store
                        </Button>

                        {/* Indicador de disponibilidade */}
                        <p className="text-center text-xs text-muted-foreground mt-2">
                            ✓ Disponível para Android
                        </p>
                    </div>
                </div>
            </div>

            {/* ===================================================================== */}
            {/* STYLES */}
            {/* ===================================================================== */}
            <style>{`
        /* Navbar - Estado inicial (topo da página) */
        .navbar-top {
          background: transparent;
        }

        /* Navbar - Estado após scroll (glassmorphism) */
        .navbar-scrolled {
          background: hsl(240 10% 3.9% / 0.75);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 
            0 4px 30px rgba(0, 0, 0, 0.1),
            0 1px 0 rgba(255, 255, 255, 0.02) inset;
        }

        /* Fallback para browsers que não suportam backdrop-filter */
        @supports not (backdrop-filter: blur(16px)) {
          .navbar-scrolled {
            background: hsl(240 10% 3.9% / 0.95);
          }
        }

        /* Mobile menu backdrop */
        .mobile-menu-backdrop {
          background: hsl(240 10% 3.9% / 0.95);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
        }

        /* Fallback para backdrop no mobile */
        @supports not (backdrop-filter: blur(20px)) {
          .mobile-menu-backdrop {
            background: hsl(240 10% 3.9% / 0.98);
          }
        }

        /* Animação de entrada para links do menu mobile */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Remove outline padrão mas mantém focus visible */
        button:focus {
          outline: none;
        }

        /* Focus visible ring para acessibilidade */
        button:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px hsl(262 83% 58% / 0.5);
        }
      `}</style>
        </>
    );
};

export default Navbar;
