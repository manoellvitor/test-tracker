"use client";
import { Info, Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const currentYear = new Date().getFullYear();

  return (
    <header className="fixed top-0 left-0 flex-col md:flex-row lg:left-80 right-0 border-b gap-2 md:gap-0 border-zinc-50/10 px-8 py-3 backdrop-blur flex items-center justify-center md:justify-between">
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
        <nav className="hidden lg:flex items-center gap-6 text-sm whitespace-nowrap">
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
            Analytics
          </Link>
          <Link
            href={"/"}
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Add new
          </Link>
        </nav>

        <div className="flex items-center justify-center md:border-l border-zinc-50/10 pl-6 ml-6 gap-6">
          <button
            className="tooltip tooltip-left tooltip-accent "
            data-tip="info"
            onClick={() => {
              if (document) {
                (
                  document.getElementById("info_modal") as HTMLFormElement
                ).showModal();
              }
            }}
          >
            <Info
              size={14}
              className="text-zinc-400 hover:text-zinc-100 transition-colors hidden md:block"
            />
          </button>
          <dialog id="info_modal" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-zinc-400">
                ✕
              </button>
              <h3 className="font-semibold text-md text-zinc-400">
                Hello there!
              </h3>
              <p className="py-4">
                Test Track is a test management tool developed by{" "}
                <Link
                  className="text-cyan-400 hover:text-cyan-600 transition-colors"
                  href={"https://manoellopes.dev"}
                  target="_blank"
                >
                  Manoel Lopes
                </Link>
                . {currentYear} &copy; All rights reserved.
              </p>
            </form>
          </dialog>

          <button className="whitespace-nowrap flex items-center rounded-full px-3 py-0.5 bg-emerald-700/10 border border-emerald-800 text-sm font-medium text-emerald-600 hover:border-emerald-600 transition-colors">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
