# 🎯 Exemplo: Como Usar useSEO nas Páginas

Este arquivo mostra exemplos práticos de como implementar SEO em cada página.

---

## 📌 Importar e Usar Hook useSEO

### Cada página deve ter `useSEO()` no início do componente:

---

## ✅ src/pages/Index.tsx

```tsx
import { useSEO } from "@/hooks/use-seo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// ... outros imports

const Index = () => {
  // ✨ Adicionar esta linha no início do componente
  useSEO("home");

  return (
    <main>
      {/* Seu conteúdo aqui */}
    </main>
  );
};

export default Index;
```

---

## ✅ src/pages/Produtos.tsx

```tsx
import { useSEO } from "@/hooks/use-seo";
import { useProductSchema } from "@/hooks/use-schema";
// ... outros imports

const Produtos = () => {
  // ✨ Adicionar esta linha
  useSEO("produtos");

  return (
    <main>
      {/* Exemplo: se tiver um produto em destaque */}
      <ProductCard 
        title="Polpa de Fruta Premium"
        description="Polpa de fruta 100% natural"
        image="/fruta-premium.jpg"
      />
    </main>
  );
};

export default Produtos;
```

### Com Schema de Produto:

```tsx
const Produtos = () => {
  useSEO("produtos");
  
  // Adicionar schema para produtos em destaque
  useProductSchema({
    name: "Polpa de Fruta Premium",
    description: "Polpa 100% natural, sem conservantes",
    image: "https://ranchopolparia.com.br/fruta-premium.jpg",
    price: "29.90",
    currency: "BRL",
    availability: "InStock",
  });

  return (
    <main>
      {/* Conteúdo */}
    </main>
  );
};
```

---

## ✅ src/pages/Sobre.tsx

```tsx
import { useSEO } from "@/hooks/use-seo";
import { useLocalBusinessSchema } from "@/hooks/use-schema";
// ... outros imports

const Sobre = () => {
  useSEO("sobre");

  // Adicionar schema da empresa
  useLocalBusinessSchema({
    name: "Rancho Polparia",
    url: "https://www.ranchopolparia.com.br",
    telephone: "+55 (21) 3333-3333", // Substitua pelo seu
    address: {
      streetAddress: "Rua Example, 123",
      addressLocality: "Município",
      addressRegion: "RJ",
      postalCode: "20000-000",
      addressCountry: "BR",
    },
  });

  return (
    <main>
      {/* Sua história, valores, etc */}
    </main>
  );
};

export default Sobre;
```

---

## ✅ src/pages/Contato.tsx

```tsx
import { useSEO } from "@/hooks/use-seo";
import { useBreadcrumbSchema } from "@/hooks/use-schema";
// ... outros imports

const Contato = () => {
  useSEO("contato");

  // Adicionar breadcrumb para melhor navegação
  useBreadcrumbSchema([
    {
      position: 1,
      name: "Home",
      url: "https://www.ranchopolparia.com.br/",
    },
    {
      position: 2,
      name: "Contato",
      url: "https://www.ranchopolparia.com.br/contato",
    },
  ]);

  return (
    <main>
      {/* Formulário de contato */}
    </main>
  );
};

export default Contato;
```

---

## 🎁 Bonus: Usando Todos os Schemas

```tsx
import { useSEO } from "@/hooks/use-seo";
import { 
  useLocalBusinessSchema, 
  useBreadcrumbSchema,
  useFAQSchema 
} from "@/hooks/use-schema";

const Contato = () => {
  // SEO básico
  useSEO("contato");

  // Informações da empresa
  useLocalBusinessSchema({
    name: "Rancho Polparia",
    url: "https://www.ranchopolparia.com.br",
    telephone: "+55 (21) 3333-3333",
    address: {
      streetAddress: "Rua Example, 123",
      addressLocality: "Município",
      addressRegion: "RJ",
      postalCode: "20000-000",
      addressCountry: "BR",
    },
  });

  // Breadcrumb
  useBreadcrumbSchema([
    {
      position: 1,
      name: "Home",
      url: "https://www.ranchopolparia.com.br/",
    },
    {
      position: 2,
      name: "Contato",
      url: "https://www.ranchopolparia.com.br/contato",
    },
  ]);

  // FAQs (se houver)
  useFAQSchema([
    {
      question: "Como entrar em contato?",
      answer: "Você pode nos contactar através do formulário acima ou por telefone.",
    },
    {
      question: "Qual é o horário de atendimento?",
      answer: "Segunda a sexta de 9h às 18h. Sábados de 9h às 13h.",
    },
  ]);

  return (
    <main>
      {/* Seu conteúdo */}
    </main>
  );
};

export default Contato;
```

---

## 🔄 Ordem de Implementação Recomendada

1. **Hoje**: Adicionar `useSEO()` em todas as 4 páginas ✨
2. **Hoje**: Testar no navegador (DevTools > Application > Manifest)
3. **Amanhã**: Submeter sitemap no Google Search Console
4. **Próxima semana**: Adicionar schema.org para empresas
5. **Próximas semanas**: Monitorar Performance no GSC

---

## ✅ Verificar se está Funcionando

### 1. Abra a página no navegador
### 2. Clique direito > Inspecionar
### 3. Vá para `<head>`
### 4. Procure por:
```html
<!-- Você verá -->
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta property="og:title" content="...">
<meta property="twitter:card" content="...">
<link rel="canonical" href="...">

<!-- E scripts JSON-LD -->
<script type="application/ld+json">
  { "@context": "https://schema.org", ... }
</script>
```

### 5. Teste com a ferramenta de Schema do Google:
https://search.google.com/structured-data/testing-tool

---

## 📝 Checklist de Implementação

- [ ] Instalou o projeto?
- [ ] SEO.md criado?
- [ ] use-seo.ts criado?
- [ ] use-schema.ts criado?
- [ ] Adicionou `useSEO()` em Index.tsx?
- [ ] Adicionou `useSEO()` em Produtos.tsx?
- [ ] Adicionou `useSEO()` em Sobre.tsx?
- [ ] Adicionou `useSEO()` em Contato.tsx?
- [ ] Testou no navegador (DevTools)?
- [ ] Testou estrutura JSON-LD?
- [ ] Pronto para submeter no GSC!

---

## 🚀 Próximas Ações

1. **Implemente agora**: Copie `useSEO()` em cada página
2. **Teste tudo**: Abra DevTools e verifique meta tags
3. **Submeta no GSC**: https://search.google.com/search-console
4. **Aguarde indexação**: 3-7 dias para primeiras impressões
5. **Monitore**: Acompanhe cliques, impressões e rankings

---

## 💡 Tips

- **Customize keywords**: Edite `src/lib/seoConfig.ts`
- **Imagens**: Adicione atributo `alt` em todas as imagens
- **Links internos**: Use `<Link>` do React Router (melhor para SEO)
- **Velocidade**: Use Lighthouse em pagespeed.web.dev
- **Mobile**: Seu site já é responsivo ✅

---

Dúvidas? Veja:
- SEO.md (guia completo)
- GOOGLE_SEARCH_CONSOLE.md (submissão)
- [Documentação Google Search](https://developers.google.com/search)
