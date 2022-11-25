import { Box,  Heading, Text } from '@chakra-ui/react'
import React from 'react'

function About() {
  return (
    <Box  m='100px 0  0' id='about' >
      <Heading textAlign={'center'} style={{color:'rgb(243, 14, 79)'}}>About Me</Heading>
      <Box w={{base:'90%',md:'80%',lg:'70%'}} m="40px auto 0" lineHeight={{base:'7',md:'10'}} >
      <Text fontSize={{base:16,md:18,lg:20}} textAlign={'center'} fontFamily='cursive'>
        Hello ,pleased to see you here.So,basically I am from Siliguri,Darjeeling .I have completed my schooling and graduation in Computer Science from there only.In my school when I took C.S as my subject ,at first I thought this coding is not meant for me, but with the help of my teachers later on I realized my perception for coding was wrong then slowly I started solving D.S.A problems and start connecting the dots with the real life.Then I understood how major role data structures and algorithm plays in real world. From that point of time I kind of started loving coding. I chose to pursue my higher education in this field. So now ,after gaining more skills for web development with the help of Masai School 30 weeks of intensive and immersive learning course and spending more than 800hrs in coding ,I’m looking forward to gain more practical knowledge and an opportunity to use my skills to contribute to the growth and development factors aligned with company’s objectives ,vision, mission and values. 
        </Text>
    

      </Box>
    </Box>
  )
}

export default About
