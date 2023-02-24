import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
function PatientInformationCard(){
    return(
        <div>
            <div className="flex">
                <p className="font-bold">Elderly Patient Details</p>
                <div className='bg-black rounded-3xl h-[40px] w-[40px] flex items-center justify-center' >
                    <EditOutlinedIcon sx={{ color: "white" }} fontSize='large'/>
                </div>
            </div>
            <img src= "https://thumbs.dreamstime.com/b/positice-senior-drinking-coffee-home-old-man-177914567.jpg" className='rounded-[113px] h-[171px] w-[171px]'/>
            <div className='information'>
                <div className='flex'>
                    <div className="name">
                        <p>Name</p>
                        <p>Mr Wilson Huang</p>
                    </div>
                    <div className="age">
                        <p>Age</p>
                        <p>74</p>
                    </div>
                </div>
                <div className='address'>
                    <p>Address</p>
                    <p>Something blablablabalbalbalbal, balbalblal</p>
                </div>
                <div className='postal-code'>
                    <p>Postal Code</p>
                    <p>Singapore 640623</p>
                </div>
                <div className='languages'>
                    <p>Languages</p>
                    <p>Hokkien, Mandarian</p>
                </div>
                <div className='hobbies'>
                    <p>Likes, Hobbies</p>
                    <p>Smart contract, tiaowu</p>
                </div>
            </div>        
        </div>
    )
}
export default PatientInformationCard