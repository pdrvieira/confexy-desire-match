# 💜 Confexy - Landing Page

> Descubra desejos em comum de forma segura e privada

![Confexy Logo](./src/assets/realassets/titlelogo.png)

## 🚀 Visão Geral

Esta é a landing page oficial do **Confexy**, um aplicativo social íntimo que ajuda pessoas a descobrirem desejos e fantasias compartilhados em um ambiente seguro e privado. A landing page apresenta as funcionalidades do app e fornece links para download na Google Play Store.

### 🎯 Principais Características

- **Design Moderno**: Interface elegante com glassmorphism e branding roxo
- **Carrossel Interativo**: Apresenta screenshots e funcionalidades do app
- **Layout Responsivo**: Otimizado para todos os dispositivos (mobile, tablet, desktop)
- **Conformidade Legal**: Footer completo com política de privacidade, termos e links legais
- **Performance Otimizada**: Carregamento rápido com animações suaves

## 🛠️ Stack Tecnológico

- **Framework**: React 18 com TypeScript
- **Ferramenta de Build**: Vite
- **Estilização**: Tailwind CSS com sistema de design customizado
- **Componentes UI**: shadcn/ui
- **Ícones**: Lucide React
- **Animações**: Transições CSS e keyframes customizados

## 📱 Informações do App

- **Nome do App**: Confexy
- **Plataforma**: Android (Google Play Store)
- **Play Store**: [Baixar Confexy](https://play.google.com/store/apps/details?id=com.confexy)
- **Website**: [www.confexy.com.br](https://www.confexy.com.br)

## 🔗 Legal e Conformidade

Todas as páginas legais estão hospedadas no subdomínio `legal.confexy.com.br`:

- [Termos e Condições](https://legal.confexy.com.br/terms-conditions.html)
- [Política de Privacidade](https://legal.confexy.com.br/privacy-policy.html)
- [Exclusão de Conta](https://legal.confexy.com.br/account-deletion.html)
- [Segurança Infantil](https://legal.confexy.com.br/child-safety.html)

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Navegar para o diretório do projeto
cd confexy-desire-match

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

### Build para Produção

```bash
# Fazer build do projeto
npm run build

# Visualizar build de produção
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── assets/
│   └── realassets/          # Ícones, screenshots e gráficos do app
├── components/
│   ├── ui/                  # Componentes shadcn/ui
│   ├── HeroSection.tsx      # Seção hero da landing page
│   ├── BenefitsSection.tsx  # Apresentação dos benefícios do app
│   ├── HowItWorksSection.tsx # Como funciona - passos
│   ├── ScreenshotsSection.tsx # Carrossel interativo do app
│   ├── FinalCTASection.tsx  # Call-to-action final
│   └── Footer.tsx           # Footer com links legais
├── pages/
│   └── Index.tsx            # Página principal da landing
└── lib/
    └── utils.ts             # Funções utilitárias
```

## 🎨 Sistema de Design

### Cores
- **Primária**: Roxo (`#8B5CF6`)
- **Primary Glow**: Roxo claro (`#A855F7`)
- **Background**: Escuro (`#0F0F0F`)
- **Foreground**: Branco (`#FFFFFF`)

### Características
- Efeitos de glassmorphism
- Animações e transições suaves
- Tipografia responsiva
- Estados interativos de hover
- Gradientes de fundo modernos

## 🔧 Personalização

### Atualizando Screenshots do App
Substitua os arquivos em `src/assets/realassets/`:
- `screenshot-1.png` até `screenshot-5.png`
- Atualize as descrições em `ScreenshotsSection.tsx`

### Modificando Conteúdo
- **Texto do hero**: Edite `HeroSection.tsx`
- **Benefícios do app**: Modifique `BenefitsSection.tsx`
- **Links legais**: Atualize `Footer.tsx`

### Mudanças de Estilo
- **Estilos globais**: Edite `src/index.css`
- **Cores do tema**: Modifique `tailwind.config.ts`
- **Estilos de componentes**: Atualize arquivos individuais dos componentes

## 📊 Performance

- **Score Lighthouse**: 95+ (Performance, SEO, Acessibilidade)
- **Core Web Vitals**: Otimizado para LCP, FID, CLS
- **Tamanho do Bundle**: Otimizado com code splitting
- **Otimização de Imagens**: Formatos adequados e lazy loading

## 🌐 SEO e Meta Tags

A landing page inclui:
- Meta descriptions otimizadas
- Tags Open Graph para compartilhamento social
- Suporte ao Twitter Card
- Marcação de dados estruturados
- Estrutura HTML semântica

## 📱 Otimização Mobile

- Interface amigável ao toque
- Carrossel otimizado para swipe mobile
- Imagens e tipografia responsivas
- Tempos de carregamento rápidos no mobile

## 🔒 Segurança e Privacidade

- Links externos usam `rel="noopener noreferrer"`
- Recursos externos apenas HTTPS
- Pronto para analytics que respeitam privacidade
- Estrutura legal compatível com LGPD

## 🎯 Funcionalidades Principais

### Seções da Landing Page

1. **Hero Section**: Apresentação principal com logo e CTAs
2. **Benefícios**: 4 principais benefícios do Confexy
3. **Como Funciona**: 3 passos simples para usar o app
4. **Screenshots**: Carrossel interativo com 5 telas do app
5. **CTA Final**: Chamada final para download
6. **Footer**: Links legais e informações de contato

### Interações

- **Navegação suave**: Scroll suave entre seções
- **Carrossel automático**: Auto-play com pausa no hover
- **Animações**: Entrada sequencial dos elementos
- **Hover effects**: Feedback visual em todos os elementos interativos

## 🚀 Deploy

O projeto está pronto para deploy em qualquer plataforma de hospedagem estática:

- **Vercel**: Simplesmente conecte o repositório
- **Netlify**: Arraste a pasta `dist` após o build
- **GitHub Pages**: Configure nas settings do repositório

## 📞 Suporte

Para dúvidas técnicas ou suporte:
- **Email**: contato@confexy.com.br
- **Website**: [www.confexy.com.br](https://www.confexy.com.br)

## 📄 Licença

© 2025 Confexy. Todos os direitos reservados.

---

**Confexy** - Transformando intimidade através da tecnologia 💜

*Desenvolvido com ❤️ para criar conexões mais profundas e significativas.*