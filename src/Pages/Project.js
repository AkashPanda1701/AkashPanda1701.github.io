import { Box, Button, Flex, Grid, Heading, Img, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { LinkIcon } from '@chakra-ui/icons'
import ProjectDb from '../projectDb.json'
import { motion } from 'framer-motion'
function Project() {
  const slideLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    }
  }

  const slideRight = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    }
  }
 
  return (
    <Box mt={200} id='projects'>
      <Heading textAlign={'center'} style={{color:'rgb(243, 14, 79)'}}>My Projects</Heading>
     
    {
      ProjectDb.map((project,index)=>{

        return <Grid w='80%' as={motion.div}
        variants={index % 2 === 0 ? slideLeft : slideRight} 
        initial="hidden" 
        whileInView='visible'
         key={index}  templateColumns={{md:'repeat(1,1fr)',lg:'repeat(2,1fr)'}} gap={{lg:'4'}} className='button'  rounded='lg'   m='40px auto'  fontWeight="semibold" fontSize='14px' color="white" transition='all 0.3s ease-in-out' _hover={{transform:'scale(1.1)'}}>
        <Grid >
        <Img src={project.img} align="center" borderRadius='10px 10px 0 0'/>
          <Box >
        <Flex justifyContent={'center'} gap={4} mb={{md:'2',lg:'4'}} mt={4}>
        <Link href={project.git} target='blank'>
        <Button color={'white'} bg='blue.400' _hover={{bg:'blue'}}>
          <Img src='https://www.svgrepo.com/show/332084/github.svg' w={7} mr={2}/>
          Github</Button>
        </Link>
        <Link href={project.deploy} target='blank'>
        <Button color={'white'} bg='blue.400' _hover={{bg:'blue'}}><LinkIcon mr={2}/>Deployed</Button>
        </Link>
        </Flex>
        </Box>
        </Grid>
         <Grid p={4}>
          <Box mt={{md:0,lg:4}}>
         <Heading textAlign={'center'} style={{color:' rgb(18, 195, 214)'}}>{project.name}</Heading>
          <Text mt={4}>{project.desc}</Text>
          </Box>
          <Box>
          <Text fontWeight={'bold'} fontSize='20' style={{color:' rgb(18, 195, 214)'}}>Tech Stack</Text>
           <Flex wrap='wrap' w={{base:'100%',md:'70%',lg:'70%'}}>

            {
              project.techStack.map((tech,index)=>{
                return <Flex key={index} className='tech' borderRadius={'30px'} p='5px 10px' m='1' fontWeight="semibold" fontSize='14px' color="white" transition='all 0.3s ease-in-out'  _hover={{transform:'translateY(-5px)'}}>
                <Img src={tech.img} w='20px' h='20px'/>
                {tech.name}
                </Flex>
             
            })
          }
          </Flex>
          </Box>
           </Grid>
    
</Grid>
      })
    }
    

    </Box>
  )
}

export default Project
