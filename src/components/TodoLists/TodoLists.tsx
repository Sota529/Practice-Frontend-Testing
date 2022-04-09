import React, { memo, VFC } from 'react'
import { TodoItems } from '../TodoItems'

interface Props {
  data: Array<{
    text: string
    isDone: boolean
  }>
}

// eslint-disable-next-line react/display-name
export const TodoLists: VFC<Props> = memo(({ data }) => {
  return (
    <div>
      {data.map((d, i) => {
        return <TodoItems data={d} key={i} />
      })}
    </div>
  )
})
