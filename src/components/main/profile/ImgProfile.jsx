export function ImgProfile({ img }) {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:justify-center ">
      <img
        className="w-[200px] h-[200px] object-cover rounded-full"
        src={img}
      />
    </div>
  );
}
