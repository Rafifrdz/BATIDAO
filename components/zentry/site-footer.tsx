import { DiscordIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from "./icons";

const SOCIALS = [
  { href: "#", label: "Discord", icon: DiscordIcon },
  { href: "#", label: "Instagram", icon: InstagramIcon },
  { href: "#", label: "YouTube", icon: YoutubeIcon },
  { href: "#", label: "TikTok", icon: TiktokIcon },
];

export function SiteFooter() {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © {new Date().getFullYear()} NO BATIDÃO · Yogyakarta
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              <social.icon className="size-4" />
            </a>
          ))}
        </div>

        <a
          href="mailto:halo@batidao.gg"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          halo@batidao.gg
        </a>
      </div>
    </footer>
  );
}
