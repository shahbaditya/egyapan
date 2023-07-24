import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs'

export default function Header() {
  return (
    <header className="pt-4">
      <div className="flex justify-around items-center">
        <div>
          <ul className="flex gap-4 text-xl">
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsYoutube />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
        <h1 className="text-4xl">e-Gyapan</h1>
        <div>
          <input
            className="rounded p-1 w-72"
            type="text"
            placeholder="search"
          />
        </div>
      </div>
    </header>
  )
}
