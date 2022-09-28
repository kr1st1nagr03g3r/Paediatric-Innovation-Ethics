import * as React from 'react'
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'
import { styled } from '@mui/system'
import Stack from '@mui/material/Stack'

const gray = {
  500: '#DCDCDC',
  600: '#A9A9A9',
  700: '#808080',
}

const CustomButton = styled(ButtonUnstyled)`
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  font-size: 18px;
  background-color: ${gray[500]};
  padding: 12px 24px;
  border-radius: 25px;
  color: #1e1d1d;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${gray[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${gray[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export default function UnstyledButtonsSimple() {
  return (
    <Stack spacing={2} direction="row">
      <CustomButton>Button</CustomButton>
      {/* <CustomButton disabled>Disabled</CustomButton> */}
    </Stack>
  )
}
