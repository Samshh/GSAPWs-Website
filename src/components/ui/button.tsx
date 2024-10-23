interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      type="button"
      className="px-[1rem] py-[0.5rem] text-accent bg-[#161616] font-black rounded-lg transition-all ease-linear hover:scale-105"
    >
      <p>
        <em>{children}</em>
      </p>
    </button>
  );
}
