"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "./animated-title";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function About() {
  React.useEffect(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    return () => {
      clipAnimation.scrollTrigger?.kill();
      clipAnimation.kill();
    };
  }, []);

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Selamat datang di Batidão
        </p>

        <AnimatedTitle
          title="dua belas <b>k</b>epala <br /> satu grup ch<b>a</b>t"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>Dari grup chat jadi tim—nggak ada yang direncanakan</p>
          <p className="text-gray-500">
            Kami main, bikin konten, dan ngobrol sampai jam empat pagi. Kadang
            semuanya sekaligus dalam satu malam.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/img/about.webp"
            alt=""
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
