import SatSidebarLayout from "@/app/components/satSidebar"
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <SatSidebarLayout>{children}</SatSidebarLayout>;
}