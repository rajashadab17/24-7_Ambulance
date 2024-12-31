import { Box, Typography } from "@mui/material";
import React from "react";

const Location_Section = ({ City_1, City_2, City_3, IMG_1, IMG_2, IMG_3 }) => {
  return (
    <>
      <Box
        className="space-around locations"
        margin={"50px 0"}
        boxSizing={"border-box"}
      >
        {[
          { City_Name: City_1, City_image: IMG_1 },
          { City_Name: City_2, City_image: IMG_2 },
          { City_Name: City_3, City_image: IMG_3 },
        ].map((value) => {
          return (
            <Box
              className="col y-center space-around"
              sx={{
                height: "450px",
                width: "400px",
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
              <Box
                bgcolor={"black"}
                height={"300px"}
                width={"300px"}
                borderRadius={"9px"}
                className="location x-y-center"
              >
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
              </Box>
              <Typography fontSize={"20px"} fontWeight={"bold"}>
                {value.City_Name}
              </Typography>
            </Box>
          );
        })}
      </Box>
      {/* <Box
                        className='col y-center space-around'
                        sx={{
                            height: '350px',
                            width: '20%',
                            borderRadius: '50px',
                            background: '#e0e0e0',
                            boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
                            padding: '30px 20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Box bgcolor={'black'} height={'210px'} width={'210px'} borderRadius={'50%'} className='location x-y-center'>

                            <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src="https://www.manahilambulance.com/wp-content/uploads/2023/03/karachi_ambulance.jpg" alt="" />
                        </Box>
                        <Typography fontSize={'20px'} fontWeight={'bold'}>Karachi</Typography>
                    </Box> */}
    </>
  );
};

export default Location_Section;
