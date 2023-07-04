import {
  Boxes,
  CircuitBoard,
  Cpu,
  HardDrive,
  LineChart,
  MemoryStick,
  Network,
  PackageOpen,
  ScrollText,
  Server,
} from "lucide-react";
import Link from "next/link";
import { Orbitron } from "next/font/google";
import NavLink from "./NavLink";

const orbitron = Orbitron({ subsets: ["latin"] });

const DashboardLinks = [
  {
    id: 1,
    name: "Charts / Metrics",
    href: "/test/a",
    icon: <LineChart size={16} />,
  },
  {
    id: 2,
    name: "Documents",
    href: "/test/b",
    icon: <ScrollText size={16} />,
  },
  {
    id: 3,
    name: "Management",
    href: "/test/c",
    icon: <PackageOpen size={16} />,
  },
];

const HardwareLinks = [
  {
    id: 1,
    name: "Motherboard",
    href: "/test/d",
    icon: <CircuitBoard size={16} />,
  },
  {
    id: 2,
    name: "RAM Memory",
    href: "/test/e",
    icon: <MemoryStick size={16} />,
  },
  {
    id: 3,
    name: "CPU",
    href: "/test/f",
    icon: <Cpu size={16} />,
  },
  {
    id: 4,
    name: "Hard Drive",
    href: "/test/g",
    icon: <Server size={16} />,
  },
  {
    id: 5,
    name: "SSD",
    href: "/test/h",
    icon: <HardDrive size={16} />,
  },
  {
    id: 6,
    name: "Network Cards",
    href: "/test/i",
    icon: <Network size={16} />,
  },
];

export default function Sidebar() {
  return (
    <aside className="border-r border-zinc-50/10 w-80 fixed left-0 top-0 bottom-0 p-6 hidden lg:block">
      <Link
        href={"/"}
        className="text-emerald-700 flex items-center gap-2 justify-center hover:text-emerald-800 transition-colors"
      >
        <Boxes size={32} />
        <span className={`${orbitron.className} font-semibold text-xl`}>
          Test | Tracker
        </span>
      </Link>

      <nav className="flex flex-col gap-6 mt-10">
        <div className="flex flex-col gap-4">
          <strong className="font-medium text-sm">Dashboard</strong>

          <div className="text-sm flex flex-col pl-2">
            {DashboardLinks.map((data) => {
              return (
                <NavLink key={data.id} href={data.href} icon={data.icon}>
                  {data.name}
                </NavLink>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <strong className="font-medium text-sm">Hardware Components</strong>

          <div className="text-sm flex flex-col pl-2">
            {HardwareLinks.map((data) => {
              return (
                <NavLink key={data.id} href={data.href} icon={data.icon}>
                  {data.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    </aside>
  );
}
