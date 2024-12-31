import { Box } from '@mui/material'
import React from 'react'

const Gallery_Section = ({IMG_1, IMG_2, IMG_3}) => {
  return (
    <>
    <Box
          className="space-around gallery"
          margin={"50px 0"}
          boxSizing={"border-box"}
        >
          {
            [IMG_1, IMG_2, IMG_3].filter(val => val).map((image) => {
              return <Box
              className="col y-center space-around"
              sx={{
                height: "450px", // Reduced height of the card
                width: "400px",  // Reduced width of the card
                borderRadius: "15px",
                background: "linear-gradient(145deg, #f0f0f0, #dcdcdc)",
                boxShadow: `10px 10px 20px #b0b0b0, -10px -10px 20px #ffffff`,
                padding: "20px 15px",
                boxSizing: "border-box",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: `15px 15px 30px #aaaaaa, -15px -15px 30px #ffffff`,
                },
              }}
            >
              <img
                style={{
                  height: "360px", // Adjusted height
                  width: "320px",  // Adjusted width
                  borderRadius: "10px",
                  objectFit: "cover", // Ensures the image fits nicely within the given size
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease",
                }}
                src={image}
                alt=""
                className="card-image"
              />
            </Box>
            
            
            })
          }
        </Box>
    </>
  )
}

export default Gallery_Section