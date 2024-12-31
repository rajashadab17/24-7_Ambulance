import { Mail, WhatsApp } from '@mui/icons-material'
import { Box, Button, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
    
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Message, setMessage] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const sendMail = async () => {
        try {
          const templateParams = {
            to_email: 'rajashadab1711@gmail.com',
            from_name :Name,
            from_email : Email,
            to_name :"24/7 Ambulance Service",
            message: `A Customer having Details:\nName : ${Name}\nEmail : ${Email}\nHave this Query:\n${Message}`,
          };
      
          await emailjs.send('service_f44z19g', 'template_2orhf4l', templateParams, 'iLKrhy2XMQOowe1aX')
          console.log('success')
          await toast.success(
            "Email has been successfully sent. You will be shortly get response from the Ambulance service"
          );
        } catch (error) {
            console.log(error)
          toast.error("Unable to send Mail |", error);
        }
      };
    
    return (
        <>
            <Box minHeight={'100vh'} boxSizing={'border-box'} padding={'100px 0'}>
                <Typography className='section-heading' fontSize={'46px'} fontWeight={'bold'} textAlign={'center'} fontFamily={`"Ubuntu Sans", sans-serif`}>Contact Us</Typography>
                <Box className='space-between contact'
                    sx={{
                        height: '90vh',
                        width: '80%',
                        borderRadius: '50px',
                        background: '#e0e0e0',
                        boxShadow: `8px 8px 16px #afafaf,
                    -8px -8px 16px #ffffff`,
                        padding: '30px 20px',
                        boxSizing: 'border-box'
                    }}
                    margin={'50px auto'} boxSizing={'border-box'}>
                    <Box height={'100%'} width={'50%'} boxSizing={'border-box'} padding={'30px'} className='col space-around'>
                        <Box height={'25%'} width={'100%'} className='col space-around x-center'>
                            <Typography variant='h4' fontWeight={'bold'}>Our Office</Typography>
                            <Box>
                                <Typography >Liaquat National Hospital,</Typography>
                                <Typography >Opposite Gate 2, Karachi</Typography>
                                <Typography >74800, Pakistan</Typography>
                            </Box>
                        </Box>
                        <Box height={'30%'} width={'100%'} className='col space-around x-center'>
                            <Typography variant='h4' fontWeight={'bold'}>Want to Contact Us?</Typography>
                            <Box className='col space-around' height={'40%'}>
                                <Box className='y-center'>
                                    <WhatsApp />
                                    <Typography>&nbsp;&nbsp;: +92 343 0284665</Typography>
                                </Box>
                                <Box className='y-center'>
                                    <Mail />
                                    <Typography>&nbsp;&nbsp;: ambulance247@gmail.com</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box height={'100%'} width={'50%'} bgcolor={'#c9c9c98f'} borderRadius={'25px'} className='col y-center' padding={'20px'} boxSizing={'border-box'}>
                        <Typography variant='h4' textAlign={'center'}>Contact Form</Typography>
                        <Box className=' col space-around' height={'400px'} width={'100%'}>
                            <TextField variant='outlined' label='Name' fullWidth value={Name} onChange={e => setName(e.target.value)} />
                            <TextField variant='outlined' label='Email' fullWidth value={Email} onChange={e => setEmail(e.target.value)}/>
                            <TextareaAutosize
                                style={{
                                    background: 'transparent',
                                    border: '1px solid grey',
                                    borderRadius: '9px',
                                    padding: '5px'
                                }}
                                minRows={5}
                                aria-label="maximum height"
                                placeholder="What you are concerning for?"
                                value={Message} onChange={e => setMessage(e.target.value)}
                            />
                            <br />
                            <Button variant='contained' className='nav-btn' sx={{ width: '100px !important', borderRadius: '9px', padding: '0px !important' }} onClick={sendMail}>Submit</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Contact
