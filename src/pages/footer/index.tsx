import Button from "../../components/ui/button";

export default function FooterPage() {
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
          <a
            href="https://github.com/Samshh/GSAP_Workshop"
            target="_blank"
            rel="noopener"
            title="source"
          >
            <Button>source code</Button>
          </a>
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
