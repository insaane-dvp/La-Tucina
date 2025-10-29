import { siteConfig } from "../app/essentials/site";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-8 bg-secondary text-secondary-foreground">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} {siteConfig.name}. Tutti i diritti riservati.</p>
        <p className="text-sm mb-4">
          Indirizzo: Via Roma 123, Milano, Italia | Telefono: +39 02 1234567 | Email: info@latucina.it
        </p>
        <div className="flex justify-center items-center space-x-4">
          <Link href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href={siteConfig.links.facebook} target="_blank" rel="noreferrer" className="hover:text-white">
            <Facebook className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}