"use client";

import TeamLanyardRail from "@/components/ui/team-lanyard-rail";
import type { LanyardMember } from "@/components/ui/team-lanyard-rail";

export const LANYARD_DEMO_TEAM: LanyardMember[] = [
  {
    id: "Fathir",
    name: "Fathir Izzakky",
    role: "Founder Batidao",
    team: "CEO",
    tone: 1,
    image: "/team/ada.jpg",
    bio: "Vamosing In Shingoku Erahhhhh",
    tags: ["CHAMBER", "Zeroks"],
    links: [{ label: "Email", href: "#" }, { label: "Portfolio", href: "#" }],
  },
  {
    id: "El Rafi",
    name: "El Rafi Althaf Zamroni",
    role: "Vice President Batidao",
    team: "CEO",
    tone: 2,
    image: "/team/ravi.jpg",
    bio: "AUTIS KON !",
    tags: ["Jett", "Shimizu", "BTR JANCOK !"],
    links: [{ label: "Email", href: "#" }, { label: "Calendar", href: "#" }],
  },
  {
    id: "Bilhaq",
    name: "Bilhaq Zouvary Brahmantya Jatmiko",
    role: "Human Resources",
    team: "Core Team",
    tone: 3,
    image: "/team/imani.jpg",
    bio: "Sigasi Ancog",
    tags: ["Kucing Schrodinger", "Jungoo"],
    links: [{ label: "Email", href: "#" }, { label: "Notes", href: "#" }],
  },
  {
    id: "Auliya",
    name: "Auliya Hisboel",
    role: "CEO Wife",
    team: "CEO",
    tone: 4,
    image: "/team/kenji.jpg",
    bio: "OYAYA",
    tags: ["Jarvis", "Coorapika", "Minotaur & Miks"],
    links: [{ label: "Email", href: "#" }, { label: "Portfolio", href: "#" }],
  },
  {
    id: "Ryandra",
    name: "Ryandra Ghani Firmansyah",
    role: "Fallen Heroes",
    team: "ABANDONED",
    tone: 5,
    image: "/team/lucia.jpg",
    bio: "SIMBOKNE",
    tags: ["Neroo", "Jenaissante"],
    links: [{ label: "Email", href: "#" }, { label: "Open roles", href: "#" }],
  },
  {
    id: "Muhammad",
    name: "Muhammad Jisrin Syahadata",
    role: "Bendahara opo donatur yo",
    team: "Core Team",
    tone: 2,
    image: "/team/mateo.jpg",
    bio: "Gameplay manja sek rek",
    tags: ["Muuniin", "IGL GONDOLMU A DAT?"],
    links: [{ label: "Email", href: "#" }, { label: "Calendar", href: "#" }],
  },
  {
    id: "Raydisa",
    name: "Raydisa Putra ACEMAD",
    role: "Human Resources",
    team: "Core Team",
    tone: 1,
    image: "/team/mila.jpg",
    bio: "60 hz ae sek ace el el",
    tags: ["Rum", "Grind"],
    links: [{ label: "Email", href: "#" }, { label: "Portfolio", href: "#" }],
  },
  {
    id: "Gesangrah",
    name: "Gesangrah Swandaru Pratama",
    role: "Memes God",
    team: "Organizational Team",
    tone: 3,
    image: "/team/noah.jpg",
    bio: "kETAWA Gwesang",
    tags: ["Gipxy", "Boneca Ambajembo"],
    links: [{ label: "Email", href: "#" }, { label: "Calendar", href: "#" }],
  },
  {
    id: "Rafi",
    name: "Rafi Firdaus",
    role: "Creative Media",
    team: "Organizational Team",
    tone: 5,
    image: "/team/sofia.jpg",
    bio: "Hermes For my life",
    tags: ["Chizo", "liniiik","ODIN"],
    links: [{ label: "Email", href: "#" }, { label: "Notes", href: "#" }],
  },
  {
    id: "Nizar",
    name: "Nizar Ramzy",
    role: "Public Relation",
    team: "Organizational Team",
    tone: 4,
    image: "/team/theo.jpg",
    bio: "Ceng keceng",
    tags: ["Carratic", "Zyy", "Ramjinx.stonk"],
    links: [{ label: "Email", href: "#" }, { label: "Calendar", href: "#" }],
  },
  {
    id: "Rafaaryas",
    name: "Rafaaryas",
    role: "Human Resources",
    team: "Core Team",
    tone: 2,
    image: "/team/hana.jpg",
    bio: "Sokolilllll had",
    tags: ["Llama", "Had", "i miss herr."],
    links: [{ label: "Email", href: "#" }, { label: "Portfolio", href: "#" }],
  },
  {
    id: "Dipa",
    name: "Dipa prammansyah",
    role: "Research",
    team: "Organizational Team",
    tone: 1,
    image: "/team/marcus.jpg",
    bio: "kuweceuwa aku rek",
    tags: ["Dibsie", "Nrvurr"],
    links: [{ label: "Email", href: "#" }, { label: "Calendar", href: "#" }],
  },
];

export default function TeamLanyardRailDemo({ autoplay = true }: { autoplay?: boolean }) {
  return (
    <div data-lanyard-demo className="flex min-h-svh w-full items-center justify-center bg-background text-foreground">
      <TeamLanyardRail
        items={LANYARD_DEMO_TEAM}
        eyebrow="Meet the team · Twelve people"
        heading="NO BATIDÃO"
        caption="Brush along the rail to meet someone, pull a badge down, click to flip it."
        autoplay={autoplay}
        action={
          <button type="button" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm outline-none transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-chart-2" />
            We&apos;re hiring
          </button>
        }
      />
    </div>
  );
}
