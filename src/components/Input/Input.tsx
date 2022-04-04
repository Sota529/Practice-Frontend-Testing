import React, { VFC } from 'react'
import {
  Box,
  BoxProps,
  Input as ChakraInput,
  InputProps
} from '@chakra-ui/react'

type Props = {
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onSubmit: React.ChangeEventHandler<HTMLInputElement>
  inputProps?: InputProps
} & BoxProps

export const Input: VFC<Props> = ({
  value,
  onChange,
  onSubmit,
  inputProps,
  ...props
}) => {
  return (
    <Box onSubmit={onSubmit} as="form" {...props}>
      <ChakraInput value={value} onChange={onChange} {...inputProps} />
    </Box>
  )
}
