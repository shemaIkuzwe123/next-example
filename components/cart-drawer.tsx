"use client";

import type { ChangeEvent, InputHTMLAttributes } from "react";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconClose,
  IconMinus,
  IconPlus,
  IconTrash,
} from "@/components/icons";
import { ProductArt } from "@/components/product-art";
import { useOverlay } from "@/components/use-overlay";
import {
  FREE_SHIPPING_THRESHOLD,
  formatPrice,
  getProduct,
  STANDARD_SHIPPING,
} from "@/lib/products";

function Stepper({
  qty,
  onSet,
}: {
  qty: number;
  onSet: (qty: number) => void;
}) {
  return (
    <div className="flex items-center border border-bone/25">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onSet(qty - 1)}
        className="grid h-9 w-9 place-items-center transition-colors hover:bg-bone/10"
      >
        <IconMinus className="h-3.5 w-3.5" />
      </button>
      <span
        aria-live="polite"
        className="w-8 text-center text-[13px] tabular-nums"
      >
        {qty}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onSet(qty + 1)}
        disabled={qty >= 9}
        className="grid h-9 w-9 place-items-center transition-colors hover:bg-bone/10 disabled:opacity-30"
      >
        <IconPlus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function BagView({
  onCheckout,
  onBrowse,
}: {
  onCheckout: () => void;
  onBrowse: () => void;
}) {
  const { lines, subtotal, setQty, remove } = useCart();
  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);
  const progress = Math.min(subtotal / FREE_SHIPPING_THRESHOLD, 1);
  const shipping =
    lines.length === 0 || subtotal >= FREE_SHIPPING_THRESHOLD
      ? 0
      : STANDARD_SHIPPING;

  return (
    <>
      <div className="border-b border-bone/15 px-6 py-5">
        <p className="label-uppercase text-bone/60">
          {remaining > 0
            ? `${formatPrice(remaining)} away from free shipping`
            : "Free shipping unlocked"}
        </p>
        <div className="mt-2.5 h-[3px] w-full bg-bone/15">
          <div
            className="h-full bg-butter transition-[width] duration-500"
            style={{
              width: `${Math.max(progress * 100, progress > 0 ? 4 : 0)}%`,
            }}
          />
        </div>
      </div>
      {lines.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
          <p className="font-display text-4xl leading-tight">
            Your bag
            <br />
            is empty.
          </p>
          <p className="mt-3 max-w-[26ch] text-sm text-bone/60">
            Good objects go fast. Start with something that lasts.
          </p>
          <button
            type="button"
            onClick={onBrowse}
            className="mt-8 inline-flex h-11 items-center gap-2 bg-bone px-6 text-ink label-uppercase transition-colors hover:bg-butter"
          >
            Browse the collection
            <IconArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <>
          <ul className="flex-1 divide-y divide-bone/12 px-6">
            {lines.map((line) => {
              const product = getProduct(line.id);
              if (!product) return null;
              return (
                <li key={line.id} className="flex gap-4 py-5">
                  <div className="relative h-24 w-[72px] shrink-0 art-grain">
                    <div className="absolute inset-0">
                      <ProductArt variant={product.id} />
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-[1.3rem] leading-none">
                        {product.name}
                      </h3>
                      <p className="text-[15px] tabular-nums">
                        {formatPrice(product.price * line.qty)}
                      </p>
                    </div>
                    <p className="label-uppercase mt-1 text-bone/50">
                      {product.colorway}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <Stepper
                        qty={line.qty}
                        onSet={(qty) => setQty(line.id, qty)}
                      />
                      <button
                        type="button"
                        onClick={() => remove(line.id)}
                        aria-label={`Remove ${product.name} from bag`}
                        className="grid h-9 w-9 place-items-center text-bone/45 transition-colors hover:text-bone"
                      >
                        <IconTrash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="border-t border-bone/15 px-6 py-5">
            <dl className="space-y-2 text-[14px]">
              <div className="flex justify-between text-bone/70">
                <dt>Subtotal</dt>
                <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between text-bone/70">
                <dt>Shipping</dt>
                <dd className="tabular-nums">
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </dd>
              </div>
              <div className="flex justify-between border-t border-bone/15 pt-3 text-[15px]">
                <dt className="font-medium">Total</dt>
                <dd className="tabular-nums">
                  {formatPrice(subtotal + shipping)}
                </dd>
              </div>
            </dl>
            <button
              type="button"
              onClick={onCheckout}
              className="mt-5 h-12 w-full bg-bone text-ink label-uppercase transition-colors hover:bg-butter"
            >
              Checkout
              <IconArrowRight className="ml-2 inline h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-[12px] text-bone/40">
              Demo checkout — no payment is processed.
            </p>
          </div>
        </>
      )}
    </>
  );
}

function Field({
  label,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="label-uppercase text-bone/55">{label}</span>
      <input
        required
        className="mt-1.5 h-11 w-full border border-bone/25 bg-bone/5 px-3 text-[14px] text-bone placeholder:text-bone/30 focus:border-butter focus:outline-none"
        {...props}
      />
    </label>
  );
}

const EMPTY_FORM = {
  email: "",
  name: "",
  address: "",
  city: "",
  postal: "",
  card: "",
  expiry: "",
  cvc: "",
};

type CheckoutViewProps = {
  total: string;
  count: number;
  onBack: () => void;
  onPlaced: (email: string, orderNumber: string) => void;
};

function CheckoutView({ total, count, onBack, onPlaced }: CheckoutViewProps) {
  const [form, setForm] = useState(EMPTY_FORM);
  const set =
    (key: keyof typeof EMPTY_FORM) => (event: ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [key]: event.target.value }));

  return (
    <>
      <button
        type="button"
        onClick={onBack}
        className="label-uppercase flex items-center gap-2 px-6 py-5 text-bone/60 transition-colors hover:text-bone"
      >
        <IconArrowLeft className="h-4 w-4" />
        Back to bag
      </button>
      <form
        className="flex flex-1 flex-col overflow-y-auto px-6 pb-6"
        onSubmit={(event) => {
          event.preventDefault();
          onPlaced(
            form.email,
            `LM-${Math.floor(100000 + Math.random() * 900000)}`,
          );
        }}
      >
        <p className="font-display text-3xl">
          Checkout <span className="text-bone/40">· {count} items</span>
        </p>
        <div className="mt-6 space-y-4">
          <Field
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={set("email")}
          />
          <Field
            label="Full name"
            autoComplete="name"
            placeholder="Kim Elmer"
            value={form.name}
            onChange={set("name")}
          />
          <Field
            label="Address"
            autoComplete="street-address"
            placeholder="14 Fenwick Rd"
            value={form.address}
            onChange={set("address")}
          />
          <div className="grid grid-cols-2 gap-4">
            <Field
              label="City"
              autoComplete="address-level2"
              placeholder="London"
              value={form.city}
              onChange={set("city")}
            />
            <Field
              label="Postcode"
              autoComplete="postal-code"
              placeholder="NW1 4RD"
              value={form.postal}
              onChange={set("postal")}
            />
          </div>
        </div>
        <p className="label-uppercase mt-8 border-t border-bone/15 pt-6 text-bone/55">
          Payment <span className="ml-2 text-bone/35">demo card only</span>
        </p>
        <div className="mt-4 space-y-4">
          <Field
            label="Card number"
            inputMode="numeric"
            placeholder="4242 4242 4242 4242"
            value={form.card}
            onChange={set("card")}
          />
          <div className="grid grid-cols-2 gap-4">
            <Field
              label="Expiry"
              inputMode="numeric"
              placeholder="12 / 28"
              value={form.expiry}
              onChange={set("expiry")}
            />
            <Field
              label="CVC"
              inputMode="numeric"
              placeholder="123"
              value={form.cvc}
              onChange={set("cvc")}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 h-12 w-full bg-butter text-ink label-uppercase transition-colors hover:bg-bone"
        >
          Place order — {total}
        </button>
        <p className="mt-3 text-center text-[12px] text-bone/40">
          This is a demo store. Nothing is charged and no data leaves your
          browser.
        </p>
      </form>
    </>
  );
}

function SuccessView({
  email,
  orderNumber,
  onClose,
}: {
  email: string;
  orderNumber: string;
  onClose: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-full border border-butter/50 text-butter">
        <IconCheck className="h-7 w-7" />
      </span>
      <p className="label-uppercase mt-6 text-bone/55">Order {orderNumber}</p>
      <h2 className="mt-2 font-display text-5xl leading-none">
        Considered
        <br />
        &amp; confirmed.
      </h2>
      <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-bone/60">
        A receipt is on its way to{" "}
        <span className="text-bone">{email || "your inbox"}</span>. (Demo order
        — nothing was charged, nothing will arrive.)
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-8 inline-flex h-11 items-center gap-2 bg-bone px-6 text-ink label-uppercase transition-colors hover:bg-butter"
      >
        Keep browsing
        <IconArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { lines, count, subtotal, clear } = useCart();
  const [step, setStep] = useState<"bag" | "checkout" | "success">("bag");
  const [order, setOrder] = useState<{ email: string; number: string } | null>(
    null,
  );

  useOverlay(open, onClose);

  if (!open) return null;

  const closeAndReset = () => {
    onClose();
    setStep("bag");
  };

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
  const total = formatPrice(subtotal + shipping);

  return (
    <div
      className="fixed inset-0 z-[70]"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping bag"
    >
      <button
        type="button"
        aria-label="Close bag"
        onClick={closeAndReset}
        className="overlay-in absolute inset-0 cursor-default bg-ink/45"
      />
      <aside className="drawer-in absolute inset-y-0 right-0 flex w-full max-w-[440px] flex-col bg-ink text-bone shadow-[-30px_0_60px_-30px_rgba(20,15,8,0.6)]">
        <div className="flex items-center justify-between border-b border-bone/15 px-6 py-4">
          <h2 className="font-display text-2xl">
            {step === "bag"
              ? "Your bag"
              : step === "checkout"
                ? "Checkout"
                : "Confirmation"}
            {step !== "success" && count > 0 && (
              <span className="label-uppercase ml-2 align-middle text-bone/50">
                {count} {count === 1 ? "item" : "items"}
              </span>
            )}
          </h2>
          <button
            type="button"
            onClick={closeAndReset}
            aria-label="Close bag"
            className="grid h-9 w-9 place-items-center rounded-full border border-bone/25 transition-colors hover:bg-bone hover:text-ink"
          >
            <IconClose className="h-4 w-4" />
          </button>
        </div>
        {step === "bag" && (
          <BagView
            onCheckout={() =>
              lines.length === 0 ? closeAndReset() : setStep("checkout")
            }
            onBrowse={() => {
              closeAndReset();
              document
                .getElementById("shop")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        )}
        {step === "checkout" && lines.length > 0 && (
          <CheckoutView
            total={total}
            count={count}
            onBack={() => setStep("bag")}
            onPlaced={(email, number) => {
              setOrder({ email, number });
              setStep("success");
              clear();
            }}
          />
        )}
        {step === "success" && order && (
          <SuccessView
            email={order.email}
            orderNumber={order.number}
            onClose={closeAndReset}
          />
        )}
      </aside>
    </div>
  );
}
