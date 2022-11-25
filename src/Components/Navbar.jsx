import {   Flex,   Img,   Spacer } from '@chakra-ui/react'
import React from 'react'
import Menus from './Menus'
import {Link} from 'react-scroll'

function Navbar() {
  
  return (
      <Flex gap={4} px={{base:4,md:10}} alignItems='center'  className='navbar'>
         <Link
            activeClass="active"
            to="home"
            smooth={true}
            offset={-80}
            duration={500}
            
            >
        <Img w='200px'  cursor={'pointer'} my={-3} src='https://i.ibb.co/85Q5zDd/my-logo.png' />
        </Link>
            <Spacer/>
        <Flex gap={{base:5,md:5,lg:10}} wrap='wrap' justifyContent={'flex-end'}  display={{base:'none',md:'inherit'}}>
       
            <Flex gap={{base:5,md:5,lg:10}}>

       
        
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
        <a target={'blank'} href='https://drive.google.com/file/d/1svwblJ9f1hSKShmKqshlqhOVxY2eLAoF/view?usp=sharing'>

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
