import { AppBar, Toolbar, IconButton, Link, Stack} from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const sections = ["About Me", "Skills", "Games", "Other"];

export default function Header() {

  const [home, setHome] = useState(true);
  let location = useLocation();
  

  const scrollToSection = (sectionId) => {
    let element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    // pathname home check will need adjustment for build
    if (location.pathname === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [location])

  return (
    <AppBar>
      <Toolbar>
        <IconButton color='inherit'>
        </IconButton>
        <Stack sx={{ flexGrow: 1, display: { md: 'flex', sm: 'inline' } }}
          direction='row'
          spacing={2}
        >  
        {home && sections.map((section) => (
          <Link 
            onClick={() => scrollToSection(section.toLowerCase())}
            key={section}
            variant='h5' 
            color="inherit"
            cursor="pointer"
          >
            {section}
          </Link>
         ))}
         {!home && (
          <Link
            href="./"
            variant='h5' 
            color="inherit"
          >
            Maye
          </Link>
         )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}