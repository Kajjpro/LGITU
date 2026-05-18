"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    label: "Overview",
    href: "/sat",
    icon: "overview",
  },
  {
    label: "Study Resources",
    href: "/sat/resources",
    icon: "resources",
  },
  {
    label: "Books",
    href: "/sat/books",
    icon: "books",
  },
  {
    label: "Study Plan",
    href: "/sat/study-plan",
    icon: "plan",
  },
  {
    label: "Practice",
    href: "/sat/practice",
    icon: "practice",
  },
  {
    label: "Advice",
    href: "/sat/advice",
    icon: "advice",
  },
];

const Icon = ({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) => {
  if (name === "overview") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M4 6h16M4 12h10M4 18h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "resources") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M5 7h14M5 12h14M5 17h8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M17 16l2 2 3-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "books") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M6 5h9a3 3 0 0 1 3 3v11H9a3 3 0 0 0-3 3V5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M6 5a3 3 0 0 1 3-3h9v17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "plan") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M7 4v3M17 4v3M5 9h14M6 6h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "practice") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 21a9 9 0 1 0-9-9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 7v5l3 3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3l2.4 5.4 5.6.6-4.2 3.8 1.2 5.7L12 15.6 7 18.5l1.2-5.7L4 9l5.6-.6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const MenuIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M5 7h14M5 12h14M5 17h14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M7 7l10 10M17 7 7 17"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const SidebarContent = ({ close }: { close?: () => void }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/sat") return pathname === "/sat";
    return pathname.startsWith(href);
  };

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="p-6">
        <Link href="/sat" onClick={close} className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
            <Icon name="overview" className="h-5 w-5" />
          </span>

          <div>
            <p className="text-lg font-semibold tracking-[-0.04em] text-slate-950">
              SAT Hub
            </p>
            <p className="text-sm text-slate-500">Study dashboard</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {sidebarItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className={[
                "group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300",
                active
                  ? "bg-slate-950 text-white shadow-lg shadow-sky-100"
                  : "text-slate-600 hover:translate-x-1 hover:bg-slate-100 hover:text-slate-950",
              ].join(" ")}
            >
              <span
                className={[
                  "flex h-9 w-9 items-center justify-center rounded-xl transition",
                  active
                    ? "bg-white/10 text-sky-300"
                    : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-sky-600",
                ].join(" ")}
              >
                <Icon name={item.icon} className="h-5 w-5" />
              </span>

              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-950">Study rule</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Fix mistakes before increasing speed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function SatSidebarLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f8fb] text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_34rem)]" />

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-slate-950">SAT Hub</p>
            <p className="text-xs text-slate-500">Choose a page</p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white transition active:scale-95"
            aria-label="Open sidebar"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile dark overlay */}
      <div
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-50 bg-slate-950/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* Mobile sliding sidebar */}
      <aside
        className={[
          "fixed left-0 top-0 z-50 h-full w-[86%] max-w-sm border-r border-slate-200 bg-white shadow-2xl transition-transform duration-500 ease-out lg:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 active:scale-95"
          aria-label="Close sidebar"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <SidebarContent close={() => setOpen(false)} />
      </aside>

      {/* Desktop layout */}
<div className="grid lg:grid-cols-[300px_1fr]">
  <aside className="sticky left-0 top-0 hidden h-screen border-r border-slate-200 bg-white/80 backdrop-blur-xl lg:block">
    <SidebarContent />
  </aside>

  <section className="px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
    {children}
  </section>
</div>
    </main>
  );
}