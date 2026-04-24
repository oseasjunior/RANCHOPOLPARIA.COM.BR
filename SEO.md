# SEO e Indexação do Google - Guia de Implementação

## 📋 O que foi implementado

### 1. **Meta Tags Otimizadas** (`index.html`)
- ✅ Meta description completa
- ✅ Keywords relevantes
- ✅ Open Graph tags (Facebook/WhatsApp)
- ✅ Twitter Cards
- ✅ Canonical URL
- ✅ Language tags (pt-BR)
- ✅ Robots meta tag

### 2. **Sitemap XML** (`public/sitemap.xml`)
- Mapeia todas as páginas do site
- Define prioridades (homepage = 1.0, outras = 0.8-0.9)
- Define frequência de atualização
- Facilita indexação do Google

### 3. **Robots.txt Otimizado** (`public/robots.txt`)
- Permite crawler de todos os bots
- Define sitemap oficial
- Crawl-delay otimizado para Google (0)

### 4. **Configuração SEO** (`src/lib/seoConfig.ts`)
```typescript
export const seoConfig: Record<string, SEOConfig> = {
  home: { title, description, keywords, ... },
  produtos: { ... },
  sobre: { ... },
  contato: { ... },
};
```

### 5. **Hook useSEO** (`src/hooks/use-seo.ts`)
Gerencia meta tags dinamicamente em cada página.

---

## 🚀 Como usar

### Em cada página, adicione:

```tsx
// src/pages/Index.tsx
import { useSEO } from "@/hooks/use-seo";

export default function Index() {
  useSEO("home");
  
  return (
    // ... seu conteúdo
  );
}
```

### Nas demais páginas:

```tsx
// src/pages/Produtos.tsx
import { useSEO } from "@/hooks/use-seo";

export default function Produtos() {
  useSEO("produtos");
  // ...
}
```

```tsx
// src/pages/Sobre.tsx
import { useSEO } from "@/hooks/use-seo";

export default function Sobre() {
  useSEO("sobre");
  // ...
}
```

```tsx
// src/pages/Contato.tsx
import { useSEO } from "@/hooks/use-seo";

export default function Contato() {
  useSEO("contato");
  // ...
}
```

---

## 🔧 Personalizando SEO

Para modificar titles, descriptions ou keywords, edite `src/lib/seoConfig.ts`:

```typescript
export const seoConfig: Record<string, SEOConfig> = {
  home: {
    title: "Seu novo título aqui",
    description: "Sua nova descrição",
    keywords: ["palavra1", "palavra2", "palavra3"],
    // ...
  },
};
```

---

## 📝 Estruturado (Schema.org)

Para melhor indexação, adicione JSON-LD no componente. Exemplo:

```tsx
useEffect(() => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rancho Polparia",
    "url": "https://www.ranchopolparia.com.br",
    "telephone": "+55 (xx) xxxxx-xxxx",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Seu endereço",
      "addressLocality": "Cidade",
      "addressRegion": "Estado",
      "postalCode": "xxxxx-xxx",
      "addressCountry": "BR"
    }
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);

  return () => script.remove();
}, []);
```

---

## ✅ Checklist de Indexação

- [x] Meta tags primárias (title, description, keywords)
- [x] Open Graph (Facebook, WhatsApp)
- [x] Twitter Cards
- [x] Canonical URLs
- [x] Sitemap.xml
- [x] robots.txt
- [x] Language tags (pt-BR)
- [ ] Submeter sitemap no Google Search Console
- [ ] Submeter URL no Google Search Console
- [ ] Adicionar Google Analytics (opcional)
- [ ] Adicionar Schema.org estruturado (recomendado)
- [ ] SSL/HTTPS (verificar)
- [ ] Mobile-friendly (Tailwind já otimiza)

---

## 🔗 Próximos Passos

### 1. **Google Search Console**
- Acesse: https://search.google.com/search-console
- Adicione sua propriedade (domínio)
- Submeta o sitemap.xml
- Monitore posições, cliques e impressões

### 2. **Google Analytics** (opcional)
```bash
npm install gtag.js
```

```tsx
// Em main.tsx
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: any;
  }
}

useEffect(() => {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
}, []);
```

### 3. **Melhorias Adicionais**
- Criar blog/artigos com conteúdo relevante
- Adicionar backlinks internos
- Otimizar imagens (Alt text, tamanho)
- Melhorar Core Web Vitals
- Conteúdo único e de qualidade

---

## 📊 Monitoramento

Após submeter no Google Search Console, você poderá acompanhar:
- Posições de ranking
- Cliques e impressões
- Páginas indexadas
- Erros de cobertura
- Mobile usability

---

## 🎯 Boas Práticas

1. **Conteúdo de qualidade**: Prioridade #1 para ranking
2. **Backlinks**: Links de sites confiáveis para o seu
3. **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
4. **Mobile First**: Seu site já está responsivo ✅
5. **Estrutura clara**: URLs amigáveis, hierarquia lógica
6. **Atualizar conteúdo**: Frequência de atualização importante
7. **HTTPS**: Essencial para ranking (verificar deployment)

---

## 📞 Suporte

Para mais informações sobre SEO, visite:
- https://developers.google.com/search
- https://www.google.com/search/howsearchworks/
- https://developers.google.com/search/docs
