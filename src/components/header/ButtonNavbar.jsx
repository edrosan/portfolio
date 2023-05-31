export function ButtonNavbar({children, changeOpenMenu}) {

  const handleClick = () => {
    changeOpenMenu()
  }

  return(
    <button onClick={handleClick} className="md:hidden">{children}</button>
  )
}