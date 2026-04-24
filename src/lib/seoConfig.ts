/**
 * SEO Configuration for Rancho Polparia
 * Defines metadata for each page
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  language?: string;
}

const baseUrl = "https://www.ranchopolparia.com.br";
const defaultImage = `${baseUrl}/og-image.png`;

export const seoConfig: Record<string, SEOConfig> = {
  home: {
    title: "Rancho Polparia - Produtos e Serviços Autênticos",
    description: "Conheça o Rancho Polparia. Oferecemos produtos e serviços autênticos de qualidade. Visite nosso site para mais informações.",
    keywords: ["rancho", "polparia", "produtos", "serviços", "autêntico", "qualidade"],
    ogType: "website",
    canonicalUrl: `${baseUrl}/`,
    ogImage: defaultImage,
    language: "pt-BR",
  },
  
  produtos: {
    title: "Produtos - Rancho Polparia",
    description: "Conheça nossa linha completa de produtos autênticos. Oferecemos os melhores produtos do Rancho Polparia com garantia de qualidade.",
    keywords: ["produtos", "rancho polparia", "qualidade", "autêntico", "venda online"],
    ogType: "website",
    canonicalUrl: `${baseUrl}/produtos`,
    ogImage: defaultImage,
    language: "pt-BR",
  },
  
  sobre: {
    title: "Sobre - Rancho Polparia",
    description: "Conheça a história e os valores do Rancho Polparia. Mais de anos de tradição e qualidade em cada produto.",
    keywords: ["sobre", "rancho", "história", "valores", "tradição", "qualidade"],
    ogType: "website",
    canonicalUrl: `${baseUrl}/sobre`,
    ogImage: defaultImage,
    language: "pt-BR",
  },
  
  contato: {
    title: "Contato - Rancho Polparia",
    description: "Entre em contato com o Rancho Polparia. Estamos aqui para ajudar com suas dúvidas e solicitações.",
    keywords: ["contato", "rancho polparia", "suporte", "atendimento", "fale conosco"],
    ogType: "website",
    canonicalUrl: `${baseUrl}/contato`,
    ogImage: defaultImage,
    language: "pt-BR",
  },
};

export const getPageSEO = (page: keyof typeof seoConfig): SEOConfig => {
  return seoConfig[page] || seoConfig.home;
};

export const buildOpenGraphMeta = (seo: SEOConfig) => ({
  "og:title": seo.title,
  "og:description": seo.description,
  "og:type": seo.ogType || "website",
  "og:image": seo.ogImage || defaultImage,
  "og:url": seo.canonicalUrl,
});

export const buildTwitterMeta = (seo: SEOConfig) => ({
  "twitter:card": "summary_large_image",
  "twitter:title": seo.title,
  "twitter:description": seo.description,
  "twitter:image": seo.ogImage || defaultImage,
});
