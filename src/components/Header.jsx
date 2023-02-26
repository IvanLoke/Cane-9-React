import Button from "./Button"

const Header = () => {
  return (
    <div className="flex justify-evenly w-full my-3">
      <Button children="English"></Button>
      <div className='mx-2 border-r border-[#707070]' />
      <Button children="华语"></Button>
      <div className='mx-2 border-r border-[#707070]' />
      <Button children="Melayu"></Button>
      <div className='mx-2 border-r border-[#707070]' />
      <Button children="தமிழ்"></Button>
    </div>
  )

}

export default Header
