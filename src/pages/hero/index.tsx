import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Icon } from "@iconify/react";

export default function HomePage() {
  const arrowDown = useRef(null);
  const theG = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0, yoyo: true });
    gsap.set(arrowDown.current, { y: -5 });
    tl.to(arrowDown.current, {
      y: 5,
      duration: 0.5,
      ease: "bounce.out",
    });

    gsap.from(".heading", {
      duration: 1,
      x: -100,
      opacity: 0,
      ease: "power3.inOut",
      onComplete: () => {
        if (theG.current) {
          gsap.to(theG.current, {
            duration: 1,
            ease: "power3.inOut",
            scale: 1.75,
            marginRight: "1rem",
          });
        }
      },
    });

    gsap.from(".paragraph", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(".scroll", {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      delay: 2,
      onComplete: () => {
        tl.play();
      },
    });
  });

  return (
    <section className="relative">
      <div>
        <h1 className="heading flex gap-[1rem] text-accent">
          <em className="flex">
            <div ref={theG} className="text-primary">
              G
            </div>
            SAP
          </em>
          <span>WORKSHOP</span>
        </h1>
        <p className="flex justify-end paragraph text-end w-full pr-[1rem]">
          by Sam Dacara
        </p>
      </div>
      <div className="scroll absolute bottom-[3rem] text-accent flex justify-center items-center gap-[0.25rem]">
        <p>Scroll Down</p>
        <div ref={arrowDown}>
          <Icon
            icon="jam:chevrons-down"
            className="inline-block text-primary text-[1rem] md:text-[2rem]"
          />
        </div>
      </div>
    </section>
  );
}
