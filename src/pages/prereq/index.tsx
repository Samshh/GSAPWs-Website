import { Icon } from "@iconify/react";
import useButtomToRight from "../../animations/useBottomToRight";
import useButtomToLeft from "../../animations/useBottomToLeft";
import useHover from "../../animations/useHover";

export default function PrereqPage() {
  const reqRef = useButtomToRight({ trigger: ".reqTrigger" });
  const mesRef = useButtomToLeft({ trigger: ".reqTrigger" });
  useHover();

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`${text} copied to clipboard!`);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

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

  const commands = [
    {
      command: "git clone https://github.com/Samshh/portfolio-2024",
      display: "git clone demo-url",
      icon: "solar:copy-outline",
    },
    {
      command: "npm install",
      display: "npm install",
      icon: "solar:copy-outline",
    },
    {
      command: "cd GSAPDemo",
      display: "cd GSAPDemo",
      icon: "solar:copy-outline",
    },
    {
      command: "npm run dev",
      display: "npm run dev",
      icon: "solar:copy-outline",
    },
  ];

  return (
    <section className="reqTrigger">
      <div className="grid grid-cols-1 grid-rows-[2fr_1fr] md:grid-cols-[2fr_1fr] md:grid-rows-1 items-center justify-center w-full">
        <div ref={reqRef} className="flex flex-col gap-[1rem]">
          <h1 className="text-primary">PLAYGROUND</h1>
          <ul>
            <li className="text-accent">Requirements:</li>
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
          <ul>
            <li className="text-accent">Paste in terminal:</li>
            {commands.map((cmd, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => copyToClipboard(cmd.command)}
                  className="hover"
                >
                  {cmd.display}
                  <Icon icon={cmd.icon} className="inline-block" />
                </button>
              </li>
            ))}
          </ul>
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
