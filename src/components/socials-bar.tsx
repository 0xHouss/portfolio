import { socials } from '@/lib/config'
import { MailIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function SocialsBar() {
  return (
    <div className="flex justify-between items-center h-20 px-3 lg:px-6 py-5">
      <p className="text-xs lg:text-sm font-medium text-foreground/50">
        “if we know we do, <br />
        if we don&apos;t we learn.”
      </p>

      <div className='flex gap-2'>
        <div className="flex rounded-full border-2 border-accent p-1 gap-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              className="h-9 w-9 lg:h-10 lg:w-10 rounded-full bg-primary flex items-center justify-center"
            >
              <Image src={`/${social.name.toLowerCase()}-dark.svg`} width={35} height={35} alt={`${social.name} Icon`} className="w-7 h-7 lg:w-8 lg:h-8 text-background" />
              <span className="sr-only">Email</span>
            </Link>
          ))}
        </div>

        <div className="flex rounded-full border-2 border-accent p-1">
          <Link
            href="mailto:thoussam.pro@gmail.com"
            className="h-9 w-9 lg:h-10 lg:w-10 rounded-full bg-primary flex items-center justify-center"
            target="_blank"
          >
            <MailIcon className="w-6 h-6 text-background" />
            <span className="sr-only">Email</span>
          </Link>
          <p className="p-2 font-medium hidden lg:block">thoussam.pro@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
