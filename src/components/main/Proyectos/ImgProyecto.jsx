export function ImgProyecto({ img }) {
  return (
    <div className="w-full h-full bg-[#e4e1ec]  rounded-t-lg  border border-transparent border-t-[#e4e1ec] border-x-[#e4e1ec] dark:bg-[#47464f] dark:border-t-[#47464f] dark:border-x-[#47464f]">
      <div className="w-auto h-full mx-4 mt-4 mb-0">
        <img className="w-full h-full object-cover rounded-t-lg " src={img} />
      </div>
    </div>
  );
}
