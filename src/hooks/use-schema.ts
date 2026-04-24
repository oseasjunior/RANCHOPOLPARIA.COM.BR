import { useEffect } from "react";

/**
 * Hook para adicionar Schema.org estruturado (JSON-LD)
 * Melhora a indexação e exibição nos resultados do Google
 */

interface LocalBusinessSchema {
  name: string;
  url: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[];
}

interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo?: string;
  description: string;
  sameAs?: string[];
  contactPoint?: {
    "@type": string;
    telephone: string;
    contactType: string;
  };
}

/**
 * Adiciona LocalBusiness Schema
 */
export const useLocalBusinessSchema = (data: LocalBusinessSchema) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      ...data,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);
};

/**
 * Adiciona Organization Schema
 */
export const useOrganizationSchema = (data: Partial<OrganizationSchema>) => {
  useEffect(() => {
    const schema: OrganizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Rancho Polparia",
      url: "https://www.ranchopolparia.com.br",
      description: "Rancho Polparia - Produtos e Serviços Autênticos",
      ...data,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);
};

/**
 * Adiciona Product Schema (para página de produtos)
 */
interface ProductSchema {
  name: string;
  description: string;
  image: string;
  price?: string;
  currency?: string;
  availability?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export const useProductSchema = (product: ProductSchema) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      ...product,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [product]);
};

/**
 * Breadcrumb Schema para navegação
 */
interface BreadcrumbItem {
  position: number;
  name: string;
  url: string;
}

export const useBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item) => ({
        "@type": "ListItem",
        position: item.position,
        name: item.name,
        item: item.url,
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [items]);
};

/**
 * FAQSchema para página de FAQs
 */
interface FAQItem {
  question: string;
  answer: string;
}

export const useFAQSchema = (faqs: FAQItem[]) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [faqs]);
};
