import SatSidebarLayout from "@/app/satcomponents/page"
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SAT Prep",
  description:
    "Digital SAT prep — real resources, the books worth reading, honest advice, a score tracker, and a tool to review your mistakes until they stick.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <SatSidebarLayout>{children}</SatSidebarLayout>;
}