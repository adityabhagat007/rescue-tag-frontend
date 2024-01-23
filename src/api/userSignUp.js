// import axios from "axios";
// import { PUBLIC_APIS } from "../utils/config";
// const userSignUp = (data, actions, setSignupSuccess, setSignupError) => {
//   const url = PUBLIC_APIS.signup;
//   axios
//     .post(url, data)
//     .then((res) => {
//       console.log("success", res);
//       actions.setSubmitting(false);
//       setSignupSuccess({ success: true, message: "" });
//       setSignupError({ error: false, message: "" });
//     })
//     .catch((err) => {
//       console.log("error", err);
//       actions.setSubmitting(false);
//       setSignupSuccess({ success: false, message: "" });
//       if (err.code === "ERR_NETWORK") {
//         setSignupError({ error: true, message: "network error" });
//       } else {
//         setSignupError({ error: true, message: err.response.data.message });
//       }
//     });
// };

// export default userSignUp;
