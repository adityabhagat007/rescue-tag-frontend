import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
} from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import style from "./detailsPage.module.css";

import FormComponent from "../../components/FormComponent";
import CustomButton from "../../components/CustomButton/customButton";
import { getUserDetails, saveUserDetails } from "../../api/userAPI";
import { useDispatch } from "react-redux";
import { setMessage } from "../../redux/reducers/msgSlice";


const DetailsFormJson = {
  formElements: [
    {
      title: "Basic Details",
      fields: [
        {
          labeled: "Name",
          name: "name",
          type: "text",
          placeholder: "Please Enter your Name",
          validationType: "string",
          minlength: 3,
          maxlength: 20,
          required: true,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",

            fontSize: "14px",
          },
        },
        {
          labeled: "Local Name",
          type: "text",
          name: "nickName",
          placeholder: "Please Enter your Local Name",
          validationType: "string",
          minlength: 3,
          maxlength: 20,
          required: false,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
            fontSize: "14px",
          },
        },
        {
          labeled: "Email",
          name: "email",
          type: "text",
          placeholder: "Please Enter your Email",
          validationType: "email",
          required: true,
          disabled: true,
          style: {
            width: "250px",
            height: "27px",
            fontSize: "14px",
          },
        },
        {
          labeled: "User Name",
          name: "userName",
          type: "text",
          placeholder: "Please Enter your User Name",
          validationType: "string",
          minlength: 3,
          maxlength: 20,
          required: true,
          disabled: true,
          style: {
            width: "250px",
            height: "27px",
            fontSize: "14px",
          },
        },
      ],
    },
    {
      title: "Contact Details",
      fields: [
        {
          labeled: "Primary Number",
          type: "text",
          name: "number",
          placeholder: "Please Enter your Primary Number",
          validationType: "number",
          required: true,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
            fontSize: "14px",
          },
        },
        {
          labeled: "State",
          type: "text",
          name: "state",
          placeholder: "Please Enter your State",
          validationType: "string",
          minlength: 3,
          maxlength: 20,
          required: true,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
            fontSize: "14px",
          },
        },
        {
          labeled: "Country",
          type: "text",
          name: "country",
          placeholder: "Please Enter your Country",
          validationType: "string",
          minlength: 3,
          maxlength: 20,
          required: true,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
            fontSize: "14px",
          },
        },
        {
          labeled: "City",
          type: "text",
          name: "city",
          placeholder: "Please Enter your City",
          validationType: "string",
          minlength: 3,
          maxlength: 20,
          required: true,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
            fontSize: "14px",
          },
        },
        {
          labeled: "Pin Code",
          name: "zipCode",
          type: "text",
          placeholder: "Please Enter your Pin Code",
          validationType: "number",
          required: false,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
            fontSize: "14px",
          },
        },
        {
          labeled: "Address",
          name: "address",
          type: "text",
          multiline: true,
          maxRows: 4,
          placeholder: "Please Enter your Address",
          validationType: "string",
          minlength: 3,
          maxlength: 100,
          required: true,
          disabled: false,
          style: {
            padding: "0px",
            width: "250px",
            height: "50px",
            fontSize: "14px",
          },
        },
      ],
    },
  ],
};

export default function DetailsPage() {
  const [formDatas, setFormData] = useState({});
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  // Form Api
  useLayoutEffect(() => { }, []);

  useEffect(() => {
    //API call to get user details
    const userDetails = async () => {
      try {
        let userDetails = await getUserDetails();
        console.log(userDetails.data,"user details....");
        if(userDetails.status === 200){
          let details = userDetails.data;
          const userObj = {}
          userObj.name = details?.name || "";
          userObj.nickName = details?.nickName || "";
          userObj.email = details?.email || "";
          userObj.userName = details?.userName || "";
          userObj.number = details?.number || "";
          userObj.city = details?.city || "";
          userObj.country = details?.country;
          userObj.address = details?.address;
          userObj.state = details?.state || "";
          userObj.zipCode = details?.zipCode || "";
          setFormData(userObj);
        }else{
          console.log("error in fetching user details");
        }
      } catch (err) {
        console.log(err);
      }
    };
    userDetails();
  }, []);

  const handleValidation = () => {
    let formIsValid = true;
    let error = {};
    DetailsFormJson.formElements.map((section) => {
      section.fields.map((field) => {
        if (field?.required && !formDatas[field.name]) {
          formIsValid = false;
          error[field.name] = "Field is required";
          // if (
          //   field?.validationType === "string" &&
          //   (formDatas[field.name].length < field.minlength ||
          //     formDatas[field.name].length > field.maxlength)
          // ) {
          //   formIsValid = false;
          //   error[
          //     field.name
          //   ] = `value should be between ${field.minlength} and ${field.maxlength} characters`;
          // }
        }
      });
    });
    setError(error);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target, "form data");
    if (handleValidation()) {
      console.log(formDatas);
      //API call to save user details
      try {
        let response = await saveUserDetails(formDatas);
        if(response.status === 200){
          dispatch(
            setMessage({
              type: "success",
              msg: "User details saved successfully",
              statusCode: response.status,
            })
          )
        }else{
           dispatch(
            setMessage({
              type: "error",
              msg: response.data.message,
              statusCode: response.status,
            }))
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handelChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(name, value, type, checked);
    if (type === "checkbox" || type === "radio") {
      setFormData({ ...formDatas, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formDatas, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formDatas, [name]: value });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        {DetailsFormJson.formElements.map((section, index) => (
          <Card className={style.userName_section} key={index}>
            <CardHeader
              title={section.title}
              titleTypographyProps={{ variant: "h6" }}
              sx={{ padding: 0 }}
            />
            <Divider />
            <CardContent>
              <Grid container>
                {section.fields.map((field, index) => (
                  <Grid item xs key={index}>
                    <div className={style.input_field}>
                      <div className={style.input_title}>{field.labeled}</div>
                      <FormComponent
                        fieldType={field.type}
                        {...field}
                        handelChange={handelChange}
                        value={formDatas[field.name] || ""}
                        error={error[field.name]}
                      />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Stack>
      <div style={{ float: "right" }}>
        <CustomButton type={"submit"} style={{ width: "100px" }}>
          Save
        </CustomButton>
      </div>
    </form>
  );
}
