import { type ReactNode, useId } from "react";
import type { ProductCategory } from "@/lib/products";

export const productFills: Record<ProductCategory, string> = {
  Table: "#C4704F",
  Lighting: "#B7C1AC",
  Furniture: "#DED5C3",
  Textiles: "#B5573B",
  Objects: "#8B8E86",
};

function Frame({
  bg,
  glow,
  children,
}: {
  bg: string;
  glow: string;
  children: ReactNode;
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <svg
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className="h-full w-full"
    >
      <defs>
        <radialGradient id={`bg-${uid}`} cx="50%" cy="36%" r="80%">
          <stop offset="0%" stopColor={glow} />
          <stop offset="100%" stopColor={bg} />
        </radialGradient>
        <linearGradient id={`floor-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A140E" stopOpacity="0" />
          <stop offset="100%" stopColor="#1A140E" stopOpacity=".16" />
        </linearGradient>
      </defs>
      <rect width="800" height="1000" fill={`url(#bg-${uid})`} />
      {children}
      <rect y="800" width="800" height="200" fill={`url(#floor-${uid})`} />
    </svg>
  );
}

/* ---------------------------------- art ---------------------------------- */

function CoveCarafe() {
  return (
    <Frame bg="#B9684A" glow="#CE7E5E">
      <ellipse
        cx="400"
        cy="826"
        rx="178"
        ry="26"
        fill="#7C3E29"
        opacity=".35"
      />
      <path
        d="M482 548c62-6 92 44 88 92-4 44-38 72-80 74"
        fill="none"
        stroke="#D9C9AF"
        strokeWidth="34"
        strokeLinecap="round"
      />
      <path
        d="M482 548c52-2 80 38 78 80-2 40-30 66-70 70"
        fill="none"
        stroke="#EFE5D3"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <path d="M356 408h88v120h-88z" fill="#E8DCC7" />
      <ellipse cx="400" cy="408" rx="56" ry="15" fill="#D9C9AF" />
      <ellipse cx="400" cy="408" rx="43" ry="9" fill="#B9A88E" />
      <path
        d="M320 505c-38 82-36 192 12 262 26 40 110 40 136 0 48-70 50-180 12-262-7-14-153-14-160 0Z"
        fill="#EFE5D3"
      />
      <path
        d="M352 512c-24 66-25 156 4 220"
        fill="none"
        stroke="#FAF5EA"
        strokeWidth="16"
        strokeLinecap="round"
        opacity=".7"
      />
      <path
        d="M470 540c20 66 16 148-12 200"
        fill="none"
        stroke="#D2BE9F"
        strokeWidth="10"
        strokeLinecap="round"
        opacity=".45"
      />
      <ellipse cx="400" cy="790" rx="80" ry="16" fill="#D9C9AF" opacity=".6" />
    </Frame>
  );
}

function DuneLamp() {
  return (
    <Frame bg="#B7C1AC" glow="#D3DBC7">
      <ellipse
        cx="400"
        cy="742"
        rx="160"
        ry="22"
        fill="#6E7B66"
        opacity=".32"
      />
      <circle cx="400" cy="500" r="200" fill="#F3E5C0" opacity=".35" />
      <path
        d="M486 700c70 12 64 62 140 48"
        fill="none"
        stroke="#6E5A43"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <rect x="390" y="528" width="20" height="168" rx="8" fill="#6E5A43" />
      <path d="M262 502C262 386 538 386 538 502Z" fill="#C75C3B" />
      <path
        d="M300 470c8-52 30-76 52-88"
        fill="none"
        stroke="#E0764C"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <ellipse cx="400" cy="704" rx="112" ry="26" fill="#A84E33" />
      <ellipse cx="400" cy="700" rx="112" ry="22" fill="#C75C3B" />
      <ellipse cx="400" cy="502" rx="138" ry="16" fill="#A84E33" />
      <ellipse cx="400" cy="504" rx="124" ry="12" fill="#E7B98A" />
    </Frame>
  );
}

function FoldChair() {
  return (
    <Frame bg="#DED5C3" glow="#EDE6D8">
      <ellipse
        cx="400"
        cy="846"
        rx="230"
        ry="28"
        fill="#9C8E76"
        opacity=".35"
      />
      <rect x="238" y="350" width="24" height="430" rx="12" fill="#8A5A36" />
      <rect x="538" y="350" width="24" height="430" rx="12" fill="#7A4D2D" />
      <rect x="205" y="596" width="390" height="18" rx="9" fill="#9E6E42" />
      <rect x="255" y="360" width="290" height="280" rx="70" fill="#EFE8D9" />
      <path
        d="M330 400c-14 70-14 150 0 220"
        fill="none"
        stroke="#DED2BC"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M470 400c14 70 14 150 0 220"
        fill="none"
        stroke="#DED2BC"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <rect x="240" y="620" width="320" height="72" rx="30" fill="#F2EBDC" />
      <path
        d="M240 640c60 14 260 14 320 0"
        fill="none"
        stroke="#DFD3BD"
        strokeWidth="8"
      />
      <path
        d="M268 760 240 858"
        stroke="#8A5A36"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <path
        d="M532 760 560 858"
        stroke="#7A4D2D"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <rect
        x="260"
        y="802"
        width="280"
        height="12"
        rx="6"
        fill="#8A5A36"
        opacity=".85"
      />
    </Frame>
  );
}

function RippleBowl() {
  return (
    <Frame bg="#6D7862" glow="#859178">
      <ellipse
        cx="400"
        cy="795"
        rx="185"
        ry="26"
        fill="#47503F"
        opacity=".38"
      />
      <path
        d="M225 565C235 700 310 775 400 775 490 775 565 700 575 565Z"
        fill="#E8DCC2"
      />
      <ellipse cx="400" cy="565" rx="175" ry="42" fill="#D9CBAE" />
      <ellipse cx="400" cy="568" rx="148" ry="32" fill="#9C8864" />
      <ellipse
        cx="400"
        cy="568"
        rx="112"
        ry="23"
        fill="none"
        stroke="#B09A75"
        strokeWidth="3"
        opacity=".55"
      />
      <ellipse
        cx="400"
        cy="568"
        rx="76"
        ry="15"
        fill="none"
        stroke="#B09A75"
        strokeWidth="3"
        opacity=".4"
      />
      <path
        d="M245 600c14 88 62 140 118 160"
        fill="none"
        stroke="#F6EFDD"
        strokeWidth="10"
        strokeLinecap="round"
        opacity=".6"
      />
      <ellipse cx="400" cy="765" rx="120" ry="14" fill="#8A7858" opacity=".5" />
    </Frame>
  );
}

function LoomThrow() {
  return (
    <Frame bg="#B5573B" glow="#CA6E50">
      <ellipse
        cx="400"
        cy="808"
        rx="230"
        ry="28"
        fill="#7C3A26"
        opacity=".35"
      />
      <rect x="235" y="468" width="330" height="120" rx="14" fill="#D9C9A9" />
      <rect x="195" y="548" width="410" height="212" rx="16" fill="#EDE2CA" />
      <path
        d="M195 578c75-42 335-42 410 0v50c-75-40-335-40-410 0Z"
        fill="#F4EBD8"
      />
      <rect
        x="228"
        y="566"
        width="16"
        height="194"
        rx="8"
        fill="#B5573B"
        opacity=".85"
      />
      <rect x="256" y="566" width="10" height="194" rx="5" fill="#D9A648" />
      <rect
        x="548"
        y="566"
        width="16"
        height="194"
        rx="8"
        fill="#B5573B"
        opacity=".85"
      />
      <path
        d="M215 770l-6 42M235 774l-3 40M258 774l0 40M282 773l4 38"
        stroke="#D9C9A9"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M500 776l4 38M524 774l7 38M548 772l10 40M568 769l13 40"
        stroke="#D9C9A9"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M340 600c-6 58-4 116 2 160" stroke="#E0D2B8" strokeWidth="7" />
    </Frame>
  );
}

function PillarCandles() {
  return (
    <Frame bg="#D7C5A6" glow="#E8DAC2">
      <circle cx="293" cy="462" r="80" fill="#E8A23F" opacity=".16" />
      <ellipse cx="400" cy="796" rx="220" ry="26" fill="#9A8661" opacity=".4" />
      <rect x="480" y="640" width="86" height="140" rx="34" fill="#DDC9A9" />
      <ellipse cx="523" cy="644" rx="43" ry="10" fill="#C9B897" />
      <rect x="368" y="590" width="86" height="190" rx="34" fill="#E9DCC5" />
      <ellipse cx="411" cy="594" rx="43" ry="10" fill="#D3C2A2" />
      <path
        d="M370 690c10 14 20 16 30 6"
        stroke="#E3D4B8"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="250" y="490" width="86" height="290" rx="34" fill="#F4ECDE" />
      <ellipse cx="293" cy="494" rx="43" ry="10" fill="#E0D2B8" />
      <path
        d="M293 480v-28"
        stroke="#3A3226"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M293 448c-16 22-14 40 0 44 14-4 16-22 0-44Z" fill="#E8A23F" />
      <path d="M293 438c-8 12-7 22 0 25 7-3 8-13 0-25Z" fill="#F6D98B" />
      <path
        d="M262 562c8 10 16 12 26 4"
        stroke="#F8F2E6"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="293" cy="784" rx="60" ry="10" fill="#9A8661" opacity=".5" />
      <ellipse cx="411" cy="788" rx="58" ry="9" fill="#9A8661" opacity=".45" />
      <ellipse cx="523" cy="788" rx="52" ry="9" fill="#9A8661" opacity=".4" />
    </Frame>
  );
}

function ArcVase() {
  return (
    <Frame bg="#8B8E86" glow="#A6A89F">
      <circle cx="555" cy="430" r="150" fill="#B79B64" opacity=".5" />
      <ellipse cx="400" cy="800" rx="158" ry="24" fill="#4A4B45" opacity=".4" />
      <g fill="none" strokeLinecap="round">
        <path
          d="M400 390C382 300 330 260 302 208"
          stroke="#6F775C"
          strokeWidth="7"
        />
        <path
          d="M400 390C428 292 480 262 518 192"
          stroke="#6F775C"
          strokeWidth="7"
        />
        <path d="M376 250c-34 4-52-14-56-38 26-8 48 8 56 38Z" fill="#87906E" />
        <path d="M348 200c-30 6-48-8-56-30 24-10 46 2 56 30Z" fill="#87906E" />
        <path d="M470 230c30-10 52 0 64 22-20 14-46 8-64-22Z" fill="#87906E" />
        <path d="M506 180c28-14 52-8 66 12-18 16-46 12-66-12Z" fill="#A0885A" />
      </g>
      <path
        d="M340 390C322 470 300 560 318 660 332 735 365 780 400 780 435 780 468 735 482 660 500 560 478 470 460 390Z"
        fill="#1F1E1B"
      />
      <path
        d="M352 440C340 540 348 640 368 705"
        fill="none"
        stroke="#5A564C"
        strokeWidth="8"
        strokeLinecap="round"
        opacity=".65"
      />
      <ellipse cx="400" cy="390" rx="60" ry="15" fill="#0E0D0B" />
      <ellipse
        cx="400"
        cy="390"
        rx="60"
        ry="15"
        fill="none"
        stroke="#56534A"
        strokeWidth="3"
      />
    </Frame>
  );
}

function GatherTray() {
  return (
    <Frame bg="#C4A77C" glow="#D5BC96">
      <ellipse
        cx="400"
        cy="700"
        rx="250"
        ry="46"
        fill="#8A6A44"
        opacity=".35"
      />
      <ellipse cx="400" cy="560" rx="255" ry="185" fill="#8A5A36" />
      <ellipse cx="400" cy="560" rx="225" ry="158" fill="#A9764A" />
      <path
        d="M175 560c0-60 90-108 225-108s225 48 225 108"
        fill="none"
        stroke="#C08D5C"
        strokeWidth="6"
        opacity=".7"
      />
      <path
        d="M185 590c30 44 115 74 215 74"
        fill="none"
        stroke="#8A5A36"
        strokeWidth="10"
        opacity=".5"
      />
      <rect x="130" y="520" width="60" height="80" rx="30" fill="#C4A77C" />
      <rect x="610" y="520" width="60" height="80" rx="30" fill="#C4A77C" />
      <circle cx="330" cy="540" r="62" fill="#EFE5D3" />
      <circle cx="330" cy="540" r="44" fill="#B9A88E" />
      <circle cx="468" cy="560" r="42" fill="#6F7A64" />
      <circle cx="468" cy="560" r="28" fill="#59634F" />
      <ellipse
        cx="560"
        cy="470"
        rx="34"
        ry="14"
        fill="#6F775C"
        transform="rotate(-24 560 470)"
      />
      <path
        d="M560 470c-26-16-58-16-80 2"
        fill="none"
        stroke="#6F775C"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </Frame>
  );
}

function RidgeStool() {
  return (
    <Frame bg="#C9BFAE" glow="#DCD3C2">
      <ellipse
        cx="400"
        cy="838"
        rx="195"
        ry="28"
        fill="#8E8268"
        opacity=".38"
      />
      <path
        d="M330 556 314 822"
        stroke="#8A5F3A"
        strokeWidth="20"
        strokeLinecap="round"
      />
      <path
        d="M470 556 486 822"
        stroke="#7E5533"
        strokeWidth="20"
        strokeLinecap="round"
      />
      <rect x="250" y="520" width="300" height="46" rx="23" fill="#B78452" />
      <rect x="250" y="520" width="300" height="14" rx="7" fill="#CB9A66" />
      <path
        d="M278 552 240 830"
        stroke="#9E6E42"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <path
        d="M522 552 560 830"
        stroke="#9E6E42"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <path
        d="M262 704H538"
        stroke="#8A5F3A"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <g transform="rotate(-4 400 505)">
        <rect x="335" y="486" width="130" height="38" rx="4" fill="#C8552F" />
        <rect x="344" y="492" width="112" height="6" rx="3" fill="#F2E9DA" />
      </g>
    </Frame>
  );
}

function OrbitPendant() {
  return (
    <Frame bg="#A9B2B8" glow="#C6CED4">
      <circle cx="400" cy="540" r="215" fill="#F5E7C8" opacity=".35" />
      <path d="M400 0v372" stroke="#4A463E" strokeWidth="5" />
      <circle cx="400" cy="540" r="152" fill="#F0E8D7" />
      <ellipse
        cx="400"
        cy="540"
        rx="152"
        ry="122"
        fill="none"
        stroke="#DCD2BC"
        strokeWidth="4"
      />
      <ellipse
        cx="400"
        cy="540"
        rx="152"
        ry="78"
        fill="none"
        stroke="#DCD2BC"
        strokeWidth="4"
      />
      <ellipse
        cx="400"
        cy="540"
        rx="152"
        ry="30"
        fill="none"
        stroke="#DCD2BC"
        strokeWidth="4"
      />
      <ellipse cx="400" cy="440" rx="126" ry="34" fill="#FAF4E4" opacity=".8" />
      <circle cx="400" cy="540" r="70" fill="#FBEED2" opacity=".55" />
      <circle
        cx="400"
        cy="386"
        r="26"
        fill="none"
        stroke="#B98F4F"
        strokeWidth="10"
      />
      <ellipse cx="400" cy="760" rx="190" ry="24" fill="#6E737B" opacity=".5" />
    </Frame>
  );
}

function CloudCushion() {
  return (
    <Frame bg="#D8D2C4" glow="#E9E3D6">
      <ellipse
        cx="410"
        cy="795"
        rx="215"
        ry="26"
        fill="#9C9484"
        opacity=".35"
      />
      <g transform="rotate(8 490 520)">
        <rect x="340" y="380" width="300" height="280" rx="90" fill="#B5573B" />
        <rect
          x="368"
          y="404"
          width="106"
          height="104"
          rx="30"
          fill="#C4674A"
          opacity=".7"
        />
      </g>
      <path
        d="M225 430C210 380 250 350 300 356 335 320 465 320 500 356 550 350 590 380 575 430 605 470 605 560 570 600 590 650 545 690 500 676 460 706 340 706 300 676 255 690 210 650 230 600 195 560 195 470 225 430Z"
        fill="#F3EEE2"
      />
      <path
        d="M262 452C250 490 250 560 268 610"
        fill="none"
        stroke="#E2D9C6"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M300 700C340 718 460 718 500 700"
        fill="none"
        stroke="#E2D9C6"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="400" cy="515" r="10" fill="#DCD2BE" />
    </Frame>
  );
}

function ColumnTable() {
  return (
    <Frame bg="#B9A98D" glow="#CEBFA3">
      <ellipse
        cx="400"
        cy="800"
        rx="185"
        ry="24"
        fill="#7E6F55"
        opacity=".38"
      />
      <path
        d="M310 470 310 740C310 772 490 772 490 740L490 470Z"
        fill="#D9CAAE"
      />
      <path
        d="M330 480v252M366 480v256M402 480v258M438 480v256M470 480v252"
        stroke="#C4B394"
        strokeWidth="6"
      />
      <path
        d="M348 478v250M420 478v250"
        stroke="#E6DAC2"
        strokeWidth="4"
        opacity=".8"
      />
      <ellipse cx="400" cy="756" rx="152" ry="40" fill="#CDBDA0" />
      <ellipse cx="400" cy="470" rx="185" ry="52" fill="#E8DCC2" />
      <ellipse cx="400" cy="466" rx="170" ry="42" fill="#F0E6D0" />
      <path
        d="M260 452c60-26 220-26 280 0"
        fill="none"
        stroke="#D6C6A8"
        strokeWidth="5"
      />
      <path
        d="M255 470c70-24 220-24 290 0"
        fill="none"
        stroke="#D6C6A8"
        strokeWidth="4"
        opacity=".8"
      />
    </Frame>
  );
}

const art: Record<string, () => React.JSX.Element> = {
  "cove-carafe": CoveCarafe,
  "dune-lamp": DuneLamp,
  "fold-chair": FoldChair,
  "ripple-bowl": RippleBowl,
  "loom-throw": LoomThrow,
  "pillar-candles": PillarCandles,
  "arc-vase": ArcVase,
  "gather-tray": GatherTray,
  "ridge-stool": RidgeStool,
  "orbit-pendant": OrbitPendant,
  "cloud-cushion": CloudCushion,
  "column-table": ColumnTable,
};

export function ProductArt({
  variant,
  fill,
}: {
  variant: string;
  fill?: string;
}) {
  const Component = art[variant] ?? PillarCandles;
  return fill ? (
    <Frame bg={fill} glow={fill}>
      <Component />
    </Frame>
  ) : (
    <Component />
  );
}
