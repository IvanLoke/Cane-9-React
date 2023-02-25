import Button from "./Button"

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-black h-screen w-[320px]">
      <Button children="English"></Button>
      <Button children="华语"></Button>
      <Button children="Melayu"></Button>
      <Button children="தமிழ்"></Button>
    </div>
  )

}

export default Header