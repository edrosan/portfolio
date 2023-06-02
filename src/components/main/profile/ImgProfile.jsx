export function ImgProfile({ img }) {
  return (
    <div className="w-full h-auto flex flex-col items-center  lg:justify-center  lg:h-full lg:ml-4">
      <img
        className="w-[250px] h-[250px] object-cover rounded-full lg:w-64 lg:h-64"
        src={img}
      />
    </div>
  );
}
