import Link from 'next/link'

const NAV_LINKS = [
  { name: '1. Библиотека', to: '/library' },
  { name: '2. Цветочный магазин', to: '/flowers' },
  { name: "3. Список студентов", to: '/students' },
]

export function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.name} className="ml-4">
          <Link
            href={link.to}
            className='lg:text-gray-400'
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}