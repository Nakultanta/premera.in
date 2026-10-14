export default function GoldDivider() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center gap-3 my-5 text-rich-gold"
    >
      <span className="block h-px w-[min(22vw,112px)] bg-gradient-to-r from-transparent to-rich-gold" />
      <span className="inline-block w-2 h-2 rotate-45 border border-antique-gold bg-[#e9c17b]" />
      <span className="block h-px w-[min(22vw,112px)] bg-gradient-to-l from-transparent to-rich-gold" />
    </div>
  );
}
