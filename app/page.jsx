import Link from 'next/link'
import Card from './components/Card'
import CardContainer from './components/CardContainer'
import Loading from './components/Loading'
import Blog from './components/Blog'

export default function HomePage() {
  return (
    <div className="mx-32 my-8">
      <CardContainer title={'Education'} />
      <CardContainer title={'Finance'} />
      <CardContainer title={'Technology'} />
      {/* <Blog /> */}
    </div>
  )
}
