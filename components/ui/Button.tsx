'use client';

import { Button, ButtonProps } from '@material-tailwind/react';

type colorOptions = 'primary' | 'secondary' | 'accent';

interface PropOverrides {}

interface CustomProps extends Omit<ButtonProps, 'color'> {
  color?: colorOptions;
  placeholder: string;
}

const CustomButton = (props: CustomProps) => (
  <Button {...(props as any)} ripple />
);

export default CustomButton;
