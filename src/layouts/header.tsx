import { sections } from '@/lib/config'
import { cn } from '@/lib/utils'
import { Squash as Hamburger } from 'hamburger-react'
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className='h-20 relative px-6 py-5 flex justify-between items-center border-b-2 border-accent bg-background'>
      <h1 className='font-bold'>0xHouss.</h1>

      <nav className='hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-2'>
        {sections.map((section) =>
          <Link key={section.name} href={section.href} className='px-3 py-2 font-medium hover:text-primary transition-colors duration-300'>{section.name}</Link>
        )}
      </nav>

      <Link
        href="#contact"
        className="liquid-button bg-background hidden lg:flex items-center gap-2 px-3 py-2 rounded-full border-2 border-accent hover:border-primary"
      >
        <p className="font-medium">Get in touch</p>
        <MoveRightIcon className="w-6 h-6" />
      </Link>

      <div className='flex lg:hidden'>
        <Hamburger onToggle={setOpen} />
      </div>

      <div className={cn('hidden fixed flex-col left-0 shadow-4xl right-0 top-20 p-4 bg-background border-b border-accent transition-opacity duration-300 w-screen', {
        "flex": open,
      })}>
        {sections.map((section) =>
          <Link key={section.name} href={section.href} className='px-4 py-6 font-medium hover:text-primary transition-colors duration-300'>{section.name}</Link>
        )}
        <Link
          href="#contact"
          className="liquid-button bg-background flex items-center gap-2 px-4 py-6 justify-between rounded-md border border-accent hover:border-primary"
        >
          <p className="font-medium">Get in touch</p>
          <MoveRightIcon className="w-6 h-6" />
        </Link>
      </div>
    </header>
  )
}
