'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import photos from '../photos/IMG_9758.jpg'

export default function Card({ pathName }) {
  let id = 1
  const path = usePathname()
  const testingPath = () => {
    console.log('path', path)
  }
  return (
    <div className="shadow-md w-80 h-auto rounded-md" onClick={testingPath}>
      <Link href={`${pathName ? pathName : path}/post/${[id]}`}>
        <div className="w-80">
          <Image
            // src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            src={photos}
            width={320}
            height={160}
            alt="Picture of the author"
            className="max-h-40 rounded-t-md"
          />
        </div>
        <div className="p-2">
          <p>Share prices have been reducing</p>
        </div>
      </Link>
    </div>
  )
}
