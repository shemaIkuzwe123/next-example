"use client";

import { IconBag, IconSearch } from "@/components/icons";

export function SiteHeader({
  count,
  onOpenCart,
  onFocusSearch,
}: {
  count: number;
  onOpenCart: () => void;
  onFocusSearch: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bone/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="font-display text-[2rem] leading-none tracking-[-0.02em]"
        >
          loam<span className="text-clay">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <a href="#shop" className="label-uppercase hover:text-clay">
            Collection
          </a>
          <a href="#story" className="label-uppercase hover:text-clay">
            Our story
          </a>
          <a href="#notes" className="label-uppercase hover:text-clay">
            Notes
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onFocusSearch}
            aria-label="Search the collection"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper/60 transition-colors hover:border-ink hover:text-clay"
          >
            <IconSearch className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open shopping bag, ${count} ${count === 1 ? "item" : "items"}`}
            data-cart-open
            className="group flex h-10 items-center gap-2 rounded-full border border-ink bg-ink pl-3 pr-4 text-bone transition-colors hover:bg-clay hover:border-clay"
          >
            <IconBag className="h-[18px] w-[18px]" />
            <span className="label-uppercase whitespace-nowrap">
              Bag
              <span className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-bone/15 px-1 text-[11px]">
                {count}
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
