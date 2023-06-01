export function Input( {register, placeholder, name, type } ) {
  const classInvalid = `invalid:bg-[#ffdad6] invalid:border-[#410002] invalid:text-[#410002] dark:invalid:bg-[#ffb4ab] dark:invalid:border-[#690005] dark:invalid:text-[#690005]`
  
  return (
    <input
      {...register(name)}
      type={type}
      autoComplete="off"
      className={`w-full rounded-lg h-[55px] mt-2 p-5 bg-[#e4e1ec] text-[#47464f] border border-transparent outline-none  dark:bg-[#47464f] dark:text-[#c8c5d0] ${classInvalid}`}
      placeholder={placeholder}
    />
  );
}
