import {   Flex,   Img,   Spacer } from '@chakra-ui/react'
import React from 'react'
import Menus from './Menus'
import {Link} from 'react-scroll'
import { motion } from "framer-motion";


function Navbar() {


  
  return (
      <Flex gap={4}
      bg='blackAlpha.100'
      className='navbar'
      px={{base:4,md:10}} alignItems='center'  >
         <Link
            activeClass="active"
            to="home"
            smooth={true}
            offset={-80}
            duration={500}
            
            >
                <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
        <Img w='200px'  cursor={'pointer'} my={-3} src='https://i.ibb.co/85Q5zDd/my-logo.png' />
    </motion.div>
        </Link>
            <Spacer/>
        <Flex
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 1,
           delay: 1,
           ease: [0, 0.71, 0.2, 1.01]
         }}
         as={motion.div}
        gap={{base:5,md:5,lg:10}} wrap='wrap' justifyContent={'flex-end'}  display={{base:'none',md:'inherit'}}>
       
            <Flex gap={{base:5,md:5,lg:10}}
             
            >

       
        
        <Link 
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        >
        <button className='btn'>About</button>
        </Link>
        <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        >
        <button className='btn'>Projects</button>
        </Link>
            </Flex>
            <Flex  gap={{base:5,md:5,lg:10}}>
        <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        >
        <button className='btn'>Skills</button>
        </Link>
        <a target={'blank'} href='https://drive.google.com/file/d/1Jpw6yerohcfynEsow_qQN21uE6-VSP4o/view?usp=sharing'>

        <button className='btn'>Resume</button>
        </a>
        <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        >
        <button className='btn'>Contact</button>
        </Link>
            </Flex>
        </Flex>
       <Menus/>
      </Flex>
  )
}

export default Navbar
