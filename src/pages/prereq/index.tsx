import { Icon } from "@iconify/react";
import useButtomToRight from "../../animations/useBottomToRight";
import useButtomToLeft from "../../animations/useBottomToLeft";
import useHover from "../../animations/useHover";
import CodeBlock from "../../components/ui/code";

export default function PrereqPage() {
  const reqRef = useButtomToRight({ trigger: ".reqTrigger" });
  const mesRef = useButtomToLeft({ trigger: ".reqTrigger" });
  useHover();

  const requirements = [
    {
      name: "Node.js",
      url: "https://nodejs.org/en/download/package-manager",
      icon: "mynaui:arrow-up-right",
    },
    {
      name: "Git",
      url: "https://git-scm.com/downloads",
      icon: "mynaui:arrow-up-right",
    },
    {
      name: "Code Editor",
      url: "https://code.visualstudio.com/download",
      icon: "mynaui:arrow-up-right",
    },
  ];

  return (
    <section className="reqTrigger">
      <div className="grid grid-cols-1 grid-rows-[2fr_1fr] md:grid-cols-[2fr_1fr] md:grid-rows-1 items-center justify-center w-full">
        <div ref={reqRef} className="flex flex-col gap-[2rem]">
          <h1 className="text-primary">PLAYGROUND</h1>
          <ul>
            <li>
              <h2 className="text-accent font-black">Requirements</h2>
            </li>
            {requirements.map((req, index) => (
              <li key={index}>
                <a
                  href={req.url}
                  rel="noopener"
                  target="_blank"
                  title={`download ${req.name}`}
                  className="flex w-fit"
                >
                  <button type="button" className="hover">
                    {req.name} <Icon icon={req.icon} className="inline-block" />
                  </button>
                </a>
              </li>
            ))}
          </ul>
          <div>
            <h2 className="text-accent font-black">Terminal</h2>
            <CodeBlock>
              {`git clone https://github.com/Samshh/GSAP-Demo.git

cd GSAP-Demo

npm install

npm run dev`}
            </CodeBlock>
          </div>
        </div>
        <div
          ref={mesRef}
          className="flex flex-col items-end justify-end h-full text-end"
        >
          <h2>
            Play around the <br />
            plugins of <span className="text-primary">GSAP</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
