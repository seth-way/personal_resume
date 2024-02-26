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
  moreCSS?: string;
  ready?: boolean;
}

export default function CustomButton({
  ready = true,
  color = 'primary',
  moreCSS,
  ...rest
}: Props) {
  let css = `bg-${color} transition ease-in-out delay-100 hover:scale-110 hover:brightness-125 duration-300`;
  if (moreCSS) css = css + ' ' + moreCSS;
  if (!ready) css = 'hidden';
  return <Button className={css} color={color} {...(rest as any)} />;
}
