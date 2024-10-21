import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import useButtomToLeft from "../../animations/useBottomToLeft";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroductionPage() {
  const mesRef = useButtomToLeft({ trigger: ".introTrigger", delay: 0.5 });

  const greenRef = useRef(null);
  const sockRef = useRef(null);
  const animationRef = useRef(null);
  const platformRef = useRef(null);
  const webflowRef = useRef(null);

  useGSAP(() => {
    gsap.from(greenRef.current, {
      duration: 1,
      x: -100,
      opacity: 0,
      rotateX: 360,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".introTrigger",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(sockRef.current, {
      duration: 1.5,
      x: 100,
      opacity: 0,
      ease: "bounce.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".introTrigger",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(animationRef.current, {
      duration: 1.5,
      scale: 0,
      opacity: 0,
      ease: "elastic.out(1, 0.75)",
      delay: 0.4,
      scrollTrigger: {
        trigger: ".introTrigger",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(platformRef.current, {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: "power3.out",
      delay: 0.6,
      scrollTrigger: {
        trigger: ".introTrigger",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(webflowRef.current, {
      duration: 1,
      opacity: 0,
      y: -10,
      ease: "power3.out",
      delay: 1.2,
      scrollTrigger: {
        trigger: ".introTrigger",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <section className="introTrigger">
      <div className="grid grid-cols-1 grid-rows-[2fr_1fr] items-center justify-center w-full h-full">
        <div className="flex flex-col text-accent">
          <h1 ref={greenRef} className="text-primary">
            G<span className="text-secondary">REEN</span>
          </h1>
          <h1 ref={sockRef}>
            S<span className="text-secondary">OCK</span>
          </h1>
          <h1 ref={animationRef}>
            A<span className="text-secondary">NIMATION</span>
          </h1>
          <h1 ref={platformRef}>
            P<span className="text-secondary">LATFORM</span>
          </h1>
          <p ref={webflowRef}>by Webflow</p>
        </div>
        <div
          ref={mesRef}
          className="flex flex-col justify-end items-end text-end"
        >
          <p className="text-primary">What is GSAP?</p>
          <h2>
            A JavaScript Library <br /> made for building animations
          </h2>
        </div>
      </div>
    </section>
  );
}
