import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface ChangeBGProps {
  colorBG: string;
  color: string;
}

export default function useChangeBG({ colorBG ,color }: ChangeBGProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to("#root", {
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      duration: 0.5,
      backgroundColor: colorBG,
      color: color,
      ease: "power3.inOut",
    });
  });

  return ref;
}
