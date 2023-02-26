import { ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../firebaseConfig";

// help create the same card for the other 3 languages as well please!

const Card = ({ children, hobbies, languages, contact, address, postalCode, patientName, patientAge, caregiverName, patientImage, caregiverImage, caregiverRelationship }) => {
  const [caregiverSrc, setCaregiverSrc] = useState("");
  const [patientSrc, setPatientSrc] = useState("");

  useEffect(() => {
    const caregiverImageRef = ref(storage, caregiverImage);
    const patientImageRef = ref(storage, patientImage);

    const fetchUrls = async () => {
      setPatientSrc(await getDownloadURL(patientImageRef));
      setCaregiverSrc(await getDownloadURL(caregiverImageRef));
    }
    if (caregiverImage && patientImage) {
      fetchUrls();
    }
  },[])

  return (
    <div className="shadow-xl bg-white rounded-t-lg text-black text-center font-[Inter] h-full p-[20px]">
        <div className="text-[14px]"><b>வணக்கம்!</b></div>
        <div className="text-[10px]">
          <p>எனது QR குறியீட்டை ஸ்கேன் செய்ததற்கு நன்றி!</p>
          <br />
          <p>நான் <b>Mr {patientName}</b>, மேலும் நான் எங்கு செல்கிறேன் என்பதை மறந்துவிடும் போக்கு எனக்கு உள்ளது
            மற்றும் தொலைந்து போகிறது.</p>
          <br />
          <p>என் பராமரிப்பாளர் என்னைத் தேடுகிறார் என்று தோன்றுகிறது. நான் அதை உண்மையிலேயே பாராட்டுவேன்
            நீங்கள் கொடுக்க முடியும் <b>Ms {caregiverName}</b> ஒரு அழைப்பு <span className="text-[#FF6635]">(கீழே உள்ள தொடர்பு எண்)</span> என்னை என் வீட்டிற்கு திருப்பி அனுப்பு <span className="text-[#FF6635]">(கீழே முகவரி)</span>.</p>
          <br />
          <p>இது அதிக பிரச்சனையாக இருந்தால், நீங்கள் என்னை அருகிலுள்ள காவல் நிலையத்திற்கு அழைத்துச் செல்லலாம், அங்கு நான் உதவி பெற முடியும்.</p>
          <br />
          <p>மிக்க நன்றி!</p>
        </div>
        <div className='grid grid-cols-2 mt-3 text-[10px]'>
          <div className='flex flex-col items-center'>
            <img src={patientSrc} className='rounded-full h-[100px] w-[100px]' />
            <span className='mt-5'><strong>{patientName}</strong>, {patientAge}</span>
            <p className='text-[#FF6635] mt-5'>Address</p>
            <p className='font-bold mt-1'>{address}</p>
            <p className='mt-5 text-[#FF6635]'>Postal Code</p>
            <p className='mt-1 font-bold'>{postalCode}</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={caregiverSrc} className='rounded-full h-[100px] w-[100px]' />
            <span className='mt-5'><strong>{caregiverName}</strong>, {caregiverRelationship}</span>
            <p className='text-[#FF6635] mt-5'>Contact Number</p>
            <p className='font-bold mt-1'>{contact}</p>
          </div>
          </div>
          <p className='text-[10px] mt-6'>என்னுடன் இணைந்ததற்கு நன்றி! நான் அரட்டையடிப்பதில் மகிழ்ச்சி அடைவேன்!</p>
          <br />
          <p className='text-[10px]'>என்னால் பேச முடியும் <strong>{languages}</strong> மற்றும் எனது பொழுதுபோக்குகள் அடங்கும் <strong>{hobbies}</strong>.</p>
      {children}
    </div>
  )
}

export default Card
