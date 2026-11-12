"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "./button";
import { VideoPreview } from "./video-preview";
import { ArrowIcon } from "./icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const TOTAL_VIDEOS = 1;
const videoSrc = (_index: number) => "/videos/hero-1.mp4";

export function Hero() {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [hasClicked, setHasClicked] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [loadedVideos, setLoadedVideos] = React.useState(0);

  const nextVdRef = React.useRef<HTMLVideoElement>(null);

  const handleVideoLoad = React.useCallback(() => {
    setLoadedVideos((prev) => prev + 1);
  }, []);

  React.useEffect(() => {
    if (loadedVideos >= 1) setLoading(false);
  }, [loadedVideos]);

  /* Pengaman: template aslinya bisa nyangkut selamanya di loader kalau
     satu video gagal/ lambat load. Paksa lepas setelah 4 detik. */
  React.useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 4000);
    return () => window.clearTimeout(t);
  }, []);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prev) => (prev % TOTAL_VIDEOS) + 1);
  };

  React.useEffect(() => {
    if (!hasClicked) return;
    gsap.set("#next-video", { visibility: "visible" });
    gsap.to("#next-video", {
      transformOrigin: "center center",
      scale: 1,
      width: "100%",
      height: "100%",
      duration: 1,
      ease: "power1.inOut",
      onStart: () => void nextVdRef.current?.play(),
    });
    gsap.from("#current-video", {
      transformOrigin: "center center",
      scale: 0,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, [currentIndex, hasClicked]);

  React.useEffect(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div id="hero" className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black"
      >
        <div>
          {/* preview kecil yang bisa diklik */}
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextVdRef}
                  src={videoSrc((currentIndex % TOTAL_VIDEOS) + 1)}
                  loop
                  muted
                  playsInline
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </VideoPreview>
          </div>

          <video
            src={videoSrc(currentIndex)}
            loop
            muted
            playsInline
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={videoSrc(currentIndex === TOTAL_VIDEOS - 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          E<b>S</b>PORTS
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              batidã<b>o</b>
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Dua belas orang <br /> Satu grup chat
            </p>

            <Button
              id="watch-trailer"
              href="#roster"
              title="Lihat roster"
              leftIcon={<ArrowIcon className="size-4" />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        E<b>S</b>PORTS
      </h1>
    </div>
  );
}
