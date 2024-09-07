"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const socialLinks = [
    { name: "Discord", url: "https://discord.gg/RYM3ep5" },
    { name: "Facebook", url: "https://www.facebook.com/cesa.concordia/" },
    { name: "Instagram", url: "https://www.instagram.com/concordiaesports/" },
    { name: "Twitter", url: "https://twitter.com/CeSAConcordia" },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCoorPVHLGUUD-Is00s25SyA",
    },
    { name: "Twitch", url: "https://www.twitch.tv/esportsconcordia" },
  ];

  const teamLinks = [
    { name: "Staff and Creative Team", url: "/teams/staff-and-creative-team" },
    { name: "Apex", url: "/teams/apex-legends" },
    { name: "Counter Strike 2", url: "/teams/cs2" },
    { name: "Deadlock", url: "/teams/deadlock" },
    { name: "Dota 2", url: "/teams/dota2" },
    { name: "League of Legends", url: "/teams/league-of-legends" },
    { name: "Overwatch 2", url: "/teams/overwatch-2" },
    { name: "Rainbow Six: Siege", url: "/teams/rainbow-six-siege" },
    { name: "Rocket League", url: "/teams/rocket-league" },
    { name: "Smash Ultimate", url: "/teams/smash-ultimate" },
    { name: "Specter Divide", url: "/teams/specter-divide" },
    { name: "Valorant", url: "/teams/valorant" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-concordia-black" : "bg-concordia-burgundy"
      }`}
    >
      <div className="container mx-auto px-3 flex items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] bg-concordia-grey"
            >
              <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                <X className="h-4 w-4 text-concordia-gold" />
                <span className="sr-only">Close</span>
              </SheetClose>
              <h2 className="text-2xl font-bold mb-4 text-concordia-gold">
                Teams
              </h2>
              <nav className="flex flex-col gap-4">
                {teamLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    className="text-lg text-white hover:text-concordia-gold transition-colors duration-200 bg-concordia-burgundy py-2 px-4 rounded-md"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/calendar" className="ml-2">
            <Image
              src="/icons/calendar.png"
              alt="Calendar"
              width={24}
              height={24}
              className="text-white hover:text-concordia-gold transition-colors"
            />
          </Link>
        </div>

        <Link href="/" className="flex items-center justify-center">
          <Image
            src={scrolled ? "/concordia.png" : "/concordia-white.png"}
            alt="concordia"
            width={80}
            height={80}
            className="transition-opacity duration-300"
          />
        </Link>

        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/icons/${link.name.toLowerCase()}_icon.svg`}
                alt={link.name}
                width={24}
                height={24}
                className="text-white hover:text-concordia-gold transition-colors"
              />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
