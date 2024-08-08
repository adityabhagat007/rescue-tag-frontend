import React from "react";
import CustomButton from "../../components/CustomButton/customButton";
import { Button, Stack } from "@mui/material";

export default function TagPage() {

  return (
    <>
      <Stack>
        <div>
         <CustomButton style={{ width: "100px" }}>
          Save
        </CustomButton>
        </div>
        <div className={"tag_list"}>

        </div>
      </Stack>
    </>
  );
}
