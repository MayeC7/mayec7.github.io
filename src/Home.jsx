import { Container, Typography, Box, Stack } from '@mui/material'

import { NameTag } from './Nametag';
import ProjectFilter from './ProjectFilter';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Stack
          id="about me"
          direction='column' 
          spacing={4}
          alignItems="center"
          justifyContent="space-evenly"
          mt={6}
          mb={6}
        >
          {/*<img src="./nametag.png" alt="" />*/}
          <NameTag elevation={4} sx={{width: 300}}>
            <Typography sx={{"textAlign":"center","fontSize":"2rem", "lineHeight":"1em" }}>
              Hello
            </Typography>
            <Typography align='center'> 
              my name is 
            </Typography>
            <Typography align='center' sx={{color:'secondary.main'}} variant='h1'>
              Maye !
            </Typography>
            <Typography sx={{textAlign:'center',lineHeight:'100%'}}align='center'>
            <a target="_blank" rel="noreferrer" href="https://github.com/MayeC7">
              <img className="socialIcon" src="/picons_github_icon.svg" alt="Github Icon"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://sevenstudios.itch.io/">
              <img className="socialIcon" src="/iconfinder_dot_io_itch_icon.svg" alt="Itch.io Icon"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mayecowan/">
              <img className="socialIcon" src="/picons_linkedin_icon.svg" alt="Linkedin Icon"/>
            </a>
            </Typography>
            
          </NameTag>
          <Typography variant="subtitle1">
            {`
            Game Programmer — Software Developer
            `}
          </Typography>
          <Box sx={{padding: 1}}>
          <Typography variant='body1'>
          {`
          I'm Maye Cowan! I like to develop games, tools, and other interactive things. This is my portfolio, where you'll find some of what I have made.
          I studied Computer Science and Game Design the University of California, Santa Cruz, and made a few neat projects with great people. 
          I have experience with web technologies like Javascript, React and the Phaser game engine. I've also worked with Unity and C# to make 2D and 3D games.
          I enjoy developing games with procedural layouts and extensible systems, and I love to use UX principles to create seamless and accessible experiences.
          `}
          </Typography>
          </Box>
      </Stack>
      <ProjectFilter />    
    </Container>
  )
}