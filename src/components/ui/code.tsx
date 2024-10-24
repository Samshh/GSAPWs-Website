interface CodeProps {
  children: React.ReactNode;
  description?: string;
}

export default function CodeBlock({ children, description }: CodeProps) {
  const handleCopy = () => {
    if (typeof children === "string") {
      navigator.clipboard.writeText(children).then(
        () => {
          alert("Copied to clipboard");
        },
        (err) => {
          console.error("Failed to copy text: ", err);
        }
      );
    } else {
      console.error("Children is not a string");
    }
  };

  return (
    <div className="flex flex-col gap-[0.5rem] flex-grow w-full">
      <p className="w-full">{description}</p>
      <div
        onClick={handleCopy}
        className="text-black p-1 rounded cursor-pointer"
      >
        <div className="bg-[#161616] p-[1rem] rounded-md border-[2px] border-accent select-text text-start whitespace-pre-wrap overflow-auto max-h-[360px] max-w-[640px] transition-all ease-linear hover:border-primary">
          <code>
            <p>{children}</p>
          </code>
        </div>
      </div>
    </div>
  );
}
