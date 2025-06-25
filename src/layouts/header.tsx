import { sections } from '@/lib/config'
import { cn } from '@/lib/utils'
import { Squash as Hamburger } from 'hamburger-react'
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className='h-20 sticky top-0 px-6 py-5 flex justify-between items-center border-b-2 border-accent bg-background z-50'>
      <h1 className='font-bold'>0xHouss.</h1>

      <nav className='hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-2'>
        {sections.map((section) =>
          <Link key={section.name} href={section.href} className='px-3 py-2 font-medium hover:text-primary transition-colors duration-300'>{section.name}</Link>
        )}
      </nav>

      <Link
        href="#contact"
        className="bg-background hidden lg:flex items-center p-1 rounded-full border-2 border-accent hover:border-primary hover:text-primary transition-colors duration-300"
      >
        <p className="font-medium p-2">Get in touch</p>
        <MoveRightIcon className="w-6 h-6 mr-2" />
      </Link>

      <div className='flex lg:hidden'>
        <Hamburger onToggle={setOpen} toggled={open} />
      </div>

      <div className={cn('hidden absolute flex-col left-0 shadow-4xl right-0 gap-2 top-20 p-4 bg-background border-b border-accent transition-opacity duration-300 w-screen', {
        "flex": open,
      })}>
        {sections.map((section) =>
          <Link
            key={section.name}
            href={section.href}
            className='p-4 rounded-md border border-accent font-medium hover:border-primary hover:text-primary transition-colors duration-300'
            onClick={() => setOpen(false)}
          >
            {section.name}
          </Link>
        )}
        <Link
          href="#contact"
          onClick={() => setOpen(false)}
          className="flex items-center p-4 justify-between rounded-md border border-accent font-medium hover:border-primary hover:text-primary transition-colors duration-300"
        >
          <p className="font-medium">Get in touch</p>
          <MoveRightIcon className="w-6 h-6" />
        </Link>
      </div>
    </header>
  )
}
