import { Box, Flex, Grid, Img, Text } from '@chakra-ui/react'
import React from 'react';
import About from '../Pages/About';
import Typewriter from 'typewriter-effect/dist/core';
import Project from './Project';
import Github from '../Components/Github';
import Skills from './Skills';
import Contact from './Contact';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';


function Home() {
  const slideDown = {
    hidden: { opacity: 0, y: -120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    }
  }
  
    
  const typeWriter = () => {
    const type = new Typewriter('#typer', {
      loop: true,
      delay: 105,
    });
    type.typeString('Web Developer')
      .pauseFor(2000)
      .deleteAll()
      .typeString('Software Engineer')
      .pauseFor(2000)
      .deleteAll()
      .typeString('Full Stack Developer')
      .pauseFor(2000)
      .deleteAll()
      .start();
  };
   

 React.useEffect(() => {

    typeWriter();
  }, []);
  

  return (<>
  <Box
  border={'1px solid #000'}
  bgImage={'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80)'} bgSize={'cover'} bgRepeat={'no-repeat'} bgPosition={'center'}  w={'100%'}  >

    <Navbar/>
    <Grid
      as={motion.div}
      variants={slideDown}
      initial="hidden" 
whileInView='visible'
    w={{base:'100%',md:'80%'}} id='profile' templateColumns={{md:'1fr',lg:'1fr 1fr'}} m='0px auto 120px' pt={100}>
      <Box p={10} minW={{md:'100%',lg:'500px'}} >
      <Text fontWeight={500} fontSize={{base:'30px',md:'35px',lg:'40px'}} >Hi , I'm <span style={{color:'rgb(243, 14, 79)'}}>Akash Kumar Panda </span></Text>
      <Text fontWeight={500} fontSize={{base:'25px',md:'35px',lg:'40px'}} >a <span style={{color:'rgb(243, 14, 79)'}} id='typer'></span></Text>
      <Text fontSize={20}>From Siliguri,West Bengal.</Text>
      <Text fontSize={18}>Passionate about implementing new ideas in reality.Working on learning new skills and learning new technologies.Strong creative and analytical skills. Team player with an eye for detail. </Text>
      <a href='./Akash_Panda_Resume.pdf' download  >
      <Flex w={'200px'}gap={2} my='4'p={2} borderRadius={'2xl'} fontSize='20px' alignItems='center' justifyContent={'center'} className='downloadbtn' 
      
      >
        <Img src='https://i.ibb.co/MRdbgtQ/download.png' w={10} h={10} mr={2} />
          Resume
      </Flex>
      </a>
      
 
      </Box>
      <Flex justifyContent={'center'} alignItems='center' >
       <Img src='https://i.ibb.co/7rYM40k/image.png' w={{base:'300px',md:'380px',lg:'420px'}} h={{base:'340px',md:'400px',lg:'450px'}} shadow='xl' rounded={'2xl'} />
      </Flex>
    </Grid>
      </Box>
      <Navbar clsName='navbar'/>
    <About />
    <Project/>
     <Skills/>
     <Github/>
     <Contact/>
    </>
  )
}

export default Home
