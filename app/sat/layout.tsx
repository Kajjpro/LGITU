import SatSidebarLayout from "@/app/satcomponents/page"
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <SatSidebarLayout>{children}</SatSidebarLayout>;
}