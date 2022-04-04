import { Box, Heading, Text } from '@chakra-ui/react'
import React, { VFC } from 'react'

interface Props {
  data: Array<{ data: string; isDone: boolean }>
}

export const TodoItems: VFC<Props> = ({ data }) => {
  return (
    <div>
      {data.map((d, i) => {
        return (
          <div key={i}>
            <Box p={4} mb={1} borderWidth="1px" borderRadius="lg">
              <Heading size={'sm'}>Todos</Heading>
              {d.data}
              <Text fontSize="xs">{`id: ${i}`}</Text>
            </Box>
          </div>
        )
      })}
    </div>
  )
}
