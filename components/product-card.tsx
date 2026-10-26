"use client";

import { ProductArt } from "@/components/product-art";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({
  product,
  onQuickView,
  onAdd,
}: {
  product: Product;
  onQuickView: (product: Product) => void;
  onAdd: (product: Product) => void;
}) {
  return (
    <article className="group reveal">
      <div className="relative aspect-[4/5] overflow-hidden bg-paper art-grain">
        <button
          type="button"
          onClick={() => onQuickView(product)}
          aria-label={`View ${product.name}`}
          className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        >
          <ProductArt variant={product.id} />
        </button>
        {product.tag && (
          <span className="tag-chip absolute left-3 top-3">{product.tag}</span>
        )}
        <button
          type="button"
          onClick={() => onAdd(product)}
          aria-label={`Add ${product.name} to bag, ${formatPrice(product.price)}`}
          className="absolute inset-x-3 bottom-3 z-10 h-10 bg-ink/95 text-bone text-sm tracking-[0.02em] backdrop-blur-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 focus-visible:opacity-100 focus-visible:translate-y-0 max-lg:opacity-100 max-lg:translate-y-0 hover:bg-clay"
        >
          Add to bag — {formatPrice(product.price)}
        </button>
      </div>
      <button
        type="button"
        onClick={() => onQuickView(product)}
        className="mt-4 flex w-full items-start justify-between gap-4 text-left"
      >
        <span>
          <span className="font-display text-[1.35rem] leading-tight block">
            {product.name}
          </span>
          <span className="label-uppercase mt-1 block text-muted">
            {product.category} · {product.colorway}
          </span>
        </span>
        <span className="pt-0.5 text-[15px] whitespace-nowrap">
          {formatPrice(product.price)}
        </span>
      </button>
    </article>
  );
}
