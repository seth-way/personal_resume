'use client';

import { Button, ButtonProps } from '@material-tailwind/react';

interface Props extends Omit<ButtonProps, 'color'> {
  color?:
    | 'primary'
    | 'blue-gray'
    | 'gray'
    | 'brown'
    | 'deep-orange'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'light-green'
    | 'green'
    | 'teal'
    | 'cyan'
    | 'light-blue'
    | 'blue'
    | 'indigo'
    | 'deep-purple'
    | 'purple'
    | 'pink'
    | 'red';
  placeholder?: string;
  ready?: boolean;
}

export default function CustomButton({
  ready = true,
  color = 'primary',
  className = '',
  ...rest
}: Props) {
  return (
    <Button
      className={`${className}` + (ready ? `bg-${color}` : 'hidden')}
      {...(rest as any)}
    />
  );
}
