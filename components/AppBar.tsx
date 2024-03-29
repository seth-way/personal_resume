'use client';

import React, { useState, useEffect } from 'react';

import {
  Collapse,
  Navbar,
  Typography,
  IconButton,
} from '@material-tailwind/react';

import Scroller from 'react-scroll';
import { isMobile } from 'react-device-detect';
import useProjectStore, { ProjectState } from '@/store/useProjectStore';
import useEventStore, { EventState } from '@/store/useEventStore';
import useWindowStore, { WindowState } from '@/store/useWindowStore';
import { useShallow } from 'zustand/react/shallow';

interface iProps {
  sections: string[];
}

export default function AppBar({ sections = [] }: iProps) {
  const visible = useProjectStore((state: ProjectState) => state.visible);
  const [scrollingActive, scrolledToTop, mouseOverAppbar] = useEventStore(
    useShallow((state: EventState) => [
      state.scrollingActive,
      state.scrolledToTop,
      state.mouseOverAppbar,
    ])
  );

  const [width, height] = useWindowStore(
    useShallow((state: WindowState) => [state.width, state.height])
  );

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    if (width >= 960) setOpenNav(false);
  }, [width]);

  const handleClick = () => {
    setOpenNav(!openNav);
  };

  const activeStyle = 'text-secondary font-bold anti-aliased';

  const navList = (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6'>
      {sections.map((section, idx) => {
        return (
          <Scroller.Link
            activeClass={activeStyle}
            to={section}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={`${section}-${idx}`}
            onClick={() => {
              console.log('triggered');
              setOpenNav(false);
            }}
          >
            <Typography
              as='li'
              variant='h5'
              className='p-1 hover:cursor-pointer transition ease-in-out hover:scale-110 duration-300'
              placeholder={section}
            >
              {section}
            </Typography>
          </Scroller.Link>
        );
      })}
    </ul>
  );

  const NavBarCSS =
    'fixed transition-[top] ease-in-out duration-300 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-background border-0 ';

  const showNavbar =
    !visible &&
    (isMobile || scrollingActive || scrolledToTop || mouseOverAppbar);

  return (
    <Navbar
      className={NavBarCSS + (showNavbar ? 'top-0' : '-top-20')}
      placeholder='navbar'
    >
      <div className='flex items-center justify-around text-white w-full'>
        <div className='flex justify-center items-center w-full'>
          <div className='gap-4 hidden lg:block'>{navList}</div>
          <div className='flex items-center'></div>
          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple
            onClick={() => handleClick()}
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
