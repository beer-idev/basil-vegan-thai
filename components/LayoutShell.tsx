import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileBottomNav } from "./MobileBottomNav";

type LayoutShellProps = {
  children: ReactNode;
};

export function LayoutShell({ children }: LayoutShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-slate-900">
      <Header />
      <main className="flex w-full flex-1 flex-col pb-24 md:pb-12">
        <div className="mx-auto w-full max-w-7xl px-4 pt-2 md:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
