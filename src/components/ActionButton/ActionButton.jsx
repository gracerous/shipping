import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({ theme, width, height }) => ({
  backgroundColor: theme.palette.button.background,
  width: width || '170px',
  height: height || '50px',
  '&:hover': {
    backgroundColor: theme.palette.header.background,
  },
}));

export default function ActionButton({ content, action, width, height, disabled, type }) {
  const handleAction = () => {
    if (!disabled) {
      action();
    }
  }

  return (
    <StyledButton
      onClick={action ? handleAction : null}
      variant='contained'
      width={width}
      height={height}
      disabled={disabled}
      type={type}
    >
      {content}
    </StyledButton>
  )
}