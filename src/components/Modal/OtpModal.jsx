import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import { verifySignupOtp } from "../../api/authAPI";
import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { setMessage } from "../../redux/reducers/msgSlice";
import { useNavigate } from "react-router-dom";

export default function DialogWrapper({ open, setOpen, width, title ,subTitle }) {
  const mail = useSelector((state) => state.userState?.userInfo?.email);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = async () => {
    const res = await verifySignupOtp({
      email: mail,
      otp: otp,
    });
    if (res.status === 200) {
      dispatch(
        setMessage({
          type: "success",
          msg: res.data.message,
          statusCode: res.status,
        })
      );
      navigate("/login");
      setOpen((prev) => !prev);
    } else {
      dispatch(
        setMessage({
          type: "error",
          msg: res.data.message,
          statusCode: res.status,
        })
      );
    }
  };
  return (
    <Dialog open={open} maxWidth={"lg"}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ marginBottom: "10px" }}>
          {subTitle}
        </DialogContentText>
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
            width: "50px",
            height: "50px",
            fontSize: "1.5rem",
            overflow: "hidden",
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button type="submit" onClick={handleClose}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
