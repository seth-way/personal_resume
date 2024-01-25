'use client';

import * as React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Fab,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';

import AdbIcon from '@mui/icons-material/Adb';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function ScrollTop(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const sections = ['HOME', 'ABOUT', 'RESUME', 'PORTFOLIO', 'CONTACT'];

export default function CustomAppBar() {
  const { name } = require('@/public/resumeData.json').main;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Container maxWidth='xl' className='lg:px-48 bg-primary'>
            <Toolbar disableGutters className='flex justify-between'>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {sections.map(section => (
                    <MenuItem key={section} onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'>{section}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {sections.map(section => (
                  <Button
                    key={section}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {section}
                  </Button>
                ))}
              </Box>
              <Box>
                <Avatar alt={name} src='/images/headShot.jpg' />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <ScrollTop>
        <Fab size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
