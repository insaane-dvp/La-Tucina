"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { siteConfig } from "../app/essentials/site";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/[.8] backdrop-blur-sm ">
      <div className="flex h-16 items-center px-4 md:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full justify-between items-center border-b-2 border-secondary pb-2">
          {/* Left Item */}
          <Link href="#menù" className={`${navigationMenuTriggerStyle()} bg-secondary text-secondary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80`}>
            MENU'
          </Link>

          {/* Center Item */}
          <Link href="/" className="text-xl font-monsterrat">
            {<img src={siteConfig.icon} alt="Logo" className={`${navigationMenuTriggerStyle()} w-15 h-15`} />}
          </Link>

          {/* Right Item */}
          <Link href="#booking" className={`${navigationMenuTriggerStyle()} bg-secondary text-secondary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80`}>
            PRENOTA
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex w-full justify-between items-center">
          <Link href="/" className="text-xl font-bold text-foreground">
            {siteConfig.name}
          </Link>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="transition-transform duration-200 hover:scale-105">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Apri menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="#menù" className="hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  Menù
                </Link>
                <Link href="#booking" className="hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  Prenota
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </div>
    </header>
  );
}