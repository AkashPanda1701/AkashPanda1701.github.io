import { Box, Flex, Grid, Heading, Img } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from 'react-github-calendar';


function Github() {
  return (
    <Box>
      <Heading textAlign={"center"} mt={40} style={{ color: "rgb(243, 14, 79)" }}>
        Git Statistics
      </Heading>
      <Grid w={'80%'} m='40px auto' justifyContent={'center'} >
      <Img  className="git" src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=AkashPanda1701&theme=solarized_dark" />
     
      <GitHubCalendar 
  username="akashpanda1701" 
  blockSize={20}
  blockMargin={5}
 color={'#20FF32'}

  
/>
      <Flex wrap='wrap'>

      <Img className="git" src="https://github-readme-stats.vercel.app/api?username=akashpanda1701&show_icons=true&theme=radical" />
      <Img className="git" src="https://github-readme-streak-stats.herokuapp.com/?user=akashpanda1701&theme=radical" />
      </Flex>
      <Img className="git" src="https://github-profile-trophy.vercel.app/?username=akashpanda1701&theme=radical" />
      <Img className="git" src="https://github-readme-stats.vercel.app/api/top-langs/?username=akashpanda1701&layout=compact&theme=radical" />
    </Grid>
    </Box>
  );
}

export default Github;
