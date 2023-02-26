import { ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../firebaseConfig";

// help create the same card for the other 3 languages as well please!

const Card = ({ children, patientName, caregiverName, patientImage, caregiverImage }) => {
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
        <div className='grid grid-cols-2 mt-3'>
          <div>
            <img src={patientSrc} className='rounded-full h-[100px] w-[100px]' />
          </div>
          <div>
            <img src={caregiverSrc} className='rounded-full h-[100px] w-[100px]' />
          </div>
          </div>
      {children}
    </div>
  )
}

export default Card
