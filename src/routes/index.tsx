import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-tsokolate.jpg";
import makerImg from "@/assets/maker.jpg";
import prodTraditional from "@/assets/product-traditional.jpg";
import prodPure from "@/assets/product-pure.jpg";
import prodTsokolate from "@/assets/product-tsokolate.jpg";
import cacaoImg from "@/assets/cacao-beans.jpg";
import boholImg from "@/assets/bohol.jpg";

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
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-serif text-lg">A</span>
          <div className="leading-tight">
            <div className="font-serif text-lg text-primary">Aj's Tablea</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Bohol · Philippines</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          <a href="#story" className="hover:text-primary transition">Our Story</a>
          <a href="#products" className="hover:text-primary transition">Products</a>
          <a href="#prepare" className="hover:text-primary transition">How to Prepare</a>
          <a href="#why" className="hover:text-primary transition">Why Us</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>
        <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm hover:bg-primary/90 transition">
          Order Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="fade-up">
          <div className="divider-leaf text-xs uppercase tracking-[0.3em] font-sans">
            <span>Heritage · Bohol</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl text-primary text-balance leading-[1.05]">
            Handcrafted Tablea
            <span className="block italic text-accent">from the Heart of Bohol</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Traditional Filipino chocolate made with care, family heritage, and homemade craftsmanship —
            one batch at a time, by hands that remember.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition shadow-lg shadow-primary/20">
              Order Now
            </a>
            <a href="#story" className="inline-flex items-center rounded-full border border-primary/30 text-primary px-7 py-3.5 text-sm tracking-wide hover:bg-primary/5 transition">
              Learn Our Story
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>100% Homemade</span>
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>Family Recipe</span>
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>Pure Cacao</span>
          </div>
        </div>

        <div className="relative fade-up" style={{ animationDelay: "200ms" }}>
          <div className="absolute -inset-6 weave-pattern rounded-[2.5rem] opacity-40" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/30 grain">
            <Steam />
            <img
              src={heroImg}
              alt="Steaming Filipino tsokolate with handmade tablea discs"
              width={1536}
              height={1536}
              className="w-full h-[560px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl px-5 py-4 shadow-xl max-w-[220px]">
            <p className="font-script text-2xl text-accent leading-none">"Para sa pamilya"</p>
            <p className="mt-1 text-xs text-muted-foreground">Made with love, like Lola used to.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative">
          <div className="absolute -inset-4 weave-pattern rounded-3xl opacity-30" />
          <div className="relative rounded-3xl overflow-hidden shadow-xl grain">
            <img src={makerImg} alt="The maker forming tablea by hand" loading="lazy" width={1024} height={1280} className="w-full h-[600px] object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden md:block w-40 h-40 rounded-full overflow-hidden border-8 border-background shadow-xl">
            <img src={cacaoImg} alt="Cacao beans" loading="lazy" width={400} height={400} className="w-full h-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="divider-leaf text-xs uppercase tracking-[0.3em]"><span>Our Story</span></p>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl text-primary text-balance">Meet the Maker</h2>
          <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed text-lg">
            <p>
              A full-time elementary teacher and a passionate maker of homemade tablea, our mother continues
              a family tradition passed down from our grandmother. Despite her busy schedule, she still finds
              joy in carefully preparing each batch by hand.
            </p>
            <p>
              For her, tablea is not just a product. It is a reminder of family, heritage, and the simple
              comfort of traditional Filipino hot chocolate.
            </p>
          </div>
          <p className="mt-8 font-script text-3xl text-accent">— Alma O. Ybañez</p>
        </Reveal>
      </div>
    </section>
  );
}

const products = [
  { img: prodTraditional, name: "Traditional Tablea", tag: "Classic", desc: "Stone-ground cacao shaped into time-honored discs — earthy, rich, and deeply nostalgic." },
  { img: prodPure, name: "Pure Cacao Tablea", tag: "100% Cacao", desc: "Single-origin Bohol cacao, unsweetened and bold. The purest taste of the bean." },
  { img: prodTsokolate, name: "Homemade Tsokolate", tag: "Ready to Drink", desc: "Frothy, comforting, batirol-whisked Filipino hot chocolate ready to warm your morning." },
];

function Products() {
  return (
    <section id="products" className="relative py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="divider-leaf text-xs uppercase tracking-[0.3em]"><span>Our Craft</span></p>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl text-primary">A Small, Honest Menu</h2>
          <p className="mt-5 text-muted-foreground">Each disc shaped by hand. Each batch made in small numbers, the way it should be.</p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="group bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 bg-background/90 backdrop-blur text-[10px] uppercase tracking-[0.2em] text-primary px-3 py-1.5 rounded-full border border-border">
                    {p.tag}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl text-primary">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center text-sm text-accent hover:text-primary transition">
                    Inquire to order
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Boil", d: "Bring water or milk gently to a boil in your kaldero." },
  { n: "02", t: "Add Tablea", d: "Drop in 1–2 tablea discs per cup." },
  { n: "03", t: "Stir", d: "Whisk with a batirol until fully melted and frothy." },
  { n: "04", t: "Enjoy", d: "Pour into your favorite cup and savor the warmth." },
];

function Prepare() {
  return (
    <section id="prepare" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <img src={boholImg} alt="" loading="lazy" width={1280} height={800} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="divider-leaf text-xs uppercase tracking-[0.3em]"><span>The Ritual</span></p>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl text-primary">How to Prepare</h2>
          <p className="mt-5 text-muted-foreground">A four-step ritual older than memory. Simple, warm, and rewarding.</p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="relative bg-card/80 backdrop-blur border border-border rounded-2xl p-7 h-full hover:border-accent/60 transition">
                <span className="font-serif text-5xl text-accent/70">{s.n}</span>
                <h3 className="mt-3 font-serif text-2xl text-primary">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { i: "🤲", t: "Homemade", d: "Every disc shaped by hand in small batches." },
  { i: "📜", t: "Traditional Recipe", d: "A heritage formula from our grandmother." },
  { i: "🏡", t: "Family Heritage", d: "Inspired by generations of Filipino kitchens." },
  { i: "🤍", t: "Made with Care", d: "Slow, patient, never rushed." },
  { i: "🌱", t: "Authentic Taste", d: "Pure cacao — nothing artificial." },
  { i: "🏝️", t: "From Bohol", d: "Crafted at the heart of the islands." },
];

function Why() {
  return (
    <section id="why" className="relative py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="divider-leaf text-xs uppercase tracking-[0.3em]"><span>Why Aj's</span></p>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl text-primary">Why Choose Aj's Tablea</h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={i * 80}>
              <div className="bg-card border border-border rounded-2xl p-7 h-full hover:shadow-lg transition">
                <div className="text-3xl">{r.i}</div>
                <h3 className="mt-4 font-serif text-xl text-primary">{r.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const contacts = [
  { label: "Facebook", value: "Alma O. Ybañez", href: "https://www.facebook.com/", icon: "f" },
  { label: "Messenger", value: "Alma O. Ybañez", href: "https://m.me/", icon: "m" },
  { label: "Phone", value: "+63 916 255 9546", href: "tel:+639162559546", icon: "☎" },
];

function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <p className="divider-leaf text-xs uppercase tracking-[0.3em]"><span>Get in Touch</span></p>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl text-primary">Order Your Tablea</h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Message us directly to place an order or ask about availability. Each batch is made fresh.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 120}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group block bg-card border border-border rounded-2xl p-7 h-full text-center hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="mx-auto h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center text-xl font-serif group-hover:bg-accent group-hover:text-accent-foreground transition">
                  {c.icon}
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.label}</p>
                <p className="mt-2 font-serif text-xl text-primary">{c.value}</p>
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
    <footer className="relative border-t border-border bg-primary text-primary-foreground">
      <div className="weave-pattern h-2 opacity-50" />
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-accent text-accent-foreground grid place-items-center font-serif text-lg">A</span>
            <div>
              <div className="font-serif text-xl">Aj's Tablea</div>
              <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">Bohol · Philippines</div>
            </div>
          </div>
          <p className="mt-5 text-sm opacity-80 max-w-xs leading-relaxed">
            A small family-run tradition — handcrafting tablea the way our grandmother taught us.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-serif text-lg mb-3">Visit</p>
          <a href="#story" className="block opacity-80 hover:opacity-100">Our Story</a>
          <a href="#products" className="block opacity-80 hover:opacity-100">Products</a>
          <a href="#prepare" className="block opacity-80 hover:opacity-100">How to Prepare</a>
          <a href="#contact" className="block opacity-80 hover:opacity-100">Contact</a>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-serif text-lg mb-3">Reach Us</p>
          <p className="opacity-80">Facebook · Alma O. Ybañez</p>
          <p className="opacity-80">Messenger · Alma O. Ybañez</p>
          <a href="tel:+639162559546" className="block opacity-80 hover:opacity-100">+63 916 255 9546</a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70">
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
