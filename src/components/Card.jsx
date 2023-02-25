

const Card = ({ children }) => {
  return (
    <div className="h-[573px] w-[301px] bg-white rounded-t-lg text-black text-center font-[Inter]">
      <div>
        <div className="font-[14px]"><b>Hello there!</b></div>
        <div className="font-[10px]">
          <p>Thank you for scanning my QR code!</p>

          <p>I am <b>Mr Winston Huang</b>, and I have a tendency of forgetting where I am going
            and getting lost.</p>

          <p>It appears that my caregiver is looking for me. I would really appreciate it if
            you could give <b>Ms Lynn Lee</b> a call <p className="text-[#FF6635]">(contact number below)</p> and direct me back to my house <p className="text-[#FF6635]">(address below)</p>.</p>

          <p>If it's too much trouble, you could also direct me to the nearest police station where I could obtain help.</p>

          <p>Thank you very much!</p>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Card