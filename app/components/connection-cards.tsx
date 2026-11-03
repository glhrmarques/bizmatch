"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const profiles = [
  {
    name: "Daniel Cupola",
    role: "Head de TI",
    portrait: "/images/daniel-cupola.png",
    crop: "top-[0.21%] left-[-38.97%] h-[147.92%] w-[186.27%]",
  },
  {
    name: "Asha Sharma",
    role: "Chief Financial Officer",
    portrait: "/images/asha-sharma.png",
    crop: "top-[-0.33%] left-[-0.44%] h-[125.04%] w-[222.29%]",
  },
  {
    name: "Daniel Cupola",
    role: "Chief Executive Officer",
    portrait: "/images/daniel-ceo.png",
    crop: "top-0 left-[-90.37%] h-[185.18%] w-[323.33%]",
  },
];

export default function ConnectionCards() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let interval: ReturnType<typeof setInterval> | undefined;

    function updateRotation() {
      clearInterval(interval);
      if (!motion.matches) {
        interval = setInterval(() => {
          if (!document.hidden) setActive((index) => (index + 1) % profiles.length);
        }, 2000);
      }
    }

    updateRotation();
    motion.addEventListener("change", updateRotation);
    return () => {
      clearInterval(interval);
      motion.removeEventListener("change", updateRotation);
    };
  }, []);

  return (
    <div className="grid h-[120px] w-[500px]" data-connection-carousel>
      {profiles.map((profile, index) => (
        <div
          key={profile.portrait}
          data-profile={index}
          data-active={index === active}
          className={`col-start-1 row-start-1 flex items-center gap-3 rounded-xl bg-gray-900/25 px-6 text-foundation-white backdrop-blur-[5px] transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${index === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
        >
          <div className="relative size-16 shrink-0 overflow-hidden rounded-full bg-black">
            <Image className={`absolute max-w-none ${profile.crop}`} src={profile.portrait} alt="" width={208} height={120} loading="eager" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-1 whitespace-nowrap">
            <strong className="text-h6 font-bold">{profile.name}</strong>
            <span className="text-paragraph-default">{profile.role}</span>
          </div>
          <div className="flex items-center gap-3 text-paragraph-small font-medium whitespace-nowrap">
            Deseja se conectar
            <Image src="/images/connect.svg" width={24} height={24} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}
