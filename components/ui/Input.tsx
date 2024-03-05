'use client'
import React from 'react'

import { Input, InputProps } from '@material-tailwind/react';
import { validateInput } from '@/lib/utils';

interface iProps extends InputProps {
  id: string;
}

export default function CustomInput(props: iProps) {
  const { id, value, onChange, type } = props;
  const label = id[0].toUpperCase() + id.slice(1);

  return (
    <Input
      id={id}
      value={value}
      onChange={onChange}
      type={type ? type : undefined}
      label={label}
      variant='outlined'
      color='indigo'
      className='text-white'
      placeholder=''
      crossOrigin=''
      required
      success={validateInput(value, type) ? true : undefined}
    />
  );
}
