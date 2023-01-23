import { Box, Container, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

function Contact() {
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
    <Box m="100px 0  0" id="contact" pb={100}
    
    

    >
      <Heading textAlign={"center"} style={{ color: "rgb(243, 14, 79)" }}>
        Contact Me
      </Heading>

      <Container
        as={motion.div}
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        
      
      m="100px auto 0" border='2px solid red'
    borderRadius={10} p={10}>
        <Text fontSize={{ base: 16, md: 18, lg: 20 }} fontFamily="cursive">
          <span>Email : </span> akashpanda1701@gmail.com
        </Text>
        <Text fontSize={{ base: 16, md: 18, lg: 20 }} fontFamily="cursive">
          <span>Phone : </span> +91 9134351603
        </Text>
        <Flex alignItems={'center'}>
          <Text fontSize={{ base: 16, md: 18, lg: 20 }} fontFamily="cursive">
            <span>Github : </span>{" "}
            <a href="https://github.com/AkashPanda1701" target="blank">
              AkashPanda1701
            </a>
          </Text>
          <a href="https://github.com/AkashPanda1701" target="blank">
            <Img
              width={5}
              ml="4"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
          </a>
        </Flex>
        <Flex alignItems={'center'}>
          <Text fontSize={{ base: 16, md: 18, lg: 20 }} fontFamily="cursive">
            <span>LinkedIn : </span>{" "}
            <a
              href="https://www.linkedin.com/in/akashpanda1701/"
              target="blank"
            >
              akashpanda1701
            </a>
          </Text>
          <a href="https://www.linkedin.com/in/akashpanda1701/" target="blank">
            <Img
              width={5}
              ml="4"
              src="https://cdn-icons-png.flaticon.com/512/1419/1419653.png"
            />
          </a>
        </Flex>
      </Container>
    </Box>
  );
}

export default Contact;
