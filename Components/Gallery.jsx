import { Box, Typography } from "@mui/material";
import React from "react";
import Hiace from "../Images/Hiace.jpg";
import Suzuki from "../Images/Suzuki.jpg";
import Bolan from "../Images/Bolan.jpg";
import IMG_1 from '../Images/IMG (1).jpg'
import IMG_2 from '../Images/IMG (2).jpg'
import IMG_3 from '../Images/IMG (3).jpg'
import IMG_4 from '../Images/IMG (4).jpg'
import IMG_5 from '../Images/IMG (5).jpg'
import IMG_6 from '../Images/IMG (6).jpg'
import IMG_7 from '../Images/IMG (7).jpg'
import IMG_8 from '../Images/IMG (8).jpg'
import IMG_9 from '../Images/IMG (9).jpg'
import IMG_10 from '../Images/IMG (10).jpg'
import IMG_11 from '../Images/IMG (11).jpg'
import IMG_12 from '../Images/IMG (12).jpg'
import IMG_13 from '../Images/IMG (13).jpg'
import IMG_14 from '../Images/IMG (14).jpg'
import IMG_15 from '../Images/IMG (15).jpg'
import IMG_16 from '../Images/IMG (16).jpg'
import Gallery_Section from "./Gallery_Section";

const Gallery = () => {
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
          Gallery
        </Typography>
        <Gallery_Section IMG_1={IMG_1} IMG_2={IMG_2} IMG_3={IMG_3}/>
        <Gallery_Section IMG_1={IMG_4} IMG_2={IMG_5} IMG_3={IMG_6}/>
        <Gallery_Section IMG_1={IMG_7} IMG_2={IMG_8} IMG_3={IMG_9}/>
        <Gallery_Section IMG_1={IMG_10} IMG_2={IMG_11} IMG_3={IMG_12}/>
        <Gallery_Section IMG_1={IMG_13} IMG_2={IMG_14} IMG_3={IMG_15}/>
        <Gallery_Section IMG_1={IMG_16} />
        {/* <Box className='x-y-center'>
                    <Button variant='contained' href='/locations' className='nav-btn' sx={{ bgcolor: 'red', borderRadius: '20px', width: '180px' }}>Explore More</Button>
                </Box> */}
      </Box>
    </>
  );
};

export default Gallery;
