export function Footer() {
  return (
    <footer className="w-full mt-8 mb-4 px-4 flex flex-col text-[#47464f] bg-[#fffbff] dark:text-[#c8c5d0] dark:bg-[#1c1b1f]">
      <section className="w-full flex justify-between">
        <span>Eduardo Rodriguez Sanchez</span>
        <sapan>2023</sapan>
      </section>

      <div className="flex mt-4">
        <span className="w-[25%] h-2 bg-[#de8ca7]"></span>
        <span className="w-[25%] h-2 bg-[#9f6383]"></span>
        <span className="w-[25%] h-2 bg-[#674867]"></span>
        <span className="w-[25%] h-2 bg-[#443a59]"></span>
      </div>
    </footer>
  );
}
