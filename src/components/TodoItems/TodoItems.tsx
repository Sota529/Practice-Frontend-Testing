import { Box, Heading } from '@chakra-ui/react'
import React, { VFC } from 'react'

interface Props {
  data: { text: string; isDone: boolean }
}

export const TodoItems: VFC<Props> = ({ data }) => {
  return (
    <Box
      p={4}
      bg="white"
      mb={1}
      borderRadius="lg"
      shadow={'md'}
      border={data.isDone ? '1px solid red' : 'none'}
    >
      <Heading size={'sm'}>Todo</Heading>
      {data.text}
    </Box>
  )
}
