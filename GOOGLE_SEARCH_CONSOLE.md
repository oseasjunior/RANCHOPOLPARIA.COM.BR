# Google Search Console - Guia de Submissão

## 📌 O que é Google Search Console?

Google Search Console é uma ferramenta gratuita do Google que ajuda você a monitorar e manter a presença de seu site nos resultados de busca.

---

## 🚀 Passo 1: Acessar o Google Search Console

1. Acesse: https://search.google.com/search-console
2. Faça login com sua conta Google
3. Clique em **+ Adicionar propriedade**

---

## 🏠 Passo 2: Adicionar Propriedade (Domínio)

### Opção A: Domínio (Recomendado)
```
Digite seu domínio: ranchopolparia.com.br
```

### Opção B: URL Prefix
```
Digite: https://www.ranchopolparia.com.br
```

---

## ✅ Passo 3: Verificar Propriedade

### Método 1: Arquivo HTML (Mais fácil para desenvolvedores)
1. Baixe o arquivo `google*.html` fornecido
2. Coloque na raiz pública: `public/google*.html`
3. Clique em **Verificar** no Search Console

### Método 2: Meta Tag (Para SPA React)
1. Copie a meta tag fornecida
2. Adicione ao `index.html`:
```html
<meta name="google-site-verification" content="sua-chave-aqui" />
```

### Método 3: Registro DNS (Se você tem acesso)
1. Acesse seu registrador de domínio
2. Adicione o registro TXT fornecido

---

## 📋 Passo 4: Submeter Sitemap

1. No Search Console, clique em **Sitemap** (no menu esquerdo)
2. Cole o URL: `https://www.ranchopolparia.com.br/sitemap.xml`
3. Clique em **Enviar**

O Google verificará seu sitemap em:
- Status de cobertura
- URLs com erro
- Páginas indexadas

---

## 🔗 Passo 5: Requisitar Indexação

### Para Testar (Primeiras 50 URLs por dia)
1. Abra o **Search Inspector** (no topo)
2. Cole a URL: `https://www.ranchopolparia.com.br/`
3. Clique em **Requisitar indexação**

### Aguarde:
- Google verificará sua página
- Processará em horas/dias
- Você verá status na aba **Cobertura**

---

## 📊 Seções Importantes do Search Console

### 1. **Cobertura**
Mostra:
- ✅ URLs indexadas com sucesso
- ⚠️ URLs com advertência
- ❌ URLs com erro
- 📌 URLs excluídas

### 2. **Performance**
Métricas:
- **Cliques**: Quantas vezes seu site foi clicado nos resultados
- **Impressões**: Quantas vezes seu site apareceu
- **CTR**: Click-through rate (cliques ÷ impressões)
- **Posição média**: Ranking médio nos resultados

### 3. **URL Inspection**
- Verifica se uma URL específica está indexada
- Simula crawl do Googlebot
- Mostra versão móvel e desktop

### 4. **Sitemap**
- Status do sitemap
- Quantidade de URLs
- Data da última análise

### 5. **Mobile Usability**
- Problemas de usabilidade móvel
- Core Web Vitals
- AMP issues (se aplicável)

---

## ⚙️ Configurações Recomendadas

### 1. Preferências do Site
```
Domínio preferido: www.ranchopolparia.com.br
ou: ranchopolparia.com.br
```

### 2. Crawler e Indexação
```
Taxa de rastreamento: Normal (deixe no automático)
Parâmetros de URL: Não remova (deixe vazio)
```

### 3. Privacidade
```
Deixe como público (você quer aparecer nas buscas!)
```

---

## 🔔 Monitoramento Contínuo

### Checklist Semanal:
- [ ] Verificar novos erros de cobertura
- [ ] Checar CTR das principais keywords
- [ ] Revisar posições de ranking
- [ ] Verificar Core Web Vitals

### Checklist Mensal:
- [ ] Submeter novos conteúdos
- [ ] Revisar relatório de performance
- [ ] Otimizar URLs com baixo CTR
- [ ] Analisar impressões vs cliques

---

## 🛠️ Troubleshooting

### ❌ URLs não aparecem em "Indexada"

**Causas:**
1. Google ainda não rastreou (normal nos primeiros dias)
2. robots.txt bloqueando
3. Noindex em meta tags
4. Conteúdo duplicado

**Solução:**
```
1. Verifique robots.txt (public/robots.txt)
2. Verifique meta tags no index.html
3. Requisite indexação manualmente
4. Aguarde 1-2 semanas
```

### ⚠️ Aviso: "Enviado, mas não indexado"

**Solução:**
1. Verifique se o site é acessível publicamente
2. Certifique-se que não há redirect
3. Verifique erros de conteúdo
4. Submeta novamente em alguns dias

### 🔴 Erros de Crawl

**Verificar:**
1. Servidor online e respondendo
2. SSL/HTTPS funcionando
3. Sitemap.xml válido
4. Sem bloqueios de IP

---

## 📈 Melhorando Rankings

### Fatores de Ranking do Google:
1. **Qualidade do Conteúdo** ⭐⭐⭐⭐⭐ (Prioridade)
2. **Backlinks** ⭐⭐⭐⭐
3. **Core Web Vitals** ⭐⭐⭐⭐
4. **Mobile-friendly** ⭐⭐⭐⭐
5. **HTTPS** ⭐⭐⭐
6. **Meta tags** ⭐⭐⭐
7. **Estrutura do site** ⭐⭐⭐

### Ações para Melhorar:
```
1. Criar conteúdo relevante e útil
2. Otimizar para keywords (pesquisa: Google Keyword Planner)
3. Melhorar Core Web Vitals (LCP, FID, CLS)
4. Adicionar backlinks internos
5. Manter site rápido (Lighthouse)
6. Usar schema.org estruturado
7. Atualizar conteúdo regularmente
```

---

## 🔗 Links Úteis

- Google Search Console: https://search.google.com/search-console
- Google Search Central: https://developers.google.com/search
- Core Web Vitals: https://web.dev/vitals/
- PageSpeed Insights: https://pagespeed.web.dev/
- Structured Data Test: https://search.google.com/structured-data/testing-tool
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

---

## 💡 Dicas Finais

1. **Paciência**: Ranking leva semanas/meses
2. **Qualidade primeiro**: Conteúdo > Meta tags
3. **Monitore**: Use GSC regularmente
4. **Atualize**: Conteúdo novo = melhor ranking
5. **Links**: Procure oportunidades de backlinks
6. **Local**: Se for negócio local, use Google My Business
7. **Analytics**: Combine com Google Analytics para insights

---

## 🎯 Próximas Etapas

Após submeter o sitemap:

1. **Dia 1-3**: Google encontra e rastreia
2. **Dia 3-7**: URLs começam a aparecer em "Indexada"
3. **Semana 1-2**: Primeiras impressões nos resultados
4. **Semana 2-4**: Rankings começam a se estabilizar
5. **Mês 1-3**: Picos de tráfego para palavras-chave

---

**Dúvidas?** Acesse a Central de Ajuda do Google: https://support.google.com/webmasters/
