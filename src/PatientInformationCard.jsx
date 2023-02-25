import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
function PatientInformationCard(){
    return(
        <div>
            <div className="flex">
                <p>English | 华语 | Melayu | தமிழ்</p>
            </div>
            <div className='Whitespace'>
                <p>Hello there!</p>
                <p>Thank you for scanning my QR Code!</p>
                <p>I am Mr Winston Huang, and I have a tendency of forgetting where I am going and getting lost.</p>
                <p>It appears that my caregiver is looking for me. I would really appreciate it if you could give Ms Lynn Lee a call (contact number below) and direct me back to my home (address below).</p>
                <p>If it’s too much trouble, you could also direct me to the nearest police station where I could obtain help.</p>
                <p>Thank you very much!</p>
                <div className='flex'>
                    <div>
                        <img src= "https://thumbs.dreamstime.com/b/positice-senior-drinking-coffee-home-old-man-177914567.jpg" className='rounded-[113px] h-[171px] w-[171px]'/>
                        <p>Mr Winston Huang</p>
                        <p>Address</p>
                        <p>Some gay address</p>
                        <p>Postal Code</p>
                    </div>
                    <img src= "https://thumbs.dreamstime.com/b/positice-senior-drinking-coffee-home-old-man-177914567.jpg" className='rounded-[113px] h-[171px] w-[171px]'/>
                </div>
            </div>
        </div>
    )
}
export default PatientInformationCard