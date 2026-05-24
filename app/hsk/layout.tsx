import HskSidebarLayout from "@/app/hskcomponents/hskSidebar"
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <HskSidebarLayout>{children}</HskSidebarLayout>;
}