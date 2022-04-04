import React, { memo, VFC } from 'react'
import { TodoItems } from '../TodoItems'

interface Props {
  data: Array<{
    data: string
    isDone: boolean
  }>
}

// eslint-disable-next-line react/display-name
export const TodoLists: VFC<Props> = memo(({ data }) => {
  return (
    <div>
      <TodoItems data={data} />
    </div>
  )
})
