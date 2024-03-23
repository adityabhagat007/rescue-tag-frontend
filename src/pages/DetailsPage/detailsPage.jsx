import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Tab,
  TextField,
} from "@mui/material";
import React from "react";
import style from "./detailsPage.module.css";
import InputText from "../../components/inputComponent/InputText";

export default function DetailsPage() {
  return (
    <Stack>
      <Card className={style.userName_section}>
          Basic Details
        <Divider />
        <CardContent>
          <Grid container>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Name</div>
                <InputText
                  placeHolder={"Place Enter your Name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
              <div className={style.input_field}>
                <div className={style.input_title}>Local Name</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Address</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Address</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className={style.userName_section}>
          Basic Details
        <Divider />
        <CardContent>
          <Grid container>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Name</div>
                <InputText
                  placeHolder={"Place Enter your Name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
              <div className={style.input_field}>
                <div className={style.input_title}>Local Name</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Address</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Address</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className={style.userName_section}>
          Basic Details
        <Divider />
        <CardContent>
          <Grid container>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Name</div>
                <InputText
                  placeHolder={"Place Enter your Name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
              <div className={style.input_field}>
                <div className={style.input_title}>Local Name</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Address</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Address</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
}
