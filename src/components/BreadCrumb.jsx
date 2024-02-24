import { Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const currentLocation = useLocation();

  let breadcrumb = currentLocation.pathname.split("/");
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
          {breadcrumb.map((ele) => (
            <Link
              underline="hover"
              to={`/${ele}`}
              style={{
                textDecoration: "none",
                color: "#000000",
                textTransform: "capitalize",
              }}
            >
              {ele}
            </Link>
          ))}
        </Breadcrumbs>
      ) : (
        <Typography variant="h6">{breadcrumb[0]}</Typography>
      )}
    </div>
  );
}
