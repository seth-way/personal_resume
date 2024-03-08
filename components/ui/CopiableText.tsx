'use client';

import React, { useState } from 'react';
import {
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from '@material-tailwind/react';
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa6';
import { getErrorMessage } from '@/lib/utils';

interface iProps {
  text: string;
}

export default function CopiableText({ text }: iProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopy] = useState(false);

  const handleClick = () => {
    async function copy() {
      try {
        await navigator.clipboard.writeText(text);
        setCopy(true);
      } catch (e: unknown) {
        console.log(getErrorMessage(e));
      }
    }
    copy();
  };

  const handleHoverOff = () => {
    setCopy(false);
  };

  return (
    <div
      className='group/item'
      onMouseLeave={handleHoverOff}
      onClick={handleClick}
    >
      <SpeedDial open={open} handler={setOpen} placement='right'>
        <SpeedDialHandler>
          <Typography
            variant='small'
            className='no-underline hover:scale-110 group-hover/item:text-secondary group-hover/item:font-bold'
            placeholder={`${text}`}
          >
            {text}
          </Typography>
        </SpeedDialHandler>
        <SpeedDialContent placeholder='speed_dial_content'>
          <SpeedDialAction
            className='h-16 w-16 bg-background'
            placeholder='speed_dial_action'
          >
            {copied ? (
              <>
                <FaClipboardCheck className='h-5 w-5' />
                <Typography className='text-xs font-normal' placeholder='copy'>
                  success
                </Typography>
              </>
            ) : (
              <>
                <FaClipboard className='h-5 w-5' />
                <Typography className='text-xs font-normal' placeholder='copy'>
                  copy
                </Typography>
              </>
            )}
          </SpeedDialAction>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}

//
