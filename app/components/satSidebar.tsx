"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

/* ------------------------------------------------------------------ */
/*  SIDEBAR NAV                                                       */
/* ------------------------------------------------------------------ */

type IconName =
  | "overview"
  | "resources"
  | "books"
  | "plan"
  | "practice"
  | "advice";

const sidebarItems: { label: string; href: string; icon: IconName }[] = [
  { label: "Overview",        href: "/sat",            icon: "overview"  },
  { label: "Study Resources", href: "/sat/resources",  icon: "resources" },
  { label: "Books",           href: "/sat/books",      icon: "books"     },
  { label: "Study Plan",      href: "/sat/study-plan", icon: "plan"      },
  { label: "Practice",        href: "/sat/practice",   icon: "practice"  },
  { label: "Advice",          href: "/sat/advice",     icon: "advice"    },
];

/* ------------------------------------------------------------------ */
/*  ICONS                                                             */
/* ------------------------------------------------------------------ */

const Icon = ({
  name,
  className = "h-4 w-4",
}: {
  name: IconName;
  className?: string;
}) => {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "overview":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="9" rx="1.5" />
          <rect x="14" y="3" width="7" height="5" rx="1.5" />
          <rect x="14" y="12" width="7" height="9" rx="1.5" />
          <rect x="3" y="16" width="7" height="5" rx="1.5" />
        </svg>
      );
    case "resources":
      return (
        <svg {...props}>
          <path d="M4 6h16M4 12h10M4 18h16" />
        </svg>
      );
    case "books":
      return (
        <svg {...props}>
          <path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 1-2-2V5Z" />
          <path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
        </svg>
      );
    case "plan":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      );
    case "practice":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "advice":
      return (
        <svg {...props}>
          <path d="M21 12a8 8 0 0 1-11.7 7.1L4 20l1-4.4A8 8 0 1 1 21 12Z" />
        </svg>
      );
  }
};

const BrandMark = ({ className = "h-[18px] w-[18px]" }: { className?: string }) => (
  <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
    <path
      d="M10 1.5 L18.5 10 L10 18.5 L1.5 10 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path d="M10 6 L14 10 L10 14 L6 10 Z" fill="currentColor" />
  </svg>
);

const MenuIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    className={className}
  >
    <path d="M5 7h14M5 12h14M5 17h14" />
  </svg>
);

const CloseIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    className={className}
  >
    <path d="M7 7l10 10M17 7 7 17" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  SIDEBAR CONTENT                                                   */
/* ------------------------------------------------------------------ */

const SidebarContent = ({ close }: { close?: () => void }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/sat") return pathname === "/sat";
    return pathname.startsWith(href);
  };

  return (
    <div className="flex h-full flex-col bg-white/70 backdrop-blur-xl">
      {/* Brand */}
      <Link
        href="/sat"
        onClick={close}
        className="mx-4 mt-5 flex items-center gap-2.5 border-b border-zinc-200 pb-4"
      >
        <span className="text-indigo-600">
          <BrandMark />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-[14.5px] font-semibold tracking-[-0.012em] text-zinc-950">
            Atlas
          </span>
          <span className="text-[11.5px] text-zinc-500">SAT preparation</span>
        </span>
      </Link>

      {/* Section label */}
      <div className="mt-5 px-6 pb-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-zinc-400">
        Navigation
      </div>

      {/* Nav */}
      <nav className="mt-1 flex flex-1 flex-col gap-0.5 px-3">
        {sidebarItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className={[
                "group relative flex items-center gap-2.5 rounded-[7px] px-2.5 py-2 text-[13.5px] transition-colors",
                active
                  ? "bg-zinc-100 font-medium text-zinc-950"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950",
              ].join(" ")}
            >
              {active && (
                <span className="absolute -left-3 top-1/2 h-[18px] w-[3px] -translate-y-1/2 rounded-r bg-indigo-600" />
              )}
              <span
                className={[
                  "flex h-6 w-6 items-center justify-center",
                  active ? "text-indigo-600" : "text-zinc-400 group-hover:text-zinc-700",
                ].join(" ")}
              >
                <Icon name={item.icon} />
              </span>
              <span className="flex-1">{item.label}</span>
              {active && <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />}
            </Link>
          );
        })}
      </nav>

      {/* Study principle */}
      <div className="m-4 rounded-[10px] border border-zinc-200 bg-zinc-50 p-3.5">
        <div className="mb-2 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-zinc-500">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Study principle
        </div>
        <p className="text-[13px] leading-relaxed text-zinc-900">
          Fix mistakes before you try to increase speed.
        </p>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  LAYOUT                                                            */
/* ------------------------------------------------------------------ */

export default function SatSidebarLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F7F7F8] text-zinc-950">
      {/* Subtle background — grid + indigo wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(9,9,11,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,9,11,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_50%_0%,black_0%,transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-64 left-1/2 -z-10 h-[520px] w-[720px] -translate-x-[30%] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.10),transparent_60%)] blur-2xl"
      />

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between px-5 py-3.5">
          <Link href="/sat" className="flex items-center gap-2.5">
            <span className="text-indigo-600">
              <BrandMark className="h-4 w-4" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-zinc-950">Atlas</span>
              <span className="text-[11px] text-zinc-500">SAT preparation</span>
            </span>
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-zinc-200 bg-white text-zinc-700 transition active:scale-95"
            aria-label="Open sidebar"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-50 bg-zinc-950/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* Mobile sliding sidebar */}
      <aside
        className={[
          "fixed left-0 top-0 z-50 h-full w-[86%] max-w-sm border-r border-zinc-200 bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-[8px] border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-50 active:scale-95"
          aria-label="Close sidebar"
        >
          <CloseIcon />
        </button>
        <SidebarContent close={() => setOpen(false)} />
      </aside>

      {/* Desktop layout */}
      <div className="grid lg:grid-cols-[260px_1fr]">
        <aside className="sticky left-0 top-0 hidden h-screen border-r border-zinc-200 lg:block">
          <SidebarContent />
        </aside>

        <section className="min-w-0">{children}</section>
      </div>
    </main>
  );
}