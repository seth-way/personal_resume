import IconButton, { IconButtonProps } from '@mui/material/IconButton';

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    custom: true;
  }
}

interface CustomProps extends IconButtonProps {
  href: string;
  variant: 'github' | 'linkedin';
}

// TDOD: extend tailwind theme to include these colors.
const colorPicker = { github: '#6cc644', linkedin: '#0077B5' };

const CustomIconButton = ({
  children,
  variant,
  href,
  ...rest
}: CustomProps) => (
  <IconButton
    href={href}
    target='_blank'
    aria-label={`link to ${href}`}
    style={{ color: colorPicker[variant] }}
  >
    {children}
  </IconButton>
);

export default CustomIconButton;
