import TeamLanyardRail from "@/components/ui/team-lanyard-rail";
import { AnimatedTitle } from "@/components/zentry/animated-title";
import { TEAM } from "@/lib/team";

export function Roster() {
  const withPhoto = TEAM.filter((m) => m.photo).length;

  return (
    <section id="roster" className="relative w-screen overflow-hidden bg-black pb-10">
      <div className="flex flex-col items-center pt-28 text-center">
        <p className="font-general text-sm uppercase text-blue-50 md:text-[10px]">roster</p>

        <AnimatedTitle
          title="dua belas <b>k</b>epala"
          containerClass="mt-4 !text-blue-50"
        />

        <p className="mt-6 max-w-md px-6 font-circular-web text-base text-blue-50/60">
          Tarik satu badge ke bawah, geser sepanjang rail, klik buat balik
          kartunya. Bagian belakang isinya lebih jujur.
        </p>

        <p className="mt-6 font-general text-[10px] uppercase text-blue-50/40">
          {withPhoto}/{TEAM.length} foto · sisanya menyusul
        </p>
      </div>

      <div className="relative mt-2">
        <TeamLanyardRail items={TEAM} heading="" eyebrow="" caption="" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-30 w-16 bg-gradient-to-r from-black to-transparent sm:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-30 w-16 bg-gradient-to-l from-black to-transparent sm:w-24"
        />
      </div>
    </section>
  );
}
