import { Box, Button, Typography } from "@mui/material";
import Ambulance_Pic from "../Images/Ambulance.jpg";
import Hiace from "../Images/Hiace.jpg";
import Suzuki from "../Images/Suzuki.jpg";
import Bolan from "../Images/Bolan.jpg";
import IMG_1 from "../Images/IMG (1).jpg";
import IMG_4 from "../Images/IMG (4).jpg";
import IMG_6 from "../Images/IMG (6).jpg";
import IMG_7 from "../Images/IMG (7).jpg";
import IMG_12 from "../Images/IMG (12).jpg";
import IMG_13 from "../Images/IMG (13).jpg";
import React from "react";
import Location_Section from "./Location_Section";
import Karachi from "../Images/Karachi.jpg";
import Lahore from "../Images/Lahore.jpg";
import Islamabad from "../Images/Islamabad.jpg";
import Background_Image from "../Images/Background_Image.png";
import Background_Video from "../Images/background_video.mp4";
import Gallery_Section from "./Gallery_Section";

const Home = () => {
  return (
    <>
      <Box
        height={"auto"}
        boxSizing={"border-box"}
        padding={"70px 0"}
        position={"relative"}
        className="main-section"
      >
        <Box height={"100vh"} width={"100vw"} bgcolor={"red"}>
          <video
          src={Background_Video} autoPlay muted loop
            // src={Background_Image}
            // className="bg-img"
            style={{height:'100vh',width:'100vw',objectFit: "cover",
              overflow: "hidden",}}
            alt=""
          />
        </Box>
        <Box
          bgcolor={"rgba(0,0,0,0.6)"}
          height={"100vh"}
          margin={"70px 0"}
          className="x-y-center"
          // display={'flex'} justifyContent={'center'} alignItems={'start'}
          position={"absolute"}
          top={0}
          zIndex={1}
          width={"100vw"}
        >
          <Box className="col x-y-center">
            {/* <Typography textTransform={'uppercase'} color={'white'} textAlign={'center'} fontSize={'56px'} fontWeight={'bold'}>All Pakistan Private Ambulance Service</Typography> */}
            <Typography
              color={"white"}
              textAlign={"center"}
              fontSize={"56px"}
              fontWeight={"bold"}
            >
              24/7 Ambulance Service
            </Typography>
            <Button
              variant="contained"
              className="nav-btn bg-btn"
              sx={{ width: "170px" }}
              href="tel:+923108533134"
            >
              Call Now
            </Button>
          </Box>
        </Box>
      </Box>

      <Box minHeight={"100vh"} boxSizing={"border-box"} padding={"30px 0"}>
        <Typography
          className="section-heading"
          fontSize={"46px"}
          fontWeight={"bold"}
          textAlign={"center"}
          fontFamily={`"Ubuntu Sans", sans-serif`}
        >
          Gallery
        </Typography>
        <Gallery_Section IMG_1={IMG_1} IMG_2={IMG_12} IMG_3={IMG_13} />
        <Gallery_Section IMG_1={IMG_7} IMG_2={IMG_4} IMG_3={IMG_6} />
        <Box className="x-y-center">
          <Button
            variant="contained"
            href="/gallery"
            className="nav-btn"
            sx={{ bgcolor: "red", borderRadius: "20px", width: "180px" }}
          >
            Explore More
          </Button>
        </Box>
      </Box>

      <Box minHeight={"100vh"} boxSizing={"border-box"} padding={"30px 0"}>
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
          <Box
            className="col y-center space-around"
            sx={{
              height: "450px",
              width: "25%",
              borderRadius: "50px",
              background: "#e0e0e0",
              boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
              padding: "30px 20px",
              boxSizing: "border-box",
            }}
          >
            {/* <Box bgcolor={'black'} height={'210px'} width={'210px'} borderRadius={'50%'} className='location x-y-center'> */}

            <img
              style={{ height: "300px", width: "300px", borderRadius: "9px" }}
              src={Hiace}
              alt=""
            />
            {/* </Box> */}
            <Typography fontSize={"20px"} fontWeight={"bold"}>
              Hiace
            </Typography>
          </Box>
          <Box
            className="col y-center space-around"
            sx={{
              height: "450px",
              width: "25%",
              borderRadius: "50px",
              background: "#e0e0e0",
              boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
              padding: "30px 20px",
              boxSizing: "border-box",
            }}
          >
            {/* <Box bgcolor={'black'} height={'210px'} width={'210px'} borderRadius={'50%'} className='location x-y-center'> */}

            <img
              style={{ height: "300px", width: "300px", borderRadius: "9px" }}
              src={Suzuki}
              alt=""
            />
            {/* </Box> */}
            <Typography fontSize={"20px"} fontWeight={"bold"}>
              Suzuki
            </Typography>
          </Box>
          <Box
            className="col y-center space-around"
            sx={{
              height: "450px",
              width: "25%",
              borderRadius: "50px",
              background: "#e0e0e0",
              boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
              padding: "30px 20px",
              boxSizing: "border-box",
            }}
          >
            {/* <Box bgcolor={'black'} height={'210px'} width={'210px'} borderRadius={'50%'} className='location x-y-center'> */}

            <img
              style={{ height: "300px", width: "300px", borderRadius: "9px" }}
              src={Bolan}
              alt=""
            />
            {/* </Box> */}
            <Typography fontSize={"20px"} fontWeight={"bold"}>
              Bolan
            </Typography>
          </Box>
        </Box>
        <Box className="x-y-center">
          <Button
            variant="contained"
            href="/ambulances"
            className="nav-btn"
            sx={{ bgcolor: "red", borderRadius: "20px", width: "180px" }}
          >
            Explore More
          </Button>
        </Box>
      </Box>
      <Box minHeight={"100vh"} boxSizing={"border-box"} padding={"30px 0"}>
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
        <Box className="x-y-center">
          <Button
            variant="contained"
            href="/locations"
            className="nav-btn"
            sx={{ bgcolor: "red", borderRadius: "20px", width: "180px" }}
          >
            Explore More
          </Button>
        </Box>
      </Box>
      <Box
        bgcolor={"white"}
        minHeight={"100vh"}
        boxSizing={"border-box"}
        padding={"30px 0"}
      >
        <Typography
          className="section-heading"
          fontSize={"46px"}
          fontWeight={"bold"}
          textAlign={"center"}
          fontFamily={`"Ubuntu Sans", sans-serif`}
        >
          Our Service
        </Typography>
        <Typography
          fontSize={"30px"}
          fontWeight={"bold"}
          textAlign={"center"}
          margin={"20px"}
          fontFamily={`"Ubuntu Sans", sans-serif`}
        >
          Ambulance Service
        </Typography>
        <Box
          className="space-around ambulance-service"
          margin={"50px 0"}
          boxSizing={"border-box"}
        >
          <Box
            sx={{
              height: "300px",
              width: "20%",
              borderRadius: "50px",
              background: "#e0e0e0",
              boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
              padding: "30px 20px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{ color: "var(--bg-color)", textDecoration: "underline" }}
              textTransform={"uppercase"}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              Medical Transport
            </Typography>
            <Typography margin={"10px 0"}>
              Comfortable non-emergency medical transportation. We ensure
              patients reach their appointments or medical facilities safely and
              comfortably.
            </Typography>
          </Box>
          <Box
            sx={{
              height: "300px",
              width: "20%",
              borderRadius: "50px",
              background: "#e0e0e0",
              boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
              padding: "30px 20px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{ color: "var(--bg-color)", textDecoration: "underline" }}
              textTransform={"uppercase"}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              Inter-City Transfers
            </Typography>
            <Typography margin={"10px 0"}>
              Efficient transportation between cities. Our service ensures
              seamless transfers for patients requiring medical care beyond
              their current location.
            </Typography>
          </Box>
          <Box
            sx={{
              height: "300px",
              width: "20%",
              borderRadius: "50px",
              background: "#e0e0e0",
              boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
              padding: "30px 20px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{ color: "var(--bg-color)", textDecoration: "underline" }}
              textTransform={"uppercase"}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              Event Medical Services
            </Typography>
            <Typography margin={"10px 0"}>
              On-site medical assistance for events. We provide professional
              medical support to ensure the safety and well-being of event
              attendees.
            </Typography>
          </Box>
        </Box>
        
        <Typography
          fontSize={"30px"}
          fontWeight={"bold"}
          textAlign={"center"}
          margin={"20px"}
          fontFamily={`"Ubuntu Sans", sans-serif`}
        >
          Rental Service
        </Typography>
        <Box
          className="space-around rental-services"
          margin={"50px 0"}
          boxSizing={"border-box"}
        >
          <Box
            sx={{
              height: "300px",
              width: "20%",
              borderRadius: "50px",
              background: "#e0e0e0",
              boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
              padding: "30px 20px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{ color: "var(--bg-color)", textDecoration: "underline" }}
              textTransform={"uppercase"}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              Medical Equipment
            </Typography>
            <Typography margin={"10px 0"}>
              Essential medical equipment for various healthcare needs. Our
              inventory includes a wide range of equipment designed to support
              patients during transportation and medical procedures, ensuring
              their comfort and safety at all times.
            </Typography>
          </Box>
          <Box
            sx={{
              height: "300px",
              width: "20%",
              borderRadius: "50px",
              background: "#e0e0e0",
              boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
              padding: "30px 20px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{ color: "var(--bg-color)", textDecoration: "underline" }}
              textTransform={"uppercase"}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              Cardiac Monitor
            </Typography>
            <Typography margin={"10px 0"}>
              Advanced cardiac monitoring equipment for critical care. Our
              cardiac monitors provide real-time monitoring of vital signs,
              allowing our medical team to closely monitor patients' cardiac
              health and respond promptly to any changes or emergencies during
              transportation.
            </Typography>
          </Box>
          <Box
            sx={{
              height: "300px",
              width: "20%",
              borderRadius: "50px",
              background: "#e0e0e0",
              boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
              padding: "30px 20px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{ color: "var(--bg-color)", textDecoration: "underline" }}
              textTransform={"uppercase"}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              Oxygen Cylinder
            </Typography>
            <Typography margin={"10px 0"}>
              Life-saving oxygen cylinders for patients in need of respiratory
              support. Our oxygen cylinders are equipped with the necessary
              supplies to deliver oxygen therapy to patients, ensuring they
              receive the vital oxygen they require, even during transit or
              emergencies.
            </Typography>
          </Box>
        </Box>
       
      </Box>
    </>
  );
};

export default Home;
