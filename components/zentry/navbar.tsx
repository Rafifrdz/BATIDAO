"use client";

import * as React from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ArrowIcon } from "./icons";

const NAV_ITEMS = [
  { label: "Asal", href: "#about" },
  { label: "Divisi", href: "#features" },
  { label: "Roster", href: "#roster" },
  { label: "Gabung", href: "#contact" },
];

export function Navbar() {
  const [isAudioPlaying, setIsAudioPlaying] = React.useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = React.useState(false);
  const [isNavVisible, setIsNavVisible] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const audioElementRef = React.useRef<HTMLAudioElement>(null);
  const navContainerRef = React.useRef<HTMLDivElement>(null);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    if (!audioElementRef.current) return;
    if (isAudioPlaying) void audioElementRef.current.play().catch(() => {});
    else audioElementRef.current.pause();
  }, [isAudioPlaying]);

  React.useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const nav = navContainerRef.current;

      if (current === 0) {
        setIsNavVisible(true);
        nav?.classList.remove("floating-nav");
      } else if (current > lastScrollY.current) {
        setIsNavVisible(false);
        nav?.classList.add("floating-nav");
      } else {
        setIsNavVisible(true);
        nav?.classList.add("floating-nav");
      }
      lastScrollY.current = current;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <a href="#hero" className="flex items-center gap-2" aria-label="BATIDÃO — ke atas">
              <span className="relative grid size-9 place-items-center rounded-md bg-blue-50">
                <span className="font-zentry text-lg font-black leading-none text-black">B</span>
                <span className="absolute -right-1 -top-1 size-2 rounded-[2px] bg-violet-300" />
              </span>
            </a>

            <Button
              id="roster-button"
              href="#roster"
              title="Roster"
              rightIcon={<ArrowIcon className="size-4" />}
              containerClass="hidden items-center justify-center gap-1 bg-blue-50 md:flex"
            />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="nav-hover-btn">
                  {item.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setIsAudioPlaying((v) => !v);
                setIsIndicatorActive((v) => !v);
              }}
              aria-label={isAudioPlaying ? "Matikan audio" : "Nyalakan audio"}
              aria-pressed={isAudioPlaying}
              className="ml-6 flex items-center gap-0.5 md:ml-10"
            >
              <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop />
              {[1, 2, 3, 4].map((bar) => (
                <span
                  key={bar}
                  className={cn("indicator-line", isIndicatorActive && "active")}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>

            {/* menu mobile — template aslinya tidak punya ini */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              className="ml-5 flex flex-col gap-1 md:hidden"
            >
              <span
                className={cn(
                  "block h-px w-5 bg-white transition-transform",
                  menuOpen && "translate-y-[3px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-white transition-transform",
                  menuOpen && "-translate-y-[3px] -rotate-45",
                )}
              />
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="mx-4 mt-2 rounded-lg border border-white/15 bg-black p-4 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-3 font-zentry text-2xl uppercase text-blue-50 last:border-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}
