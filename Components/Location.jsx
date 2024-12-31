import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Location_Section from "./Location_Section";
import Multan from "../Images/Multan.jpg";
import Faisalabad from "../Images/Faisalabad.jpg";
import Peshawar from "../Images/Peshawar.jpg";
import Karachi from "../Images/Karachi.jpg";
import Lahore from "../Images/Lahore.jpg";
import Islamabad from "../Images/Islamabad.jpg";

const Location = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box minHeight={"100vh"} boxSizing={"border-box"} padding={"100px 0"}>
        <Typography
          className="section-heading"
          fontSize={"46px"}
          fontWeight={"bold"}
          textAlign={"center"}
          fontFamily={`"Ubuntu Sans", sans-serif`}
        >
          Our Locations
        </Typography>
        <Location_Section
          City_1={"Karachi"}
          City_2={"Lahore"}
          City_3={"Islamabad"}
          IMG_1={Karachi}
          IMG_2={Lahore}
          IMG_3={Islamabad}
        />
        <Location_Section
          City_1={"Multan"}
          City_2={"Faisalabad"}
          City_3={"Peshawar"}
          IMG_1={Multan}
          IMG_2={Faisalabad}
          IMG_3={Peshawar}
        />
      </Box>
    </>
  );
};

export default Location;
