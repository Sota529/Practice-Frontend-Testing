import { Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Input } from 'src/components/Input'
import { TodoLists } from 'src/components/TodoLists'

const Home: NextPage = () => {
  const [value, setValue] = useState<string>('')
  const [data, setData] = useState<Array<{ data: string; isDone: boolean }>>([])
  const handleSubmit: React.FormEventHandler<HTMLDivElement> = (e): void => {
    e.preventDefault()
    if (value !== '') setData([...data, { data: value, isDone: false }])
    setValue('')
  }
  return (
    <Box w={500} px={8}>
      <Head>
        <title>My Todos</title>
        <meta name="description" content="My Todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading my={4}>My Todos</Heading>
      <Input
        value={value}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setValue(e.currentTarget.value)
        }
        onSubmit={handleSubmit}
        mb={4}
      />
      <TodoLists data={data} />
    </Box>
  )
}

export default Home
