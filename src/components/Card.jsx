import { ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../firebaseConfig";

// help create the same card for the other 3 languages as well please!

const Card = ({ children, patientImage, caregiverImage }) => {
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
  },[caregiverImage, patientImage])

  return (
    <div className="shadow-xl bg-white rounded-t-lg text-black text-center font-[Inter] h-full p-[20px]">
        <div className="text-[14px]"><b>Hello there!</b></div>
        <div className="text-[10px]">
          <p>Thank you for scanning my QR code!</p>
          <br />
          <p>I am <b>Mr Winston Huang</b>, and I have a tendency of forgetting where I am going
            and getting lost.</p>
          <br />
          <p>It appears that my caregiver is looking for me. I would really appreciate it if
            you could give <b>Ms Lynn Lee</b> a call <span className="text-[#FF6635]">(contact number below)</span> and direct me back to my house <span className="text-[#FF6635]">(address below)</span>.</p>
          <br />
          <p>If it's too much trouble, you could also direct me to the nearest police station where I could obtain help.</p>
          <br />
          <p>Thank you very much!</p>
        </div>
        <div className='grid grid-cols-2 mt-3 text-[10px]'>
          <div className='flex flex-col items-center'>
            <img src="src/assets/Patient.png" className='rounded-full h-[100px] w-[100px]' />
            <span className='mt-5'><strong>Mr Winston Huang</strong>, 74</span>
            <p className='text-[#FF6635] mt-5'>Address</p>
            <p className='font-bold mt-1'>623 Jurong West Street 61, Block 623, #06-019</p>
            <p className='mt-5 text-[#FF6635]'>Postal Code</p>
            <p className='mt-1 font-bold'>Singapore 640623</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src="src/assets/Caretaker.png" className='rounded-full h-[100px] w-[100px]' />
            <span className='mt-5'><strong>Ms Lynn Lee</strong>, daughter</span>
            <p className='text-[#FF6635] mt-5'>Contact Number</p>
            <p className='font-bold mt-1'>91234567</p>
          </div>
          </div>
          <p className='text-[10px] mt-6'>Thank you for keeping me company! I'd be more than happy to have a chat as well!</p>
          <br />
          <p className='text-[10px]'>I can speak <strong>Hokkien, Mandarin</strong> and my hobbies include <strong>Mahjong, Karaokes</strong>.</p>
      {children}
    </div>
  )
}

export default Card
