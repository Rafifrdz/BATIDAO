"use client";

import * as React from "react";
import gsap from "gsap";

/** Kontainer video kecil yang mengikuti kursor dengan rotasi 3D. */
export function VideoPreview({ children }: { children: React.ReactNode }) {
  const [isHovering, setIsHovering] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();
    const xOffset = clientX - (rect.left + rect.width / 2);
    const yOffset = clientY - (rect.top + rect.height / 2);

    if (!isHovering) return;

    gsap.to(sectionRef.current, {
      x: xOffset,
      y: yOffset,
      rotationY: xOffset / 2,
      rotationX: -yOffset / 2,
      transformPerspective: 500,
      duration: 1,
      ease: "power1.out",
    });

    gsap.to(contentRef.current, {
      x: -xOffset,
      y: -yOffset,
      duration: 1,
      ease: "power1.out",
    });
  };

  React.useEffect(() => {
    if (isHovering) return;
    gsap.to(sectionRef.current, {
      x: 0,
      y: 0,
      rotationY: 0,
      rotationX: 0,
      duration: 1,
      ease: "power1.out",
    });
    gsap.to(contentRef.current, { x: 0, y: 0, duration: 1, ease: "power1.out" });
  }, [isHovering]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="absolute z-50 size-full overflow-hidden rounded-lg"
      style={{ perspective: "500px" }}
    >
      <div
        ref={contentRef}
        className="origin-center rounded-lg"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </section>
  );
}
