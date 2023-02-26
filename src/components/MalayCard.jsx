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
        <div className="text-[14px]"><b>Apa khabar di sana!</b></div>
        <div className="text-[10px]">
          <p>Terima kasih kerana mengimbas kod QR saya!</p>
          <br />
          <p>saya adalah <b>Mr {patientName}</b>,dan saya mempunyai kecenderungan untuk melupakan ke mana saya pergi
            dan tersesat.</p>
          <br />
          <p>Nampaknya penjaga saya sedang mencari saya. Saya amat menghargainya jika
            anda boleh memberi <b>Ms {caregiverName}</b> satu panggilan <span className="text-[#FF6635]">(nombor telefon di bawah)</span> dan arahkan saya pulang ke rumah saya <span className="text-[#FF6635]">(alamat di bawah)</span>.</p>
          <br />
          <p>Jika terlalu banyak masalah, anda juga boleh mengarahkan saya ke balai polis terdekat untuk mendapatkan bantuan.</p>
          <br />
          <p>Terima kasih banyak - banyak!</p>
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
          <p className='text-[10px] mt-6'>Terima kasih kerana menemani saya! Saya akan lebih gembira untuk berbual juga!</p>
          <br />
          <p className='text-[10px]'>Saya boleh bercakap <strong>{languages}</strong> dan hobi saya termasuk <strong>{hobbies}</strong>.</p>
      {children}
    </div>
  )
}

export default Card