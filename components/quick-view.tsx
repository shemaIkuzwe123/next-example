"use client";

import { useEffect, useRef, useState } from "react";
import { IconCheck, IconClose } from "@/components/icons";
import { ProductArt } from "@/components/product-art";
import { useOverlay } from "@/components/use-overlay";
import { formatPrice, type Product } from "@/lib/products";

export function QuickView({
  product,
  onClose,
  onAdd,
}: {
  product: Product | null;
  onClose: () => void;
  onAdd: (product: Product) => void;
}) {
  const [added, setAdded] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = product !== null;
  useOverlay(open, onClose);

  useEffect(() => {
    if (open) {
      setAdded(false);
      closeRef.current?.focus();
    }
  }, [open]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
      className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
    >
      <button
        type="button"
        aria-label="Close quick view"
        onClick={onClose}
        className="overlay-in absolute inset-0 cursor-default bg-ink/45"
      />
      <div className="modal-in relative z-10 grid w-full max-w-3xl max-h-[92vh] grid-cols-1 overflow-y-auto bg-bone sm:grid-cols-[minmax(0,1fr)_1.05fr] shadow-[0_40px_80px_-20px_rgba(20,15,8,0.45)]">
        <div className="relative aspect-[4/5] sm:aspect-auto sm:min-h-[560px] art-grain">
          <div className="absolute inset-0">
            <ProductArt variant={product.id} />
          </div>
          {product.tag && (
            <span className="tag-chip absolute left-4 top-4">
              {product.tag}
            </span>
          )}
        </div>
        <div className="flex flex-col p-6 sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="label-uppercase text-muted">
                {product.category} · {product.colorway}
              </p>
              <h2 className="mt-2 font-display text-4xl leading-none">
                {product.name}
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-colors hover:border-ink hover:bg-ink hover:text-bone"
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/80">
            {product.description}
          </p>
          <ul className="mt-6 space-y-2 border-t border-line pt-5 text-[13px] text-ink/70">
            {product.details.map((detail) => (
              <li key={detail} className="flex gap-2.5">
                <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-clay" />
                {detail}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-8">
            <p className="label-uppercase text-muted">{product.leadTime}</p>
            <div className="mt-3 flex items-stretch gap-3">
              <button
                type="button"
                onClick={() => {
                  if (!added) {
                    onAdd(product);
                    setAdded(true);
                  }
                }}
                className={`h-12 flex-1 text-bone text-sm tracking-[0.02em] transition-colors ${
                  added ? "bg-moss" : "bg-ink hover:bg-clay"
                }`}
              >
                {added
                  ? "Added to bag"
                  : `Add to bag — ${formatPrice(product.price)}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
