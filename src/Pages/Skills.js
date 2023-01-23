import { Box, Flex, Grid, Heading, Img, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
let skills=[
  {
    name:'HTML',
    img:'https://cdn-icons-png.flaticon.com/512/1532/1532556.png'
  },
  {
    name:'CSS',
    img:'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png'
  },
  {
    name:'JavaScript',
    img:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
  },
  {
    name:'React',
    img:'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png'
  },
  {
    name:'NodeJs',
    img:'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
  },
  {
    name:'MongoDB',
    img:'https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png'
  },
  {
    name:'Express',
    img:'https://miro.medium.com/max/1200/0*iechRr4efJARJmnK.jpg'
  },
  {
    name:'REST API',
    img:'https://miro.medium.com/max/300/1*1RDFnS8FgAOQFegtuynxWw.png'
  },
  {
    name:'Git',
    img:'https://cdn.iconscout.com/icon/free/png-512/git-226092.png'
  },
  {
    name:'Github',
    img:'https://cdn.iconscout.com/icon/free/png-512/github-153-675523.png'
  },
  {
    name: "Heroku",
    img:  "https://cledara-public.s3.eu-west-2.amazonaws.com/heroku.png"
},
{
    name: "Chakra UI",
    img:  "https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67"
},
  

]
function Skills() {
  const slideUp = {
    hidden: { opacity: 0, y: 100 },
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

  return (
    <Box my='100'  id='skills'>
           <Heading textAlign={'center'} style={{color:'rgb(243, 14, 79)'}}>My Skills & Tools</Heading>
           <Grid templateColumns={{base:'repeat(2,1fr)',md:'repeat(3,1fr)',lg:'repeat(4,1fr)'}} gap={20} w={'80%'} m='100px auto' >
              {skills.map((skill,index)=>{
                return(
                  <Box key={index} 
                  as={motion.div}
                  variants={slideUp}
                  initial="hidden" 
        whileInView='visible'
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}

                 
                  className='skill' p={3} textAlign='center' >
                    
                    <Flex 
                    direction={{base:'column',xl:'row'}}
                    alignItems={'center'} gap={4}> 
                    <Img src={skill.img} w={100} h={100} />
                    <Text
                       
                        fontSize={20}
                        fontWeight={500}

                    >{skill.name}</Text>

                    </Flex>
                  </Box>
                )
              })}
            
            
           </Grid>
    </Box>
  )
}

export default Skills
