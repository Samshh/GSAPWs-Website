import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ButtomToRightProps {
  trigger: string;
  delay?: number;
}

export default function useButtomToRight({trigger, delay}: ButtomToRightProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const elements = gsap.utils.toArray(ref.current.children);
    gsap.from(elements, {
      duration: 1,
      delay: delay || 0,
      x: -100,
      y: 100,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: trigger,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      stagger: 0.25,
    });
  });

  return ref;
}