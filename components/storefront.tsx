"use client";

import type { Ref } from "react";
import { useCallback, useMemo, useRef, useState } from "react";
import { CartDrawer } from "@/components/cart-drawer";
import { CartProvider, useCart } from "@/components/cart-provider";
import {
  IconArrowDown,
  IconArrowRight,
  IconCheck,
  IconChevronDown,
  IconSearch,
} from "@/components/icons";
import { ProductArt } from "@/components/product-art";
import { ProductCard } from "@/components/product-card";
import { QuickView } from "@/components/quick-view";
import { SiteHeader } from "@/components/site-header";
import {
  CATEGORIES,
  type Category,
  formatPrice,
  type Product,
  products,
} from "@/lib/products";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

const TICKER_ITEMS = [
  "Small batch",
  "Natural materials",
  "Free shipping over $150",
  "30-day returns",
  "Made to be repaired",
  "Carbon-neutral delivery",
];

const STATS = [
  { value: "24", label: "independent makers" },
  { value: "9", label: "countries" },
  { value: "0", label: "shortcuts taken" },
  { value: "100%", label: "recyclable packaging" },
];

function Announcement() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS].map((label, i) => ({
    label,
    id: `ann-${label}-${i}`,
  }));
  return (
    <div className="overflow-hidden bg-ink py-2.5 text-bone" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-8">
        {items.map((item) => (
          <span
            key={item.id}
            className="label-uppercase flex items-center gap-8 whitespace-nowrap text-bone/85"
          >
            {item.label}
            <span className="text-clay" aria-hidden="true">
              ✳
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function RotatingBadge() {
  return (
    <div className="relative h-28 w-28 animate-[spin_22s_linear_infinite]">
      <svg
        viewBox="0 0 120 120"
        className="h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <path
            id="badge-arc"
            d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
            fill="none"
          />
        </defs>
        <text
          className="fill-current font-sans"
          fontSize="10.5"
          letterSpacing="2.5"
        >
          <textPath href="#badge-arc">
            SMALL BATCH · MADE SLOWLY · SINCE 2019 ·
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center text-clay">
        <span className="font-display text-3xl not-italic">✳</span>
      </span>
    </div>
  );
}

function Hero() {
  const featured = products.find((p) => p.id === "dune-lamp");
  return (
    <section className="relative px-5 pb-20 pt-12 sm:px-8 lg:px-12 lg:pt-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-end gap-12 lg:grid-cols-12">
        <div className="relative z-10 lg:col-span-7">
          <p className="label-uppercase flex items-center gap-3 text-muted">
            <span
              className="inline-block h-px w-10 bg-ink/40"
              aria-hidden="true"
            />
            Objects for the everyday
          </p>
          <h1 className="mt-5 font-display text-[clamp(4rem,11vw,9.5rem)] leading-[0.83] tracking-[-0.035em]">
            Every piece
            <br />
            earns its
            <br />
            <em className="italic text-clay">place.</em>
          </h1>
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[38ch] text-[16px] leading-relaxed text-ink/75">
              Loam is a small shop for small-batch objects — stoneware, oak and
              linen made by people whose names we can tell you.
            </p>
            <a
              href="#shop"
              className="group inline-flex h-12 items-center gap-3 self-start rounded-full border border-ink bg-ink px-6 text-bone transition-colors hover:bg-clay hover:border-clay fade-up"
              style={{ animationDelay: "120ms" }}
            >
              <span className="label-uppercase">Shop the collection</span>
              <IconArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:pb-6">
          <div className="relative ml-auto aspect-[4/5] w-full max-w-[460px] art-grain">
            <div className="absolute inset-0">
              <ProductArt variant="dune-lamp" />
            </div>
            {featured && (
              <div className="absolute bottom-4 left-4 max-w-[240px] border border-ink/10 bg-bone/95 p-4 shadow-[0_18px_40px_-18px_rgba(20,15,8,0.4)]">
                <p className="label-uppercase text-muted">Nº 02 — Lighting</p>
                <p className="mt-1 font-display text-[1.35rem] leading-tight">
                  {featured.name}
                </p>
                <p className="mt-1 text-[13px] text-ink/65">
                  Glazed clay, dimmed at the source —{" "}
                  {formatPrice(featured.price)}
                </p>
              </div>
            )}
          </div>
          <div className="absolute -top-10 right-2 hidden text-ink sm:block">
            <RotatingBadge />
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS].map((label, i) => ({
    label,
    id: `tick-${label}-${i}`,
  }));
  return (
    <div className="border-y border-line py-4">
      <div
        className="marquee-slow flex w-max items-center gap-10"
        aria-hidden="true"
      >
        {items.map((item) => (
          <span
            key={item.id}
            className="flex items-center gap-10 whitespace-nowrap font-display text-[1.5rem] italic text-ink/70"
          >
            {item.label}
            <span className="text-clay not-italic">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Collection({
  onQuickView,
  onAdd,
  searchRef,
}: {
  onQuickView: (product: Product) => void;
  onAdd: (product: Product) => void;
  searchRef?: Ref<HTMLInputElement>;
}) {
  const [category, setCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = products.filter(
      (product) =>
        (category === "All" || product.category === category) &&
        (needle === "" ||
          `${product.name} ${product.category} ${product.colorway} ${product.blurb}`
            .toLowerCase()
            .includes(needle)),
    );
    switch (sort) {
      case "price-asc":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "name":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  }, [category, query, sort]);

  const countFor = (item: Category) =>
    item === "All"
      ? products.length
      : products.filter((product) => product.category === item).length;

  return (
    <section id="shop" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-uppercase text-muted">✳ The collection</p>
            <h2 className="mt-2 max-w-[18ch] font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.95]">
              Considered <em className="italic text-clay">objects</em> only.
            </h2>
          </div>
          <div className="flex w-full max-w-md flex-wrap items-stretch gap-3 sm:w-auto">
            <div className="relative flex h-11 min-w-[220px] flex-1 items-center border border-line bg-paper/70 focus-within:border-ink">
              <IconSearch className="ml-3 h-4 w-4 text-muted" />
              <input
                ref={searchRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search the collection…"
                aria-label="Search products"
                className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-ink/40"
              />
            </div>
            <div className="relative h-11">
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                aria-label="Sort products"
                className="label-uppercase h-full cursor-pointer appearance-none border border-line bg-paper/70 pl-4 pr-9 outline-none hover:border-ink focus:border-ink"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price, low first</option>
                <option value="price-desc">Price, high first</option>
                <option value="name">A–Z</option>
              </select>
              <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
            </div>
          </div>
        </div>

        <fieldset className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-3 border-b border-line pb-4 [&>legend]:sr-only">
          <legend>Filter by category</legend>
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`label-uppercase relative pb-1 transition-colors ${
                category === item ? "text-ink" : "text-ink/40 hover:text-ink/75"
              }`}
            >
              {item}
              <span className="ml-1 text-[11px]">{countFor(item)}</span>
              {category === item && (
                <span
                  className="absolute inset-x-0 -bottom-[17px] h-[2px] bg-clay"
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
          <span className="ml-auto hidden items-center text-[13px] text-muted sm:flex">
            {visible.length} of {products.length} pieces
          </span>
        </fieldset>

        {visible.length === 0 ? (
          <div className="flex flex-col items-center py-24 text-center">
            <p className="font-display text-4xl">Nothing matches “{query}”.</p>
            <p className="mt-2 text-[15px] text-ink/60">
              Try “oak”, “lamp” or “ceramic” — or clear the filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="mt-6 label-uppercase h-10 border border-ink px-5 transition-colors hover:bg-ink hover:text-bone"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAdd={onAdd}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section
      id="story"
      className="scroll-mt-16 bg-ink px-5 py-24 text-bone sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="label-uppercase flex items-center gap-3 text-bone/55">
            <span
              className="inline-block h-px w-10 bg-bone/40"
              aria-hidden="true"
            />
            Our story
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[0.95]">
            Fewer, better
            <br />
            <em className="italic text-butter">things.</em>
          </h2>
          <div className="mt-8 grid gap-6 text-[15px] leading-relaxed text-bone/70 sm:grid-cols-2">
            <p>
              We started Loam because we were tired of buying things twice.
              Every piece here is made to be used daily, repaired rather than
              replaced, and sold by someone who made it.
            </p>
            <p>
              We publish our makers&apos; names on every product page, we price
              to pay them properly, and we would rather sell out than reorder at
              the cost of quality. That&apos;s it. That&apos;s the whole model.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-px bg-bone/15 lg:col-span-5">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-end bg-ink p-6 pb-8"
            >
              <p className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-butter">
                {stat.value}
              </p>
              <p className="label-uppercase mt-2 text-bone/55">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Notes() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <section id="notes" className="scroll-mt-24 px-5 pt-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 border-b border-line pb-16 lg:grid-cols-2">
        <div>
          <p className="label-uppercase text-muted">✳ Notes</p>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.02]">
            Slow mail,
            <br />
            <em className="italic text-clay">occasionally.</em>
          </h2>
          <p className="mt-4 max-w-[40ch] text-[15px] text-ink/65">
            One letter a month — new editions, studio visits and the occasional
            repair guide. No discounts, no countdowns.
          </p>
        </div>
        {subscribed ? (
          <div className="flex items-center gap-4 border border-line bg-paper/70 p-6">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-moss text-bone">
              <IconCheck className="h-5 w-5" />
            </span>
            <p className="text-[15px] leading-relaxed">
              <span className="font-medium">You&apos;re on the list.</span>
              <br />
              <span className="text-ink/60">
                The next letter goes out with the first of the month.
              </span>
            </p>
          </div>
        ) : (
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault();
              setSubscribed(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              aria-label="Email address"
              className="h-12 flex-1 border border-line bg-paper/70 px-4 text-[15px] outline-none transition-colors placeholder:text-ink/40 focus:border-ink"
            />
            <button
              type="submit"
              className="label-uppercase group inline-flex h-12 items-center justify-center gap-2 bg-ink px-6 text-bone transition-colors hover:bg-clay"
            >
              Subscribe
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="px-5 pb-10 pt-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap justify-between gap-10 text-[13px]">
          <div className="space-y-1.5">
            <p className="label-uppercase mb-3 text-muted">Shop</p>
            {["Collection", "Gift notes", "Repairs"].map((item) => (
              <p key={item}>
                <a href="#shop" className="hover:text-clay">
                  {item}
                </a>
              </p>
            ))}
          </div>
          <div className="space-y-1.5">
            <p className="label-uppercase mb-3 text-muted">Studio</p>
            {["Our story", "Makers", "Materials"].map((item) => (
              <p key={item}>
                <a href="#story" className="hover:text-clay">
                  {item}
                </a>
              </p>
            ))}
          </div>
          <div className="space-y-1.5">
            <p className="label-uppercase mb-3 text-muted">Help</p>
            {["Shipping", "Returns", "Care guides"].map((item) => (
              <p key={item}>
                <a href="#notes" className="hover:text-clay">
                  {item}
                </a>
              </p>
            ))}
          </div>
          <address className="not-italic space-y-1.5 text-ink/60">
            <p className="label-uppercase mb-3 text-muted">Studio</p>
            <p>Fenwick Yard, Unit 4</p>
            <p>London NW1 4RD</p>
            <p>hello@loam.studio</p>
          </address>
        </div>
        <div className="mt-16 overflow-hidden border-t border-line pt-10 text-center">
          <p className="font-display text-[clamp(6rem,22vw,17rem)] leading-[0.75] tracking-[-0.04em]">
            loam<span className="italic text-clay">.</span>
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-between gap-4 text-[12px] text-ink/50">
          <p>© 2026 Loam Studio. Demo storefront — no orders are processed.</p>
          <p>Prices include VAT. Bag lives in your browser, not a server.</p>
        </div>
      </div>
    </footer>
  );
}

function Toast({
  product,
  onOpenCart,
}: {
  product: Product;
  onOpenCart: () => void;
}) {
  return (
    <div
      aria-live="polite"
      className="toast-in fixed bottom-6 left-1/2 z-[75] flex -translate-x-1/2 items-center gap-3 border border-ink/10 bg-ink px-4 py-3 text-bone shadow-[0_20px_50px_-12px_rgba(20,15,8,0.5)]"
    >
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-moss">
        <IconCheck className="h-3.5 w-3.5" />
      </span>
      <p className="whitespace-nowrap text-[13px]">
        <span className="font-medium">{product.name}</span> added to bag
      </p>
      <button
        type="button"
        onClick={onOpenCart}
        className="label-uppercase ml-1 border-b border-bone/40 pb-0.5 text-butter transition-colors hover:border-bone"
      >
        View bag
      </button>
    </div>
  );
}

function Storefront() {
  const { count, add } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [toast, setToast] = useState<Product | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchInput = useRef<HTMLInputElement>(null);

  const triggerToast = useCallback((product: Product) => {
    setToast(product);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3200);
  }, []);

  const handleAdd = useCallback(
    (product: Product) => {
      add(product.id);
      triggerToast(product);
    },
    [add, triggerToast],
  );

  const focusSearch = useCallback(() => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => searchInput.current?.focus(), 450);
  }, []);

  return (
    <div id="top">
      <Announcement />
      <SiteHeader
        count={count}
        onOpenCart={() => setCartOpen(true)}
        onFocusSearch={focusSearch}
      />
      <main>
        <Hero />
        <Ticker />
        <Collection
          onQuickView={setQuickView}
          onAdd={handleAdd}
          searchRef={searchInput}
        />
        <Story />
        <Notes />
      </main>
      <SiteFooter />
      {toast && (
        <Toast
          key={toast.id}
          product={toast}
          onOpenCart={() => setCartOpen(true)}
        />
      )}
      <QuickView
        product={quickView}
        onClose={() => setQuickView(null)}
        onAdd={handleAdd}
      />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

export function App() {
  return (
    <CartProvider>
      <Storefront />
    </CartProvider>
  );
}
