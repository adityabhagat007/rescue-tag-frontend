

import React, { useState } from 'react'
import OTPInput from 'react-otp-input'

export default function OtpModalBody() {
    const [otp ,setOtp] = useState('')
  return (
    <OTPInput
       value={otp}
       inputType="number"
       onChange={setOtp}
       numInputs={6}
       renderSeparator={<span>-</span>}
       renderInput={(props) => <input {...props} />}
    />
  )
}
