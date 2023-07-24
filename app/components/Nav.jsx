import Link from 'next/link'
import { list } from 'postcss'

const lists = [
  { pageName: 'Home', path: '/' },
  { pageName: 'Education', path: '/education' },
  { pageName: 'Travel & culture', path: '/culture-travel' },
  { pageName: 'Health', path: '/health' },
  { pageName: 'Technology', path: '/technology' },
  { pageName: 'Finance', path: '/finance' },
  { pageName: 'About us', path: '/about' },
]

const nav = (lists) =>
  lists.map((list) => (
    <li key={path}>
      <Link href={`${list.path}`}>{list.pageName}</Link>
    </li>
  ))

export default function Nav() {
  return (
    <nav className="mt-4 border-y-2">
      <ul className="flex justify-evenly py-4">{nav(lists)}</ul>
    </nav>
  )
}
