import { Navbar } from "@/components/zentry/navbar";
import { Hero } from "@/components/zentry/hero";
import { About } from "@/components/zentry/about";
import { Features } from "@/components/zentry/features";
import { Roster } from "@/components/zentry/roster-section";
import { Story } from "@/components/zentry/story";
import { Contact } from "@/components/zentry/contact";
import { SiteFooter } from "@/components/zentry/site-footer";

export default function Page() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <a
        href="#roster"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Lompat ke roster
      </a>

      <Navbar />
      <Hero />
      <About />
      <Features />
      <Roster />
      <Story />
      <Contact />
      <SiteFooter />
    </main>
  );
}
