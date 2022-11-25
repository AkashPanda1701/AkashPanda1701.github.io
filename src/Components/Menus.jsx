import {   Box,  Img,  Menu,  MenuButton,  MenuList , Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-scroll'
function Menus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}  >
    <MenuButton
    display={{sm:'inherit',md:'none'}}
      variant="ghost"
      borderRadius={5}
      aria-label="Courses"
      fontWeight="normal"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      bg='rgb(243, 14, 79)'
      p={2}
      mr={4}
    >
     <Img w={6} src='https://www.clipartmax.com/png/full/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png'/> 
    </MenuButton>
    <MenuList p={4} border='none' onMouseEnter={onOpen} onMouseLeave={onClose}  bg='rgb(243, 14, 79)'>
    
      <Box textAlign={"left"}>
        
       
        <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
        <Text
          p={2}
          fontWeight={600}
          _hover={{
            borderRadius: "5px",
            bg: "gray.100",
            color: "red",
            cursor: "pointer",
          }}
          mx={3}
        >
          About
        </Text>
        </Link>
        <Link

            activeClass="active"  
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
        <Text
          p={2}
          fontWeight={600}
          _hover={{
            borderRadius: "5px",
            bg: "gray.100",
            color: "red",
            cursor: "pointer",
          }}
          mx={3}
        >
          Skills
        </Text>
        </Link>
        <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
        <Text
          p={2}
          fontWeight={600}
          _hover={{
            borderRadius: "5px",
            bg: "gray.100",
            color: "red",
            cursor: "pointer",
          }}
          mx={3}
        >
          Projects
        </Text>
        </Link>
        <a target={'blank'} href="https://drive.google.com/file/d/1svwblJ9f1hSKShmKqshlqhOVxY2eLAoF/view?usp=sharing">
        <Text
          p={2}
          fontWeight={600}
          _hover={{
            borderRadius: "5px",
            bg: "gray.100",
            color: "red",
            cursor: "pointer",
          }}
          mx={3}
        >
          Resume
        </Text>
        </a>
        <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
        <Text
          p={2}
          fontWeight={600}
          _hover={{
            borderRadius: "5px",
            bg: "gray.100",
            color: "red",
            cursor: "pointer",
          }}
          mx={3}
        >
          Contact
        </Text>
        </Link>
       
     
      </Box>
    </MenuList>
  </Menu>
  )
}

export default Menus
