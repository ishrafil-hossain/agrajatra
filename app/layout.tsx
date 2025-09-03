import type { Metadata } from "next";
import "./globals.css";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "@/components/custom/Sidebar";

export const metadata: Metadata = {
  title: "My App",
  description: "Responsive Sidebar with shadcn",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          {/* Desktop Sidebar */}
          <div className="hidden md:block">
            <Sidebar />
          </div>

          {/* Mobile Sidebar */}
          <div className="md:hidden fixed top-2 left-3 z-50">
            <Sheet>
              <SheetTrigger className="p-2 rounded-lg border shadow">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <Sidebar />
              </SheetContent>
            </Sheet>
          </div>

          {/* Page Content */}
          <main className="flex-1 md:ml-0">
            <div className="w-full h-14 border-b bg-green-50 shadow-md"></div>
            <div className="p-2.5 lg:p-5">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
