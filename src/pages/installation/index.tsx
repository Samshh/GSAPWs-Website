import CodeBlock from "../../components/ui/code";
import useButtomToRight from "../../animations/useBottomToRight";

export default function InstallationPage() {
  const installRef = useButtomToRight({ trigger: ".installTrigger" });

  return (
    <section className="installTrigger">
      <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 justify-start items-start w-full">
        <div ref={installRef} className="flex flex-col items-start justify-center gap-[2rem]">
          <h1 className="text-start text-primary font-black">INSTALLATION</h1>
          {/* <div className="flex flex-col gap-[1rem] w-full">
            <h2 className="font-black">React Vite</h2>
            <CodeBlock description="Create a react template">{`npm create vite@latest my-react-app -- --template react-ts`}</CodeBlock>
          </div> */}
          <div className="flex flex-col gap-[1rem] w-full">
            <h2 className="font-black text-accent">GSAP</h2>
            <CodeBlock description="Install GSAP">{`npm install gsap`}</CodeBlock>
            <CodeBlock description="Add this for React:">{`npm install @gsap/react`}</CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
