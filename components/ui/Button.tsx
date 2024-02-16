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

const hiddenButtonStyle = 'hidden';

export default function CustomButton({
  ready = true,
  color = 'primary',
  className = '',
  ...rest
}: Props) {
  return <Button className={`${className} bg-${color}`} {...(rest as any)} />;
}

// combines material-tailwind button props with html button props
// and adds placeholder and ready attributes, aslo updates color
/*
interface CustomProps
  extends Omit<ButtonProps, 'color'>,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  color?: originalColors & additionalColors;
  ready?: boolean;
  placeholder: string;
  ref?: React.ForwardedRef<HTMLButtonElement>
}
*/
/*
type Ref = React.RefAttributes<typeof Button>;
interface ButtonOptions {
  color: CustomColors;
  placeholder: string;
}

interface iButtonProps extends React.HTMLAttributes<typeof Button> {
  color: CustomColors;
  placeholder: string;
}

interface iCustomButton
  extends React.ForwardRefExoticComponent<
    iButtonProps & React.RefAttributes<HTMLButtonElement>
  > {}

const forwardRef = React.forwardRef<HTMLButtonElement, iButtonProps>(
  ({ color, placeholder, ...rest }, ref): React.JSX.Element => (
    <Button color={color} placeholder={placeholder} {...rest} ref={ref} />
  )
);

forwardRef.displayName = 'CustomButton';

//const Button = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<CustomProps>>//(props, ref) => (<Button ref={ref}>{props.children}</Button>)
/*


export default function CustomButton() {
  // eslint-disable-next-line react/display-name
  return React.forwardRef<Ref, CustomButtonProps>(
    ({ placeholder, children, ref, color, ...rest }, ref2) => {
      return (
        <Button placeholder={placeholder} ref={ref} color={color} {...rest}>
          {children}
        </Button>
      );
    }
  );
}

CustomButton.displayName = 'CustomButton';
*/
