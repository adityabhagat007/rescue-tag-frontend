

import React, { useState } from 'react'
import OTPInput from 'react-otp-input'

export default function OtpModalBody() {
    const [otp ,setOtp] = useState('')
  return (
    <OTPInput
       value={otp}
       inputType="tel"
       onChange={setOtp}
       numInputs={6}
       renderSeparator={<span>&nbsp;</span>}
       renderInput={(props) => <input {...props} />}
       skipDefaultStyles={false}
       shouldAutoFocus={true}
       containerStyle={"none"}
       inputStyle={{
        width:"50px",
        height:"50px",
        fontSize: "1.5rem",
        overflow:"hidden"
       }}
    />
  )
}
