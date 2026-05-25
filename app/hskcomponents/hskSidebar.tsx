"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { SiteControls } from "@/app/sitecomponents/controls";
import { useSite } from "@/app/context";

type IconName = "overview" | "resources" | "advice";

const navItems: { icon: IconName; href: string; en: string; mn: string }[] = [
  { icon: "overview",  href: "/hsk",           en: "Overview",  mn: "Тойм" },
  { icon: "resources", href: "/hsk/resources",  en: "Resources", mn: "Эх сурвалж" },
  { icon: "advice",    href: "/hsk/advice",     en: "Advice",    mn: "Зөвлөгөө" },
];

const Icon = ({ name, className = "h-4 w-4" }: { name: IconName; className?: string }) => {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
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
          <path d="M4 6h16" /><path d="M4 12h10" /><path d="M4 18h16" />
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

const BrandMark = ({ className = "h-9 w-9" }: { className?: string }) => (
  <span
    className={["relative inline-flex shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white shadow-sm", className].join(" ")}
    aria-hidden="true"
  >
    <span className="text-[18px] font-black leading-none tracking-[-0.08em]">L</span>
    <span className="absolute right-1.5 top-1 text-[11px] font-black leading-none text-red-300">↗</span>
  </span>
);

const Logo = ({ close }: { close?: () => void }) => (
  <Link
    href="/"
    onClick={close}
    className="group flex min-w-0 items-center gap-2.5 rounded-2xl transition active:scale-[0.98]"
    aria-label="Go to LGITU main page"
  >
    <BrandMark />
    <span className="flex min-w-0 flex-col leading-tight">
      <span className="text-[15px] font-extrabold tracking-[-0.04em] text-zinc-950 transition group-hover:text-red-600 dark:text-zinc-100">
        LGITU
      </span>
      <span className="max-w-[180px] truncate text-[10.5px] font-medium text-zinc-500">
        Let&apos;s Go Into Top Universities
      </span>
    </span>
  </Link>
);

const MenuIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className={className}>
    <path d="M5 7h14M5 12h14M5 17h14" />
  </svg>
);

const CloseIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className={className}>
    <path d="M7 7l10 10M17 7 7 17" />
  </svg>
);

const SidebarContent = ({ close }: { close?: () => void }) => {
  const pathname = usePathname();
  const { lang } = useSite();

  const isActive = (href: string) => {
    if (href === "/hsk") return pathname === "/hsk";
    return pathname.startsWith(href);
  };

  const reminder = lang === "mn"
    ? "多复习，少死记。Өгүүлбэрт нь ойлгон дадлагажа."
    : "多复习，少死记。Review words in context.";
  const navLabel = lang === "mn" ? "Цэс" : "Navigation";

  return (
    <div className="flex h-full flex-col bg-white dark:bg-zinc-900">
      <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-4 dark:border-zinc-800">
        <Logo close={close} />
        <SiteControls />
      </div>

      <div className="px-4 pt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
        {navLabel}
      </div>

      <nav className="mt-2 flex flex-1 flex-col gap-1 px-3">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const label = lang === "mn" ? item.mn : item.en;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className={[
                "group relative flex items-center gap-3 rounded-xl px-3 py-3 text-[14px] transition",
                active
                  ? "bg-red-50 font-semibold text-zinc-950 dark:bg-red-500/10 dark:text-zinc-100"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
              ].join(" ")}
            >
              {active && (
                <span className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-r bg-red-600" />
              )}
              <span
                className={[
                  "flex h-8 w-8 items-center justify-center rounded-lg",
                  active
                    ? "bg-white text-red-600 shadow-sm dark:bg-zinc-800 dark:text-red-400"
                    : "bg-zinc-50 text-zinc-400 group-hover:text-zinc-700 dark:bg-zinc-800 dark:group-hover:text-zinc-300",
                ].join(" ")}
              >
                <Icon name={item.icon} />
              </span>
              <span className="flex-1">{label}</span>
              {item.href === "/hsk/advice" && (
                <span className="rounded-full bg-red-600 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                  {lang === "mn" ? "Чухал" : "Key"}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="m-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-800/50">
        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500">
          {lang === "mn" ? "Сануулга" : "Reminder"}
        </div>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-zinc-700 dark:text-zinc-300">
          {reminder}
        </p>
      </div>
    </div>
  );
};

export default function HskSidebarLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F7F7F8] text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(9,9,11,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,9,11,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_50%_0%,black_0%,transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-64 left-1/2 -z-10 h-[520px] w-[720px] -translate-x-[30%] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.10),transparent_60%)] blur-2xl"
      />

      {/* MOBILE TOPBAR */}
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur-xl lg:hidden dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="flex items-center justify-between px-4 py-3">
          <Logo />
          <div className="flex items-center gap-2">
            <SiteControls />
            <button
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 shadow-sm transition active:scale-95 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              aria-label="Open sidebar"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-50 bg-zinc-950/35 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* MOBILE DRAWER */}
      <aside
        className={[
          "fixed left-0 top-0 z-50 h-full w-[82%] max-w-[320px] overflow-hidden rounded-r-3xl border-r border-zinc-200 bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden dark:border-zinc-800 dark:bg-zinc-900",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50 active:scale-95 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          aria-label="Close sidebar"
        >
          <CloseIcon />
        </button>
        <SidebarContent close={() => setOpen(false)} />
      </aside>

      {/* DESKTOP LAYOUT */}
      <div className="grid lg:grid-cols-[260px_1fr]">
        <aside className="sticky left-0 top-0 hidden h-screen border-r border-zinc-200 lg:block dark:border-zinc-800">
          <SidebarContent />
        </aside>
        <section className="min-w-0">{children}</section>
      </div>
    </main>
  );
}
