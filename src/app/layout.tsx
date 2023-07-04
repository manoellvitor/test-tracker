import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test Tracker",
  description: "App for management and tracking of tested components.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-900 text-zinc-200">
        <Sidebar />

        <div className="lg:ml-80 relative h-screen">
          <Header />

          <div className="py-24 max-w-[95%] px-8 mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
