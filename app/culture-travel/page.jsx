import { Suspense } from 'react'
import Card from '../components/Card'
import Loading from '../components/Loading'
import PostContainer from '../components/PostContainer'
const lists = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

export default function CultureAndTravelPage() {
  return (
    <div className="my-8 mx-32">
      <div className="text-2xl mb-4">
        <h1>Culture & Travel</h1>
      </div>
      <PostContainer />
    </div>
  )
}
