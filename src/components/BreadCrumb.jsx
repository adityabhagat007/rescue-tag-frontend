import { Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const currentLocation = useLocation();

  let breadcrumb = currentLocation.pathname.split("/");
  let length = breadcrumb.length-1;
  let path = ""
  breadcrumb.shift();
  console.log(currentLocation, breadcrumb);

  return (
    <div
      role="presentation"
      style={{
        textDecoration: "none",
        color: "#000000",
        textTransform: "capitalize",
      }}
    >
      {breadcrumb.length > 1 ? (
        <Breadcrumbs separator="/" aria-label="breadcrumb">
          {breadcrumb.map((ele ,index) => {
            path=path+"/"+ele;
            return(<Link
              underline="hover"
              to={path}
              key={path}
              style={{
                textDecoration: "none",
                color: "#000000",
                textTransform: "capitalize",
              }}
            >
              {ele}
            </Link>)
          })}
        </Breadcrumbs>
      ) : (
        <Typography fontSize={"1.2rem"} fontWeight="bold" color={"#000000"} style={{opacity:"54%"}}>{breadcrumb[0]}</Typography>
      )}
      <div></div>
    </div>
  );
}
