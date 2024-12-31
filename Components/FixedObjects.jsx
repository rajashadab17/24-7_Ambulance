import { Phone, WhatsApp } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const FixedObjects = () => {
  return (
    <>
    <Box position={'fixed'} boxSizing={'border-box'} className='call' bottom={'3%'} left={'2%'} zIndex={100}>
        <Box bgcolor={'green'} height={'60px'} width={'60px'} borderRadius={'50%'} className='x-y-center'>
            <NavLink to={'tel:+923418225622'} style={{height:'60px', width:'60px', borderRadius:'50%'}} className='x-y-center'>
                <Phone sx={{color:'white'}} fontSize='large'/>
            </NavLink>
        </Box>
    </Box>
    <Box position={'fixed'} boxSizing={'border-box'} className='whatsapp' bottom={'3%'} right={'2%'} zIndex={100}>
        <Box bgcolor={'#16914b'} height={'60px'} width={'60px'} borderRadius={'50%'} className='x-y-center'>
            <NavLink to={'https://wa.me/+923418225622'} style={{height:'60px', width:'60px', borderRadius:'50%'}} className='x-y-center'>
                <WhatsApp sx={{color:'white'}} fontSize='large'/>
            </NavLink>
        </Box>
    </Box>
    </>
  )
}

export default FixedObjects