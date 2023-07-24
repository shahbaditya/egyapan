import { Suspense } from 'react'
import Loading from './Loading'
import Card from './Card'

const lists = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

export default function PostContainer() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex justify-start gap-6 flex-wrap ">
        {lists.map((list) => (
          <Card key={list} />
        ))}
      </div>
    </Suspense>
  )
}
