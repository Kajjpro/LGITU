import IeltsSidebarLayout from "@/app/ieltscomponents/ieltsSidebar"
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "IELTS Prep",
  description:
    "IELTS prep — what each section really tests and clear, practical ways to improve your band score across Listening, Reading, Writing, and Speaking.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <IeltsSidebarLayout>{children}</IeltsSidebarLayout>;
}