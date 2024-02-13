'use client';

import { ProfilerProps } from 'react';

interface Props {
  color?: 'primary' | 'secondary' | 'accent';
}

const customDividerClass = (color: Props['color']) =>
  `bg-${color} border-${color} h-1 w-11/12 rounded drop-shadow-md`;

export default function CustomDivider({ color = 'accent' }: Props) {
  return (
    <div className={'flex justify-center w-full relative shrink-0'}>
      <hr className={customDividerClass(color)} />
    </div>
  );
}
