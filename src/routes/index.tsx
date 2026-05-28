import { createFileRoute } from "@tanstack/react-router";
import heroLagoa from "@/assets/hero-lagoa.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import regionPraiaSeca from "@/assets/region-praia-seca.jpg";
import regionAraruama from "@/assets/region-araruama.jpg";
import regionIguabinha from "@/assets/region-iguabinha.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zuleika Imóveis — Alto padrão na Região dos Lagos, RJ" },
      {
        name: "description",
        content:
          "Curadoria exclusiva de imóveis em Araruama, Praia Seca e Iguabinha. Atendimento humanizado, segurança jurídica e experiência premium.",
      },
      { property: "og:title", content: "Zuleika Imóveis — Alto padrão na Região dos Lagos" },
      {
        property: "og:description",
        content:
          "Curadoria exclusiva de imóveis em Araruama, Praia Seca e Iguabinha. Experiência premium para quem busca qualidade de vida.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=JetBrains+Mono:wght@400&display=swap",
      },
    ],
  }),
  component: Index,
});

const properties = [
  {
    title: "Refúgio Contemporâneo",
    location: "Praia Seca, Araruama",
    price: "R$ 1.250.000",
    fee: "Cond. R$ 450",
    bedrooms: "4 quartos",
    area: "220 m²",
    parking: "3 vagas",
    image: property1,
    badges: ["Destaque", "Novo"],
  },
  {
    title: "Villa da Lagoa",
    location: "Iguabinha, Araruama",
    price: "R$ 890.000",
    fee: "Cond. R$ 320",
    bedrooms: "3 quartos",
    area: "180 m²",
    parking: "2 vagas",
    image: property2,
    badges: ["Vista lagoa"],
  },
  {
    title: "Horizonte Residencial",
    location: "Centro, Araruama",
    price: "R$ 650.000",
    fee: "Cond. R$ 680",
    bedrooms: "2 quartos",
    area: "110 m²",
    parking: "1 vaga",
    image: property3,
    badges: ["Exclusivo"],
  },
];

const pillars = [
  {
    title: "Segurança jurídica",
    body: "Verificação rigorosa de documentos e assessoria completa em cada etapa da negociação.",
  },
  {
    title: "Expertise local",
    body: "Mais de duas décadas conhecendo cada esquina da Região dos Lagos e do mercado fluminense.",
  },
  {
    title: "Atendimento humano",
    body: "Consultoria personalizada via WhatsApp, do primeiro contato à entrega das chaves.",
  },
];

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground font-sans">
      <Nav />
      <main>
        <Hero />
        <Featured />
        <Pillars />
        <Region />
        <CtaWhatsapp />
      </main>
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <a href="/" className="flex items-baseline gap-1" aria-label="Zuleika Imóveis">
      <span className="font-display text-2xl tracking-tight text-primary">Zuleika</span>
      <span className="font-display text-2xl italic text-foreground/70">.</span>
    </a>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/75 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />
          <div className="hidden md:flex gap-7 text-sm font-medium text-muted-foreground">
            <a href="#destaques" className="hover:text-primary transition-colors">Comprar</a>
            <a href="#destaques" className="hover:text-primary transition-colors">Alugar</a>
            <a href="#destaques" className="hover:text-primary transition-colors">Lançamentos</a>
            <a href="#regiao" className="hover:text-primary transition-colors">A Região</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-full hover:bg-sand transition-colors">
            Anunciar imóvel
          </button>
          <a
            href="https://wa.me/5522999999999"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full hover:shadow-elegant transition-all"
          >
            <WhatsIcon />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative px-4 sm:px-6 pt-6 pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden shadow-elegant">
          <img
            src={heroLagoa}
            alt="Vista aérea da Lagoa de Araruama ao entardecer com águas turquesas e dunas brancas"
            width={1920}
            height={1080}
            className="w-full h-[520px] sm:h-[640px] object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />

          <div className="absolute top-0 left-0 right-0 p-8 sm:p-12 flex items-start justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
              Região dos Lagos · RJ
            </span>
          </div>

          <div className="absolute bottom-32 sm:bottom-40 left-0 right-0 px-8 sm:px-12">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white text-balance leading-[1.05] max-w-3xl animate-reveal">
              Encontre sua <span className="italic font-medium">serenidade</span><br />
              à beira da lagoa.
            </h1>
          </div>

          {/* Search */}
          <div className="absolute bottom-6 left-4 right-4 sm:left-8 sm:right-8 animate-reveal" style={{ animationDelay: "150ms" }}>
            <div className="mx-auto max-w-4xl bg-background/95 backdrop-blur-xl rounded-2xl shadow-float ring-1 ring-black/5 p-2 flex flex-col md:flex-row gap-1">
              <SearchField label="Localização">
                <select className="w-full bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
                  <option>Toda a Região dos Lagos</option>
                  <option>Araruama — Centro</option>
                  <option>Praia Seca</option>
                  <option>Iguabinha</option>
                </select>
              </SearchField>
              <Divider />
              <SearchField label="Tipo de imóvel">
                <select className="w-full bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
                  <option>Casa de praia</option>
                  <option>Apartamento</option>
                  <option>Terreno</option>
                  <option>Condomínio</option>
                </select>
              </SearchField>
              <Divider />
              <SearchField label="Quartos">
                <select className="w-full bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
                  <option>Indiferente</option>
                  <option>2+ quartos</option>
                  <option>3+ quartos</option>
                  <option>4+ quartos</option>
                </select>
              </SearchField>
              <Divider />
              <SearchField label="Valor">
                <select className="w-full bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
                  <option>Sem limite</option>
                  <option>Até R$ 500 mil</option>
                  <option>Até R$ 1 milhão</option>
                  <option>Até R$ 2 milhões</option>
                </select>
              </SearchField>
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform whitespace-nowrap">
                Buscar imóveis
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-2xl animate-reveal" style={{ animationDelay: "300ms" }}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Curadoria exclusiva de imóveis em Araruama, Praia Seca e Iguabinha.
            Experiência premium para quem busca qualidade de vida e pés na areia.
          </p>
        </div>
      </div>
    </section>
  );
}

function SearchField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex-1 px-4 py-2.5 text-left rounded-xl hover:bg-sand/60 transition-colors cursor-pointer">
      <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-0.5">
        {label}
      </span>
      {children}
    </label>
  );
}
function Divider() {
  return <div className="hidden md:block w-px h-10 bg-border self-center" />;
}

function Featured() {
  return (
    <section id="destaques" className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-14">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-3 block">
              Seleção curada
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-balance">Imóveis em destaque</h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Ver todos os imóveis
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-sand mb-5">
                <img
                  src={p.image}
                  alt={`${p.title} em ${p.location}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {p.badges.map((b, i) => (
                    <span
                      key={b}
                      className={
                        i === 0
                          ? "px-3 py-1 bg-background/95 backdrop-blur-md rounded-full text-[10px] font-semibold uppercase tracking-wide"
                          : "px-3 py-1 bg-primary/95 backdrop-blur-md text-primary-foreground rounded-full text-[10px] font-semibold uppercase tracking-wide"
                      }
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-semibold text-lg leading-tight">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{p.location}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-semibold text-primary">{p.price}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-0.5">
                    {p.fee}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex gap-4 text-[12px] font-mono text-muted-foreground">
                <span>{p.bedrooms}</span>
                <span>·</span>
                <span>{p.area}</span>
                <span>·</span>
                <span>{p.parking}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-3 block">
              Por que Zuleika
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-balance leading-[1.1]">
              Mais de duas décadas <em className="italic">cuidando</em> de cada negociação.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Combinamos conhecimento profundo da Região dos Lagos com um padrão de
              atendimento que faz a diferença em cada detalhe.
            </p>
            <div className="mt-10 flex gap-12">
              <Stat value="25+" label="Anos de experiência" />
              <Stat value="1.500+" label="Imóveis negociados" />
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="bg-card border border-border rounded-2xl p-7 shadow-elegant hover:shadow-float transition-shadow"
                style={{ marginTop: i === 1 ? "2rem" : i === 2 ? "4rem" : 0 }}
              >
                <div className="size-10 rounded-xl bg-sand text-primary grid place-items-center mb-6 font-mono text-sm">
                  0{i + 1}
                </div>
                <h3 className="font-semibold text-base mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl text-primary tracking-tight">{value}</p>
      <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
}

function Region() {
  return (
    <section id="regiao" className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-3 block">
            Viver na Região dos Lagos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-balance leading-[1.1]">
            O lugar onde o <em className="italic">tempo</em> desacelera.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Praias de águas calmas, lagoas cristalinas e infraestrutura completa, a poucas
            horas do Rio. Um dos investimentos imobiliários que mais valorizam no estado.
          </p>
        </div>

        <div className="grid sm:grid-cols-4 sm:grid-rows-2 gap-4 h-auto sm:h-[600px]">
          <div className="sm:col-span-2 sm:row-span-2 relative rounded-3xl overflow-hidden bg-sand group h-80 sm:h-auto">
            <img
              src={regionPraiaSeca}
              alt="Vista aérea da península de Praia Seca"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
                Bairro
              </span>
              <h3 className="font-display text-3xl italic mt-2 mb-2">Praia Seca</h3>
              <p className="text-sm text-white/80 max-w-xs">
                O paraíso do kitesurf — entre o mar aberto e a lagoa, dunas brancas e
                comunidade acolhedora.
              </p>
            </div>
          </div>

          <div className="sm:col-span-2 relative rounded-3xl overflow-hidden bg-sand h-64 sm:h-auto">
            <img
              src={regionAraruama}
              alt="Pôr do sol na lagoa de Araruama"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 p-8 flex flex-col justify-center text-white">
              <h3 className="font-display text-2xl mb-1">Centro de Araruama</h3>
              <p className="text-xs uppercase tracking-[0.18em] text-white/80">
                Conveniência urbana à beira d'água
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-sand h-48 sm:h-auto">
            <img
              src={regionIguabinha}
              alt="Águas calmas e areia branca em Iguabinha"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-display text-xl text-primary">Iguabinha</h3>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                Águas calmas
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-8 flex flex-col justify-between h-48 sm:h-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
              Investimento
            </span>
            <p className="font-display text-2xl leading-tight">
              Valorização consistente <em className="italic opacity-80">ano após ano</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaWhatsapp() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="relative bg-primary text-primary-foreground rounded-[2.5rem] p-10 sm:p-16 lg:p-20 overflow-hidden">
          <div className="absolute -top-24 -right-24 size-80 rounded-full bg-white/5" />
          <div className="absolute -bottom-32 -left-16 size-72 rounded-full bg-white/5" />
          <div className="relative max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">
              Atendimento exclusivo
            </span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-[1.1] text-balance">
              Pronto para encontrar <em className="italic opacity-90">o seu lugar</em>?
            </h2>
            <p className="mt-6 opacity-80 leading-relaxed">
              Nossos consultores estão prontos para conversar com você no WhatsApp,
              entender seu momento e apresentar oportunidades sob medida.
            </p>
            <a
              href="https://wa.me/5522999999999"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-background text-primary px-8 py-4 rounded-full font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-float"
            >
              <WhatsIcon />
              Falar com um consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Referência em transações imobiliárias na Região dos Lagos.
              Transparência, ética e exclusividade em cada negociação.
            </p>
          </div>
          <FooterCol title="Navegação" links={["Imóveis à venda", "Locação", "Lançamentos", "Anunciar"]} />
          <FooterCol title="Zuleika" links={["Sobre nós", "Blog regional", "Carreiras", "Contato"]} />
          <div className="md:col-span-3">
            <h5 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-5">
              Newsletter
            </h5>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Receba as melhores oportunidades selecionadas no seu e-mail.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="seu@email.com"
                aria-label="E-mail"
                className="flex-1 bg-sand px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
                aria-label="Assinar newsletter"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
          <span>© 2026 Zuleika Imóveis · Todos os direitos reservados</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">Facebook</a>
            <a href="#" className="hover:text-primary">CRECI 00000-J</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="md:col-span-2">
      <h5 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-5">
        {title}
      </h5>
      <ul className="space-y-3 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-primary transition-colors">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhatsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.4-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.2 3.4 5.4 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 2 .1.6-.1 1.8-.7 2-1.5.2-.7.2-1.4.2-1.5-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.5.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
  );
}
