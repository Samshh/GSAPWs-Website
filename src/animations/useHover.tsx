import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function useHover() {
  useGSAP(() => {
    const hoverElements = Array.from(
      document.querySelectorAll<HTMLElement>(".hover")
    );

    const handleMouseEnter = (el: HTMLElement) => {
      el.classList.add("hovered");
      gsap.to(el, { paddingLeft: 16, duration: 0.5, ease: "power3.out" });
    };

    const handleMouseLeave = (el: HTMLElement) => {
      el.classList.remove("hovered");
      gsap.to(el, { paddingLeft: 0, duration: 0.5, ease: "power3.out" });
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => handleMouseEnter(el));
      el.addEventListener("mouseleave", () => handleMouseLeave(el));
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => handleMouseEnter(el));
        el.removeEventListener("mouseleave", () => handleMouseLeave(el));
      });
    };
  });
}
