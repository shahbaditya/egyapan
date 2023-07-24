import Link from 'next/link'
import Card from './Card'

export default function CardContainer({ title, cardDatas }) {
  let id = 2
  return (
    <div className="shadow-lg my-12 rounded p-4">
      <div>
        <p className="text-3xl underline">
          <Link href={`/${title.toLowerCase()}`}>{title}</Link>
        </p>
      </div>
      <div className="flex justify-between pt-4">
        {/* <Link href={`/${title.toLowerCase()}/post/${[id]}`}> */}
        <Card pathName={title.toLowerCase()} />
        {/* </Link> */}
        <Card pathName={title.toLowerCase()} />
        <Card pathName={title.toLowerCase()} />
        <Card pathName={title.toLowerCase()} />
      </div>
    </div>
  )
}
