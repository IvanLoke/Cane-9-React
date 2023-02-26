import Button from "./Button"

const Header = ({ setPage, page }) => {
  return (
    <div className="flex justify-evenly w-full my-3">
      <Button children="English" onClick={() => setPage(0)} index={0} page={page}></Button>
      <div className='mx-2 border-r border-[#707070]' />
      <Button children="华语" onClick={() => setPage(1)} index={1} page={page}></Button>
      <div className='mx-2 border-r border-[#707070]' />
      <Button children="Melayu" onClick={() => setPage(2)} index={2} page={page}></Button>
      <div className='mx-2 border-r border-[#707070]' />
      <Button children="தமிழ்" onClick={() => setPage(3)} index={3} page={page}></Button>
    </div>
  )

}

export default Header
