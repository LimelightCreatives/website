import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ThemeToggle } from "./ThemeToggle";


const links = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-10 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/">
          
        <Image
          src="/branding/logo.svg"
          alt="Story Labs"
          width={100}
          height={32}
          priority
        />
        </Link>
        
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-display font-bold transition-opacity hover:opacity-50"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* <ThemeToggle /> */}

        <Button href="#apply">
          slave labour application
        </Button>
      </nav>
    </header>
  );
}