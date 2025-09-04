"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { LogOut, LayoutDashboard, User } from "lucide-react";

export default function Sidebar({ onClick }: { onClick?: () => void }) {
  return (
    <Card className="h-full lg:w-64 p-4 flex flex-col justify-between shadow-md bg-primary rounded-none border-0">
      {/* Top Section */}
      <div className="space-y-4 text-white">
        <h2 className="text-white text-xl font-bold">অগ্রযাত্রা</h2>
        <nav className="flex flex-col gap-3">
          <Link
            href="/"
            onClick={onClick}
            className="flex items-center gap-2 rounded-lg px-3 py-2 hover:text-primary hover:bg-gray-100 transition-all duration-300"
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/profile"
            onClick={onClick}
            className="flex items-center gap-2 rounded-lg px-3 py-2 hover:text-primary hover:bg-gray-100 transition-all duration-300"
          >
            <User className="h-5 w-5" />
            <span>My Profile</span>
          </Link>

          <Link
            href="/manage-user"
            onClick={onClick}
            className="flex items-center gap-2 rounded-lg px-3 py-2 hover:text-primary hover:bg-gray-100 transition-all duration-300"
          >
            <User className="h-5 w-5" />
            <span>Manage User</span>
          </Link>
        </nav>
      </div>

      {/* Bottom Section */}
      <div>
        <button
          onClick={onClick}
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 bg-white hover:bg-red-100 text-red-600"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </Card>
  );
}
