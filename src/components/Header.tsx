import { Moon, Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-80 right-0 border-b border-zinc-50/10 px-8 py-3 backdrop-blur flex items-center justify-between">
      <div className="w-full max-w-md flex items-center gap-3 text-xs text-zinc-400 bg-zinc-50/5 outline-none overflow-hidden rounded-md p-1">
        <Search size={14} className="ml-4" />
        <input
          type="search"
          name="search"
          id="search"
          className="outline-none bg-transparent w-full uppercase overflow-hidden px-2 h-8 focus:outline-1 focus:outline-zinc-50/10 rounded-md focus:text-zinc-50"
          placeholder="Search by serial number..."
        />
      </div>

      <div className="flex items-center">
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href={"/"}
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href={"/"}
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Components
          </Link>
          <Link
            href={"/"}
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Add new
          </Link>
        </nav>

        <div className="flex items-center border-l border-zinc-50/10 pl-6 ml-6 gap-6">
          <button>
            <Moon size={14} className="text-zinc-100" />
          </button>

          <button className="flex items-center justify-center rounded-full px-3 py-0.5 bg-emerald-700/10 border border-emerald-800 text-sm font-medium text-emerald-600 hover:border-emerald-600 transition-colors">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
