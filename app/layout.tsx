import type { Metadata } from "next";
import "./globals.css";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "@/components/custom/Sidebar";

export const metadata: Metadata = {
  title: "অগ্রযাত্রা - একসাথে এগিয়ে চলার অঙ্গীকার",
  description:
    "অগ্রযাত্রা সমিতি একটি বিশ্বস্ত ও অগ্রগামী সংগঠন, যেখানে সঞ্চয়, সহযোগিতা এবং সম্মিলিত প্রচেষ্টার মাধ্যমে আমরা গড়ে তুলি সবার জন্য উজ্জ্বল ভবিষ্যৎ। একসাথে এগিয়ে চলার অঙ্গীকারই আমাদের শক্তি - Developed by Ishrafil.",
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
          <main className="flex-1 md:ml-0 w-full overflow-x-auto">
            <div className="w-full h-14 border-b bg-green-50 shadow-md"></div>
            <div className="p-2.5 lg:p-5">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
