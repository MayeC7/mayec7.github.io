import { Container, Typography, Box, Chip, ImageList, ImageListItem, Link } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom';

import parse from 'html-react-parser';

import { NameTag } from './Nametag';

function Project({content, title, roles, skills, images}) {

  let roleList = (<></>);
  if (roles) {
    roleList = (
      <>
        <Typography variant='h6'>Roles:</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap' }}>
          {roles.map((role, index) => (
            <Chip key={index} label={role} sx={{ margin: 1 }} />
          ))}
        </Box>
      </>
    );
  }

  let skillList = (<></>);
  if (skills) {
    skillList = (
      <>
        <Typography variant='h6'>Skills:</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap' }}>
          {skills.map((skill, index) => (
            <Chip key={index} label={skill} sx={{ margin: 1 }} />
          ))}
        </Box>
      </>
    );
  }

  let imageList = (<></>);
  if (images) {
    imageList = (
      <ImageList cols={images.length} >
          {images.map((image) => (
            <ImageListItem key={image}>
              <img src={image} />
            </ImageListItem>
          ))}

        </ImageList>
    )
  }


  return ( 
  <>
    
    <Container sx={{mt: 3, mb: 6}} maxWidth="lg" >
      <Link component={RouterLink} underline='none' to="/">
        <NameTag sx={{width: 200, mx: 'auto'}}>
            <Typography sx={{"textAlign":"center","fontSize":"1.8rem", "lineHeight":"80%"}}>
              Hello 
            </Typography>
            <Typography variant='body2' align='center'>
              my name is 
            </Typography>
            <Typography sx={{"textAlign":"center","fontSize":"4rem","color":"secondary.main"}} variant='h4'>
              Maye
            </Typography>
        </NameTag>
      </Link>
        <Typography variant='h5'>{title}</Typography>
        {imageList}
        {parse(content)}
        {roleList}
        {skillList}
    </Container>
  </>
  )
}

export default Project