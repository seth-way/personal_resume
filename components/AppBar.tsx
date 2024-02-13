'use client';

import * as React from 'react';

import {
  Collapse,
  Navbar,
  Typography,
  IconButton,
} from '@material-tailwind/react';

const sections = ['HOME', 'ABOUT', 'RESUME', 'PORTFOLIO', 'CONTACT'];

interface iProps {
  visibleSection: string;
}

export default function AppBar({ visibleSection = 'HOME' }: iProps) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const visibleSectionStyle =
    'text-secondary font-bold subpixel-antialiased drop-shadow-md';
  const otherStyle = 'font-normal antialiased';

  const navList = (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      {sections.map((section, idx) => {
        const isVisible = section === visibleSection;
        return (
          <Typography
            as='li'
            variant='h5'
            className={`p-1 ${isVisible ? visibleSectionStyle : otherStyle}`}
            placeholder={section}
            key={`${section}-${idx}`}
          >
            <a href={`#${section}`} className='flex items-center'>
              {section}
            </a>
          </Typography>
        );
      })}
    </ul>
  );

  return (
    <Navbar
      className='fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-background border-0'
      placeholder='navbar'
    >
      <div className='flex items-center justify-around text-white'>
        <div className='flex items-center gap-4'>
          <div className='gap-4 hidden lg:block'>{navList}</div>
          <div className='flex items-center gap-x-1'></div>
          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple
            onClick={() => setOpenNav(!openNav)}
            placeholder='hamburger_menu'
          >
            {openNav ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                className='h-6 w-6'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  );
}

/*
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

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
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
              <ElectricBoltIcon
                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
              />
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
              <ElectricBoltIcon
                sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
              />
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
*/
