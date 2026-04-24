import { useEffect } from "react";
import { SEOConfig, getPageSEO, buildOpenGraphMeta, buildTwitterMeta } from "@/lib/seoConfig";

/**
 * Hook para gerenciar SEO meta tags dinamicamente por página
 * Atualiza o título, meta description, Open Graph e Twitter Cards
 */
export const useSEO = (page: keyof ReturnType<typeof getPageSEO> | string) => {
  useEffect(() => {
    const seo = getPageSEO(page as any) || {
      title: "Rancho Polparia",
      description: "Rancho Polparia - Produtos e Serviços Autênticos",
      keywords: ["rancho", "polparia"],
    };

    // Update title
    document.title = seo.title;

    // Update or create meta description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", seo.description);

    // Update or create meta keywords
    let metaKeywords = document.querySelector("meta[name='keywords']");
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", seo.keywords?.join(", ") || "");

    // Update canonical URL
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical && seo.canonicalUrl) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    if (canonical && seo.canonicalUrl) {
      canonical.setAttribute("href", seo.canonicalUrl);
    }

    // Update Open Graph meta tags
    const ogMeta = buildOpenGraphMeta(seo);
    Object.entries(ogMeta).forEach(([key, value]) => {
      let meta = document.querySelector(`meta[property='${key}']`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", key);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", value);
    });

    // Update Twitter meta tags
    const twitterMeta = buildTwitterMeta(seo);
    Object.entries(twitterMeta).forEach(([key, value]) => {
      let meta = document.querySelector(`meta[property='${key}']`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", key);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", value);
    });

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [page]);
};
