import { FacebookRounded, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="footer-row flex space-between">
          <Box className="footer-col" bgcolor={'#c9c5c5'} padding={'10px'} borderRadius={'10px'}>
          <Typography fontWeight={'bold'} fontSize={'32px'} sx={{color:'#00093c'}}>Ambulance 24/7</Typography>
          </Box>
          <div className="footer-col">
            <h3>
              Address{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p className="ptag">Liaquat National Hospital,</p>
            <p className="ptag">Opposite Gate 2, Karachi</p>
            <p className="ptag">Sindh Pakistan</p>
            <p className="ptag">74800</p>
            <p className="ptag">ambulance247@gmail.com</p>
            <h4>+92 343 0284665</h4>
          </div>
          <div className="footer-col">
            <h3>
              Links{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ol>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/gallery" >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/ambulances" >
                  Ambulances
                </NavLink>
              </li>
              <li>
                <NavLink to="/locations" >
                  Location
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" >
                  Contact Us
                </NavLink>
              </li>
            </ol>
          </div>
          <div className="footer-col">
            <Box
              width={"100%"}
              minHeight={"100% !important"}
              className="col space-between"
              // bgcolor={"red"}
            >
               <h3 style={{marginBottom:"5px"}}>
              Social Media Channels{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
              <div className="social-icons flex x-y-center space-between">
                <NavLink
                  className="flex x-y-center"
                  target="_blank"
                >
                  <FacebookRounded
                    style={{ cursor: "pointer", color: "#00093c" }}
                  />
                </NavLink>
                <NavLink
                  className="flex x-y-center"
                  target="_blank"
                >
                  <Instagram
                    style={{ cursor: "pointer", color: "#00093c" }}
                  />
                </NavLink>
                <NavLink
                  className="flex x-y-center"
                  target="_blank"
                >
                  <WhatsApp
                    style={{ cursor: "pointer", color: "#00093c" }}
                  />
                </NavLink>
              </div>
            </Box>
          </div>
          <div className="footer-col map">
          <h3>
          Explore Our Location{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d226.20266721971598!2d67.06816401594213!3d24.88970264584124!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1715412330598!5m2!1sen!2s" 
          width="600" height="450" 
          allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
        <hr />
        <p>
          <div className="space-around developer-rights ">
            <p>
              Copyright &copy; {new Date().getFullYear()} |
              All Rights Reserved
            </p>
            <p style={{display:'flex', alignItems:'center'}}>Developed and Designed By [Raja Shadab Ehsan Chohan, Aamnah Attariah, Aamir Rafique] | &nbsp; <NavLink
                  className="flex x-y-center"
                  target="_blank"
                  to="https://www.linkedin.com/in/rajashadab/"
                >
                  <LinkedIn
                    style={{ cursor: "pointer", color: "#00093c" }}
                  />
                </NavLink></p>
          </div>
        </p>
      </footer>
  )
}

export default Footer
