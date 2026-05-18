import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-tsokolate.png";
import makerImg from "@/assets/maker.jpg";
import prodTraditional from "@/assets/product-traditional.png";
import cacaoImg from "@/assets/cacao-beans.jpg";
import boholImg from "@/assets/bohol.jpg";
import logo from "../assets/logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 900ms ease-out ${delay}ms, transform 900ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Steam() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-8 h-32 w-32">
      {[0, 0.8, 1.6, 2.4].map((d, i) => (
        <span
          key={i}
          className="steam"
          style={{
            left: `${30 + i * 12}%`,
            top: "60%",
            animationDelay: `${d}s`,
          }}
        />
      ))}
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-background/75 border-b border-border/70 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Aj's Tablea Logo"
            className="h-10 w-10 rounded-full object-cover shadow-md shadow-primary/30 group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300"
          />
          <div className="leading-tight">
            <div className="font-serif text-lg text-primary font-medium">Aj's Tablea</div>
            <div className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">Bohol · Philippines</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-foreground/80">
          <a href="#story" className="hover:text-primary hover:font-medium transition duration-300">Our Story</a>
          <a href="#products" className="hover:text-primary hover:font-medium transition duration-300">Products</a>
          <a href="#prepare" className="hover:text-primary hover:font-medium transition duration-300">How to Prepare</a>
          <a href="#why" className="hover:text-primary hover:font-medium transition duration-300">Why Us</a>
          <a href="#contact" className="hover:text-primary hover:font-medium transition duration-300">Contact</a>
        </nav>
        <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 tracking-wide">
          Order Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="fade-up">
          <div className="divider-leaf text-[11px] uppercase tracking-[0.35em] font-semibold">
            <span> OUR · Kabilin</span>
          </div>
          <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl text-primary text-balance leading-[1.08] font-semibold">
            Handcrafted Tablea
            <span className="block italic text-accent font-normal mt-2">from Inabanga Bohol</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed font-light">
Traditional Filipino chocolate made with love and care, just like how our lolas used to make it, one batch at a time.          </p>
          <div className="mt-12 flex flex-wrap gap-5">
            <a href="#contact" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 shadow-lg shadow-primary/20">
              Order Now
            </a>
            <a href="#story" className="inline-flex items-center rounded-full border-2 border-primary/40 text-primary px-8 py-4 text-sm font-semibold tracking-wide hover:border-primary hover:bg-primary/5 transition-all duration-300">
              Learn Our Story
            </a>
          </div>
          <div className="mt-14 flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
            <span>100% Homemade</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
            <span>Family Recipe</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
            <span>Pure Cacao</span>
          </div>
        </div>

        <div className="relative fade-up" style={{ animationDelay: "200ms" }}>
          <div className="absolute -inset-8 weave-pattern rounded-[2.5rem] opacity-50" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/35 grain">
            <Steam />
            <img
              src={heroImg}
              alt="Steaming Filipino tsokolate with handmade tablea discs"
              width={1536}
              height={1536}
              className="w-full h-[560px] object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-card border-2 border-primary/20 rounded-2xl px-6 py-5 shadow-xl shadow-primary/15 max-w-[240px] backdrop-blur-sm">
            <p className="font-script text-3xl text-accent leading-none font-normal">&#8220;Para sa pamilya&#8221;</p>
            <p className="mt-2 text-xs text-muted-foreground font-medium">Made with love, like Lola used to.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="relative py-32 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-20 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -inset-6 weave-pattern rounded-3xl opacity-40" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/25 grain">
            <img src={makerImg} alt="The maker forming tablea by hand" loading="lazy" width={1024} height={1280} className="w-full h-[600px] object-cover" />
          </div>
          <div className="absolute -bottom-10 -right-4 hidden md:block w-44 h-44 rounded-full overflow-hidden border-8 border-background shadow-2xl shadow-primary/20">
            <img src={cacaoImg} alt="Cacao beans" loading="lazy" width={400} height={400} className="w-full h-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={150} className="order-1 lg:order-2">
          <p className="divider-leaf text-[11px] uppercase tracking-[0.35em] font-semibold"><span>Our Story</span></p>
          <h2 className="mt-8 font-serif text-4xl sm:text-5xl text-primary text-balance font-semibold">Meet the Maker</h2>
          <div className="mt-10 space-y-6 text-foreground/85 leading-relaxed text-lg font-light">
            <p>
             A full-time elementary teacher and a passionate maker of homemade tablea, our mother continues a family tradition, a kabilin passed down from our grandmother. Despite her busy schedule, she still finds joy in carefully preparing each batch by hand.
            For her, tablea is not just a product or a way to earn extra income. It is a reminder of family, love, and the simple comfort of traditional Filipino tablea.
            </p>
          </div>
          <p className="mt-10 font-script text-4xl text-accent font-normal">— Alma O. Ybañez</p>
        </Reveal>
      </div>
    </section>
  );
}

const product = {
  img: prodTraditional,
  label: "Traditional",
  name: "Traditional Homemade Tablea",
  desc: "Stone-ground cacao shaped into rich, earthy discs. Made by hand in small batches, with the same care passed down from our lola.",
};

function Products() {
  return (
    <section id="products" className="relative py-32 lg:py-36 bg-secondary/25">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="divider-leaf text-[11px] uppercase tracking-[0.35em] font-semibold"><span>Our Craft</span></p>
          <h2 className="mt-8 font-serif text-4xl sm:text-5xl text-primary font-semibold">Our Homemade Tablea</h2>
          <p className="mt-6 text-muted-foreground text-lg font-light leading-relaxed">One traditional recipe, handmade in small batches from cacao, just like our family has always made it.</p>
        </Reveal>

        <div className="mt-20 max-w-2xl mx-auto">
          <Reveal delay={120}>
            <article className="group bg-card border-2 border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500">
              <div className="relative overflow-hidden">
                <img src={product.img} alt={product.name} loading="lazy" width={1024} height={1024} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-5 left-5 bg-background/95 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] text-primary px-4 py-2 rounded-full border-2 border-border font-semibold">
                  {product.label}
                </span>
              </div>
              <div className="p-10 text-center">
                <h3 className="font-serif text-3xl text-primary font-semibold">{product.name}</h3>
                <p className="mt-5 text-muted-foreground leading-relaxed font-light max-w-md mx-auto">{product.desc}</p>
                <a href="#contact" className="mt-8 inline-flex items-center rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 shadow-lg shadow-primary/20">
                  Inquire to order
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const recipes = [
  {
    title: "Traditional Sikwate",
    subtitle: "Simple, warm, and rewarding.",
    steps: [
      { n: "01", t: "Boil", d: "Bring water or milk gently to a boil in your kaldero." },
      { n: "02", t: "Add Tablea", d: "Drop in 1–2 tablea discs per cup." },
      { n: "03", t: "Stir", d: "Whisk with a batirol until fully melted and frothy." },
      { n: "04", t: "Enjoy", d: "Pour into your favorite cup and savor the warmth." },
    ],
  },
  {
    title: "Iced Tablea Drink",
    subtitle: "Cold, rich, and refreshing.",
    steps: [
      { n: "01", t: "Melt Tablea", d: "Mix melted tablea with hot water until smooth." },
      { n: "02", t: "Add Milk", d: "Pour in cold milk and stir well." },
      { n: "03", t: "Add Ice", d: "Fill the glass with ice cubes." },
      { n: "04", t: "Serve", d: "Enjoy your chilled homemade chocolate drink." },
    ],
  },
];

function Prepare() {
  return (
    <section id="prepare" className="relative py-32 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-25">
        <img src={boholImg} alt="" loading="lazy" width={1280} height={800} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background/90" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="divider-leaf text-[11px] uppercase tracking-[0.35em] font-semibold"><span>Recipes</span></p>
          <h2 className="mt-8 font-serif text-4xl sm:text-5xl text-primary font-semibold">How to Prepare</h2>
          <p className="mt-6 text-muted-foreground text-lg font-light leading-relaxed">Two ways to enjoy our homemade tablea. Choose your warmth.</p>
        </Reveal>

        <div className="mt-20 space-y-24">
          {recipes.map((recipe, ri) => (
            <div key={recipe.title}>
              <Reveal delay={ri * 80}>
                <div className="text-center mb-10">
                  <h3 className="font-serif text-2xl sm:text-3xl text-primary font-semibold">{recipe.title}</h3>
                  <p className="mt-3 text-muted-foreground text-base font-light">{recipe.subtitle}</p>
                </div>
              </Reveal>
              <div className="grid md:grid-cols-4 gap-8">
                {recipe.steps.map((s, i) => (
                  <Reveal key={`${recipe.title}-${s.n}`} delay={i * 100 + ri * 80}>
                    <div className="relative bg-card/90 backdrop-blur-sm border-2 border-border rounded-2xl p-8 h-full hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                      <span className="font-serif text-6xl text-accent/60 font-light">{s.n}</span>
                      <h4 className="mt-4 font-serif text-2xl text-primary font-semibold">{s.t}</h4>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-light">{s.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { n: "01", t: "Homemade", d: "Every disc shaped by hand in small batches." },
  { n: "02", t: "Traditional Recipe", d: "A heritage formula from our grandmother." },
  { n: "03", t: "Family Heritage", d: "Inspired by generations of Filipino kitchens." },
  { n: "04", t: "Made with Care", d: "Slow, patient, never rushed." },
  { n: "05", t: "Authentic Taste", d: "Pure cacao — nothing artificial." },
  { n: "06", t: "From Bohol", d: "Crafted at the heart of the islands." },
];

function Why() {
  return (
    <section id="why" className="relative py-32 lg:py-36 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="divider-leaf text-[11px] uppercase tracking-[0.35em] font-semibold"><span>Why Aj's</span></p>
          <h2 className="mt-8 font-serif text-4xl sm:text-5xl text-primary font-semibold">Why Choose Aj's Tablea</h2>
        </Reveal>
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={i * 80}>
              <div className="bg-card border-2 border-border rounded-2xl p-8 h-full hover:border-accent/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                <span className="font-serif text-2xl tracking-[0.15em] text-accent/90 font-bold">
                  {r.n}
                </span>                
                <div className="mt-4 h-px w-10 bg-accent/40" />
                <h3 className="mt-5 font-serif text-xl text-primary font-semibold">{r.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-light">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const contacts = [
  { label: "Facebook", value: "Alma O. Ybañez", href: "https://www.facebook.com/alma.ybanez", icon: "f" },
  { label: "Messenger", value: "Alma O. Ybañez", href: "https://m.me/", icon: "m" },
  { label: "Phone", value: "+63 916 255 9546", href: "tel:+639162559546", icon: "☎" },
];

function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <p className="divider-leaf text-[11px] uppercase tracking-[0.35em] font-semibold"><span>Get in Touch</span></p>
          <h2 className="mt-8 font-serif text-4xl sm:text-5xl text-primary font-semibold">Order Your Tablea</h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-lg font-light leading-relaxed">
            Message us directly to place an order or ask about availability. Each batch is made fresh.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 120}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group block bg-card border-2 border-border rounded-2xl p-8 h-full text-center hover:border-accent hover:shadow-2xl hover:shadow-accent/15 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground grid place-items-center text-2xl font-serif font-semibold group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300">
                  {c.icon}
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">{c.label}</p>
                <p className="mt-3 font-serif text-xl text-primary font-semibold">{c.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t-2 border-border bg-primary text-primary-foreground">
      <div className="weave-pattern h-3 opacity-60" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-14 items-start">
        <div>
          <div className="flex items-center gap-3">
                        <img
              src={logo}
              alt="Aj's Tablea Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <div className="font-serif text-xl font-semibold">Aj's Tablea</div>
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-75 font-semibold">Bohol · Philippines</div>
            </div>
          </div>
          <p className="mt-6 text-sm opacity-85 max-w-xs leading-relaxed font-light">
            A small family-run tradition — handcrafting tablea the way our grandmother taught us.
          </p>
        </div>
        <div className="text-sm space-y-3">
          <p className="font-serif text-lg font-semibold mb-4">Visit</p>
          <a href="#story" className="block opacity-80 hover:opacity-100 font-light transition">Our Story</a>
          <a href="#products" className="block opacity-80 hover:opacity-100 font-light transition">Products</a>
          <a href="#prepare" className="block opacity-80 hover:opacity-100 font-light transition">How to Prepare</a>
          <a href="#contact" className="block opacity-80 hover:opacity-100 font-light transition">Contact</a>
        </div>
        <div className="text-sm space-y-3">
          <p className="font-serif text-lg font-semibold mb-4">Reach Us</p>
          <p className="opacity-80 font-light">Facebook · Alma O. Ybañez</p>
          <p className="opacity-80 font-light">Messenger · Alma O. Ybañez</p>
          <a href="tel:+639162559546" className="block opacity-80 hover:opacity-100 font-light transition">+63 916 255 9546</a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-6 text-center text-xs opacity-70 font-light">
        © {new Date().getFullYear()} Aj's Tablea · Made with love in Bohol 🤎
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Story />
      <Products />
      <Prepare />
      <Why />
      <Contact />
      <Footer />
    </main>
  );
}
