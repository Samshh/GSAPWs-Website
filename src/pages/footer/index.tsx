import Button from "../../components/ui/button";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function FooterPage() {
  const arrowLeft = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0, yoyo: true });
    gsap.set(arrowLeft.current, { x: -5 });
    tl.to(arrowLeft.current, {
      x: 5,
      duration: 0.5,
      ease: "bounce.in",
    });
  });
  return (
    <footer className="w-full bg-accent h-[360px] text-[#161616] select-none">
      <div className="flex flex-col sm:flex-row max-w-[1280px] mx-auto px-[1rem] py-[3rem] items-center justify-center gap-[1rem] h-full">
        <div className="flex flex-col items-start justify-start h-full w-full gap-[1.5rem]">
          <div>
            <h1>
              Thank you<span className="text-primary">!</span>
            </h1>
            <em>
              <h2 className="text-[#bbbaa6]">
                You may use the source code of this website as a learning
                material.
              </h2>
            </em>
          </div>
          <div className="flex gap-[0.5rem] lg:gap-[1rem] justify-center items-center">
            <a
              href="https://github.com/Samshh/GSAP_Workshop"
              target="_blank"
              rel="noopener"
              title="source"
            >
              <Button>source code</Button>
            </a>
            <div ref={arrowLeft}>
              <Icon
                icon="icon-park-outline:arrow-left"
                className="text-[1.75rem] lg:text-[2.5rem] text-primary"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end text-end h-full w-full">
          <p className="text-[#bbbaa6]">developed by</p>
          <a
            href="https://www.samshh.me/"
            target="_blank"
            rel="noopener"
            title="dev"
            className="transition-all ease-linear hover:scale-105"
          >
            <em>
              <h2 className="font-black">samshh.</h2>
            </em>
          </a>
        </div>
      </div>
    </footer>
  );
}
