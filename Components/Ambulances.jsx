import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Hiace from "../Images/Hiace.jpg";
import Suzuki from "../Images/Suzuki.jpg";
import Bolan from "../Images/Bolan.jpg";

const Ambulances = () => {
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
          Our Ambulances
        </Typography>
        <Box
          className="space-around ambulances"
          margin={"50px 0"}
          boxSizing={"border-box"}
        >
          {[
            { City_Name: "Hiace", City_image: Hiace },
            { City_Name: "Suzuki", City_image: Suzuki },
            { City_Name: "Bolan", City_image: Bolan },
          ].map((value) => {
            return (
              <Box
                className="col y-center space-around"
                sx={{
                  height: "400px",
                  width: "25%",
                  borderRadius: "15px",
                  background: "linear-gradient(145deg, #f0f0f0, #dcdcdc)",
                  boxShadow: `10px 10px 20px #b0b0b0, -10px -10px 20px #ffffff`,
                  padding: "30px 20px",
                  boxSizing: "border-box",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: `15px 15px 30px #aaaaaa, -15px -15px 30px #ffffff`,
                  },
                }}
              >
                {/* <Box bgcolor={'black'} height={'210px'} width={'210px'} borderRadius={'50%'} className='location x-y-center'> */}

                <img
                  style={{
                    height: "300px",
                    width: "300px",
                    borderRadius: "10px",
                    objectFit: "cover",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease",
                  }}
                  src={value.City_image}
                  alt=""
                />
                {/* </Box> */}
                <Typography fontSize={"20px"} fontWeight={"bold"}>
                  {value.City_Name}
                </Typography>
              </Box>
            );
          })}
        </Box>
        {/* <Box className='x-y-center'>
                    <Button variant='contained' href='/locations' className='nav-btn' sx={{ bgcolor: 'red', borderRadius: '20px', width: '180px' }}>Explore More</Button>
                </Box> */}
      </Box>
    </>
  );
};

export default Ambulances;
