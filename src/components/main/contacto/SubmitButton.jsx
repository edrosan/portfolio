export function SubmitButton({children}) {
  return (
    <button
      type="submit"
      className="text-white  h-[55px] text-[16px] items-center bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl group relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium dark:text-[#1c1b1f] dark:from-pink-300 dark:via-purple-300 dark:to-indigo-400"
    >
      {children}
    </button>
  );
}
