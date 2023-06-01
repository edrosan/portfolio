export function Label({ children, forInput }) {
  return (
    <label htmlFor={forInput} className="text-[#1c1b1f]  dark:text-[#e5e1e6]">{children}</label>
  );
}
