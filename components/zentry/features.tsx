"use client";

import * as React from "react";
import { ArrowIcon } from "./icons";

/** Kartu bento yang miring mengikuti kursor. */
export function BentoTilt({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [transformStyle, setTransformStyle] = React.useState("");
  const itemRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    setTransformStyle(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`,
    );
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransformStyle("")}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  src,
  title,
  description,
  isComingSoon,
}: {
  src: string;
  title: React.ReactNode;
  description?: string;
  isComingSoon?: boolean;
}) {
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = React.useState(0);
  const hoverButtonRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        playsInline
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h2 className="bento-title special-font">{title}</h2>
          {description && <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHoverOpacity(1)}
            onMouseLeave={() => setHoverOpacity(0)}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            <div
              className="pointer-events-none absolute -inset-px transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <ArrowIcon className="relative z-20 size-3.5" />
            <p className="relative z-20">segera</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">Divisi &amp; kerjaan</p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Empat hal yang kami kerjain tiap minggu: main, motong klip, bikin
            poster, dan ngobrol sampai subuh.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                line<b>u</b>p
              </>
            }
            description="Dua belas orang, satu rail badge. Tiap orang punya peran dan nickname yang cuma kami yang ngerti."
            isComingSoon
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  kon<b>t</b>en
                </>
              }
              description="Klip 12 detik yang bikin kelihatan kayak highlight turnamen. Editor kami tidur jam 5."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  turn<b>a</b>men
                </>
              }
              description="Scrim, liga kecil, dan kadang cuma mabar yang di-stream. Yang penting rame."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  kom<b>u</b>nitas
                </>
              }
              description="Discord yang hidup jam 2 pagi. Tempat orang ngobrol hal yang nggak penting tapi bikin betah."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h2 className="bento-title special-font max-w-64 text-black">
                se<b>g</b>era bany<b>a</b>k lagi.
              </h2>
              <ArrowIcon className="m-5 size-16 self-end scale-[3] text-black" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="/videos/feature-5.mp4"
              loop
              muted
              autoPlay
              playsInline
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}
