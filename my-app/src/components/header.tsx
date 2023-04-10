import Link from 'next/link'
import { NavLinks } from './nav-links'

export function Header({ title }: { title?: string }) {
  return (
    <header className="relative py-6 lg:text-gray-400">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex items-center justify-between">
          <h1 className="m-0 text-xl leading-none">
            <Link href="/" className="flex items-center">
              Курсовая работа
            </Link>
          </h1>
          <NavLinks className = "mb-6 inline-flex w-full flex-none justify-center lg:order-1 lg:mb-0 lg:flex lg:w-1/2 lg:justify-end"/>
        </div>
      </div>
    </header>
  )
}