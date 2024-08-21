import React, { Suspense } from "react";
import CustomButton from "../../components/CustomButton/customButton";
import { Button, Slide, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TagCreationBody from "./tagCreationBody";
const CustomDialog  = React.lazy(() => import("../../components/Dialog/CustomDialog"));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TagPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Stack>
        <div>
          {open &&
            <Suspense>
              <CustomDialog
                open={open}
                handleClose={() => setOpen(false)}
                Transition={Transition}
                title={"Create tag"}
                maxWidth={"lg"}
                content={<TagCreationBody/>}
                actions={
                  <Button onClick={() => setOpen(false)} color="primary">
                    Save
                  </Button>
                }
              />
            </Suspense>
          }
         <CustomButton style={{ width: "150px" }} onClick={handleOpen}>
          <AddIcon/>Create tag
        </CustomButton>
        </div>
        <div className={"tag_list"}>
       </div>
      </Stack>
    </>
  );
}
