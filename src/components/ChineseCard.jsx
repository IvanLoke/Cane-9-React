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
        <div className="text-[14px]"><b>你好！</b></div>
        <div className="text-[10px]">
          <p>感谢您扫描我的二维码！</p>
          <br />
          <p>我是<b>Mr {patientName}</b>, 我有忘记我要去哪儿并迷路的倾向.</p>
          <br />
          <p>看来我的看护人正在找我。如果你可以给 <b>{caregiverName}</b>打一个电话 <span className="text-[#FF6635]">(联系电话如下)</span> 并指引我回到我家 <span className="text-[#FF6635]">(地址如下)</span>.</p>
          <br />
          <p>如果嫌麻烦，你也可以带我去最近的派出所寻求帮助.</p>
          <br />
          <p>非常感谢！</p>
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
