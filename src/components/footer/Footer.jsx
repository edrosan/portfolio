import { ColorBar } from "./ColorBar";

export function Footer() {
  return (
    <footer className="w-full mt-8 mb-4 px-4 flex flex-col text-sm text-[#47464f] bg-[#fffbff] dark:text-[#c8c5d0] dark:bg-[#1c1b1f]">
      <section className="w-full flex justify-between">
        <span>Eduardo Rodriguez Sanchez</span>
        <span>2023</span>
      </section>

      <ColorBar />
    </footer>
  );
}
