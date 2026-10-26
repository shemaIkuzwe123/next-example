import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconSearch(props: Props) {
  return (
    <Base {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.8-3.8" />
    </Base>
  );
}

export function IconBag(props: Props) {
  return (
    <Base {...props}>
      <path d="M5.5 8.5h13l-1 12h-11l-1-12Z" />
      <path d="M9 10.5V6a3 3 0 0 1 6 0v4.5" />
    </Base>
  );
}

export function IconClose(props: Props) {
  return (
    <Base {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Base>
  );
}

export function IconPlus(props: Props) {
  return (
    <Base {...props}>
      <path d="M12 5v14M5 12h14" />
    </Base>
  );
}

export function IconMinus(props: Props) {
  return (
    <Base {...props}>
      <path d="M5 12h14" />
    </Base>
  );
}

export function IconArrowRight(props: Props) {
  return (
    <Base {...props}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </Base>
  );
}

export function IconArrowDown(props: Props) {
  return (
    <Base {...props}>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </Base>
  );
}

export function IconArrowLeft(props: Props) {
  return (
    <Base {...props}>
      <path d="M20 12H4M10 18l-6-6 6-6" />
    </Base>
  );
}

export function IconCheck(props: Props) {
  return (
    <Base {...props}>
      <path d="m4.5 12.5 5 5L20 6.5" />
    </Base>
  );
}

export function IconTrash(props: Props) {
  return (
    <Base {...props}>
      <path d="M4 7h16M10 7V5h4v2M6.5 7l1 13h9l1-13M10 11v6M14 11v6" />
    </Base>
  );
}

export function IconChevronDown(props: Props) {
  return (
    <Base {...props}>
      <path d="m6 9 6 6 6-6" />
    </Base>
  );
}

export function IconAsterisk(props: Props) {
  return (
    <Base {...props}>
      <path d="M12 4v16M5 8l14 8M19 8 5 16" />
    </Base>
  );
}
