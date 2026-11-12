import type { LanyardMember } from "@/components/ui/team-lanyard-rail";

/**
 * Data tim BATIDAO.
 *
 * `photo` menandai apakah file di `public/team/` sudah ada.
 * Kalau `false`, UI menampilkan slot placeholder — badge lanyard otomatis
 * jatuh ke siluet. Setelah upload foto, ubah `photo` jadi `true`.
 */
export type Member = LanyardMember & {
  photo: boolean;
  /** Divisi organisasi, dipakai untuk pengelompokan di scene Struktur. */
  division: "ceo" | "core" | "org";
};

export const TEAM: Member[] = [
  {
    id: "fathir",
    name: "Fathir Izzakky",
    role: "Founder Batidao",
    team: "CEO",
    division: "ceo",
    tone: 1,
    photo: false,
    image: "/team/fathir.jpg",
    bio: "Vamosing In Shingoku Erahhhhh",
    tags: ["CHAMBER", "Zeroks"],
    links: [
      { label: "Email", href: "mailto:halo@batidao.gg" },
      { label: "Portfolio", href: "#" },
    ],
  },
  {
    id: "el-rafi",
    name: "El Rafi Althaf Zamroni",
    role: "Vice President",
    team: "CEO",
    division: "ceo",
    tone: 2,
    photo: true,
    image: "/team/el-rafi.jpg",
    bio: "AUTIS KON !",
    tags: ["Jett", "Shimizu", "BTR JANCOK !"],
    links: [
      { label: "Email", href: "mailto:halo@batidao.gg" },
      { label: "Calendar", href: "#" },
    ],
  },
  {
    id: "bilhaq",
    name: "Bilhaq Zouvary B. Jatmiko",
    role: "Human Resources",
    team: "Core Team",
    division: "core",
    tone: 3,
    photo: false,
    image: "/team/bilhaq.jpg",
    bio: "Sigasi Ancog",
    tags: ["Kucing Schrodinger", "Jungoo"],
    links: [
      { label: "Email", href: "mailto:halo@batidao.gg" },
      { label: "Notes", href: "#" },
    ],
  },
  {
    id: "auliya",
    name: "Auliya Hisboel",
    role: "CEO Wife",
    team: "CEO",
    division: "ceo",
    tone: 4,
    photo: false,
    image: "/team/auliya.jpg",
    bio: "OYAYA",
    tags: ["Jarvis", "Coorapika", "Minotaur & Miks"],
    links: [
      { label: "Email", href: "mailto:halo@batidao.gg" },
      { label: "Portfolio", href: "#" },
    ],
  },
  {
    id: "ryandra",
    name: "Ryandra Ghani Firmansyah",
    role: "Fallen Heroes",
    team: "ABANDONED",
    division: "core",
    tone: 5,
    photo: false,
    image: "/team/ryandra.jpg",
    bio: "SIMBOKNE",
    tags: ["Neroo", "Jenaissante"],
    links: [
      { label: "Email", href: "mailto:halo@batidao.gg" },
      { label: "Open roles", href: "#" },
    ],
  },
  {
    id: "muhammad",
    name: "Muhammad Jisrin Syahadata",
    role: "Bendahara opo donatur yo",
    team: "Core Team",
    division: "core",
    tone: 2,
    photo: true,
    image: "/team/muhammad.jpg",
    bio: "Gameplay manja sek rek",
    tags: ["Muuniin", "IGL GONDOLMU A DAT?"],
    links: [
      { label: "Email", href: "mailto:halo@batidao.gg" },
      { label: "Calendar", href: "#" },
    ],
  },
  {
    id: "raydisa",
    name: "Raydisa Putra ACEMAD",
    role: "Human Resources",
    team: "Core Team",
    division: "core",
    tone: 1,
    photo: true,
    image: "/team/raydisa.jpg",
    bio: "60 hz ae sek ace el el",
    tags: ["Rum", "Grind"],
    links: [
      { label: "Email", href: "mailto:halo@batidao.gg" },
      { label: "Portfolio", href: "#" },
    ],
  },
  {
    id: "gesangrah",
    name: "Gesangrah Swandaru P.",
    role: "Memes God",
    team: "Organizational Team",
    division: "org",
    tone: 3,
    photo: true,
    image: "/team/gesangrah.jpg",
    bio: "kETAWA Gwesang",
    tags: ["Gipxy", "Boneca Ambajembo"],
    links: [
      { label: "Email", href: "mailto:halo@batidao.gg" },
      { label: "Calendar", href: "#" },
    ],
  },
  {
    id: "rafi",
    name: "Rafi Firdaus",
    role: "Creative Media",
    team: "Organizational Team",
    division: "org",
    tone: 5,
    photo: false,
    image: "/team/rafi.jpg",
    bio: "Hermes For my life",
    tags: ["Chizo", "liniiik", "ODIN"],
    links: [
      { label: "Email", href: "mailto:halo@batidao.gg" },
      { label: "Notes", href: "#" },
    ],
  },
  {
    id: "nizar",
    name: "Nizar Ramzy",
    role: "Public Relation",
    team: "Organizational Team",
    division: "org",
    tone: 4,
    photo: false,
    image: "/team/nizar.jpg",
    bio: "Ceng keceng",
    tags: ["Carratic", "Zyy", "Ramjinx.stonk"],
    links: [
      { label: "Email", href: "mailto:halo@batidao.gg" },
      { label: "Calendar", href: "#" },
    ],
  },
  {
    id: "rafaaryas",
    name: "Rafaaryas",
    role: "Human Resources",
    team: "Core Team",
    division: "core",
    tone: 2,
    photo: false,
    image: "/team/rafaaryas.jpg",
    bio: "Sokolilllll had",
    tags: ["Llama", "Had", "i miss herr."],
    links: [
      { label: "Email", href: "mailto:halo@batidao.gg" },
      { label: "Portfolio", href: "#" },
    ],
  },
  {
    id: "dipa",
    name: "Dipa Prammansyah",
    role: "Research",
    team: "Organizational Team",
    division: "org",
    tone: 1,
    photo: false,
    image: "/team/dipa.jpg",
    bio: "kuweceuwa aku rek",
    tags: ["Dibsie", "Nrvurr"],
    links: [
      { label: "Email", href: "mailto:halo@batidao.gg" },
      { label: "Calendar", href: "#" },
    ],
  },
];

export const DIVISIONS = [
  {
    id: "ceo",
    label: "CEO",
    kicker: "01",
    blurb: "Yang ngambil keputusan, dan yang kena omel kalau kalah.",
  },
  {
    id: "core",
    label: "Core Team",
    kicker: "02",
    blurb: "Tulang punggung. Main, latihan, dan kadang jadi bendahara dadakan.",
  },
  {
    id: "org",
    label: "Organizational",
    kicker: "03",
    blurb: "Yang bikin tim ini keliatan punya organisasi. Padahal hampir nggak.",
  },
] as const;

/** Nickname buat chip yang disebar di hero — parallax layer. */
export const HERO_CHIPS = [
  "CHAMBER",
  "JETT",
  "60 HZ AE",
  "OYAYA",
  "SIMBOKNE",
  "MUUNIIN",
  "ZEROKS",
  "ODIN",
  "CENG KECENG",
  "SOKOLILLLLL",
  "KUWECEUWA",
  "AUTIS KON !",
];
