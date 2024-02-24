'use client';

import * as React from 'react';

import {
  Collapse,
  Navbar,
  Typography,
  IconButton,
} from '@material-tailwind/react';

import { Link } from 'react-scroll';
interface iProps {
  sections: string[];
}

const defaultProps = { sections: [] };

export default function AppBar({ sections }: iProps = defaultProps) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const activeStyle = 'text-secondary font-bold anti-aliased';

  const navList = (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      {sections.map((section, idx) => {
        return (
          <Link
            activeClass={activeStyle}
            to={section}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={`${section}-${idx}`}
          >
            <Typography
              as='li'
              variant='h5'
              className='p-1 hover:cursor-pointer'
              placeholder={section}
            >
              {section}
            </Typography>
          </Link>
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
