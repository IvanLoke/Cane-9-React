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
  },[])

  return (
    <div className="shadow-xl bg-white rounded-t-lg text-black text-center font-[Inter] h-full p-[20px]">
        <div className="text-[14px]"><b>你好！</b></div>
        <div className="text-[10px]">
          <p>感谢您扫描我的二维码！</p>
          <br />
          <p>我是<b>Winston Huang先生</b>, 我有忘记我要去哪儿并迷路的倾向.</p>
          <br />
          <p>看来我的看护人正在找我。如果你可以给 <b>Lynn Lee 女士</b>打一个电话 <span className="text-[#FF6635]">(联系电话如下)</span> 并指引我回到我家 <span className="text-[#FF6635]">(地址如下)</span>.</p>
          <br />
          <p>如果嫌麻烦，你也可以带我去最近的派出所寻求帮助.</p>
          <br />
          <p>非常感谢！</p>
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
          <p className='text-[10px] mt-6'> 谢谢你陪我！我也很乐意聊天！</p>
          <br />
          <p className='text-[10px]'> 我可以讲 <strong>福建话、普通话。</strong> 我的爱好包括 <strong>麻将、卡拉OK</strong>。</p>
      {children}
    </div>
  )
}

export default Card
