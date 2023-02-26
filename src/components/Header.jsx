import Button from "./Button"

function englishPage(){
  console.log("FUCK");
}

function chinesePage(){}

function malayPage(){}

function tamilPage(){}

const Header = () => {
  return (
    <div className="flex justify-evenly w-full my-3">
      <Button children="English" onClick={englishPage}></Button>
      <div className='mx-2 border-r border-[#707070]' />
      <Button children="华语" onClick={chinesePage}></Button>
      <div className='mx-2 border-r border-[#707070]' />
      <Button children="Melayu" onClick={malayPage}></Button>
      <div className='mx-2 border-r border-[#707070]' />
      <Button children="தமிழ்" onClick={tamilPage}></Button>
    </div>
  )

}

export default Header
