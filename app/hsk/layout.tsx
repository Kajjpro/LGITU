import HskSidebarLayout from "@/app/hskcomponents/hskSidebar"
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "HSK Prep",
  description:
    "HSK prep — vocabulary, listening, and reading the way that actually sticks, with a clear path through each level of Chinese proficiency.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <HskSidebarLayout>{children}</HskSidebarLayout>;
}