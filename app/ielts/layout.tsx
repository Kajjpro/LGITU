import IeltsSidebarLayout from "@/app/ieltscomponents/ieltsSidebar"
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <IeltsSidebarLayout>{children}</IeltsSidebarLayout>;
}