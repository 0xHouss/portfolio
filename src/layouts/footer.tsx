import { socials } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import { sections } from "./header";

export default function Footer() {
  return (
    <footer className="flex flex-col p-3 gap-3 lg:p-6 lg:gap-6">
      <div className="hidden md:block relative h-100 bg-background rounded-md border-2 border-accent overflow-clip pt-12 px-6">
        <div className="flex flex-col items-start justify-between flex-grow gap-10 sm:flex-row md:gap-20 xl:gap-36 2xl:gap-56">
          <div className="flex items-start justify-between flex-grow w-full">
            <p className="text-xl">
              “if we know we do, <br />
              if we don't we learn.”
            </p>

            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold text-primary">Navigation</h1>
              <div className="flex flex-col gap-2">
                {[...sections, { name: 'Contact', href: '#contact' }].map((section) => (
                  <Link
                    key={section.name}
                    href={section.href}
                    className="text-lg transition-all hover:text-primary"
                  >
                    {section.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between w-full gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold text-primary">Socials</h1>
              <div className="flex flex-col items-start gap-3 z-10">
                {socials.map((social) =>
                  <Link key={social.name} href={social.href} target="_blank" className="flex items-center gap-2 group">
                    <Image src={`/${social.name.toLowerCase()}.svg`} width={28} height={28} alt={`${social.name} Icon`} className="w-7 h-7" />
                    <p className="text-lg transition-all group-hover:text-primary">
                      {social.name}
                    </p>
                  </Link>
                )}
              </div>
            </div>

            <div>
              <Link href="#contact" className="flex gap-5 group items-center">
                <div>
                  <p
                    className="text-xl font-semibold transition-all group-hover:text-primary"
                  >
                    Contact me
                  </p>
                  <p className="text-sm text-muted-foreground">Say hello !</p>
                </div>
                <Image
                  src="/arrow.svg"
                  alt="Arrow"
                  width={36}
                  height={36}
                  className="transition-all ease-in-out rotate-45 group-hover:rotate-0"
                />
              </Link>
              {/* <Link href="/projects" className="flex justify-between gap-2 pt-3 group">
                <div>
                  <a
                    className="text-xl font-semibold transition-all group-hover:text-primary"
                    href="/Projects"
                  >
                    My projects
                  </a>
                  <p className="pb-2 text-sm text-muted-foreground">
                    Explore projects
                  </p>
                </div>
                  <Image
                    src="/arrow.svg"
                    alt="Arrow"
                    width={36}
                    height={36}
                    className="transition-all ease-in-out rotate-45 group-hover:rotate-0"
                  />
              </Link> */}
            </div>
          </div>
        </div>

        <p className="text-[300px]/[210px] font-bold text-foreground/20 absolute bottom-0 -right-25 z-0 pointer-events-none select-none" aria-hidden="true">
          HOUSS
        </p>
      </div>

      <div className="md:hidden relative bg-background rounded-md border-2 border-accent overflow-clip py-12 px-6">
        <div className="flex flex-col items-start justify-between flex-grow gap-10 z-20 sm:flex-row md:gap-20 xl:gap-36 2xl:gap-56">
          <p className="text-xl">
            “if we know we do, <br />
            if we don't we learn.”
          </p>

          <div className="flex justify-between w-full z-20">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold text-primary">Navigation</h1>
              <div className="flex flex-col gap-2">
                {[...sections, { name: 'Contact', href: '#contact' }].map((section) => (
                  <Link
                    key={section.name}
                    href={section.href}
                    className="text-lg transition-all hover:text-primary"
                  >
                    {section.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold text-primary">Socials</h1>
              <div className="flex flex-col items-start gap-3 z-10">
                {socials.map((social) =>
                  <Link key={social.name} href={social.href} target="_blank" className="flex items-center gap-2 group">
                    <Image src={`/${social.name.toLowerCase()}.svg`} width={28} height={28} alt={`${social.name} Icon`} className="w-7 h-7" />
                    <p className="text-lg transition-all group-hover:text-primary">
                      {social.name}
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="ml-auto">
            <Link href="#contact" className="flex gap-5 group items-center">
              <div>
                <p
                  className="text-xl font-semibold transition-all group-hover:text-primary"
                >
                  Contact me
                </p>
                <p className="text-sm text-muted-foreground">Say hello !</p>
              </div>
              <Image
                src="/arrow.svg"
                alt="Arrow"
                width={36}
                height={36}
                className="transition-all ease-in-out rotate-45 group-hover:rotate-0 z-50 bg-background rounded-full"
              />
            </Link>
            {/* <Link href="/projects" className="flex justify-between gap-2 pt-3 group">
                <div>
                  <a
                    className="text-xl font-semibold transition-all group-hover:text-primary"
                    href="/Projects"
                  >
                    My projects
                  </a>
                  <p className="pb-2 text-sm text-muted-foreground">
                    Explore projects
                  </p>
                </div>
                  <Image
                    src="/arrow.svg"
                    alt="Arrow"
                    width={36}
                    height={36}
                    className="transition-all ease-in-out rotate-45 group-hover:rotate-0"
                  />
              </Link> */}
          </div>
        </div>

        <Image src={"/footer-background-text.png"} alt="Footer Background Text" width={1035} height={450} className="absolute top-0 left-0 h-[120%] -translate-y-[10%] w-auto z-0" />
      </div>

      <div className="text-xs lg:text-base flex px-3 justify-between">
        <p>&copy; {new Date().getFullYear()} 0xHouss. All rights reserved.</p>

        <p>Algiers, Algeria</p>
      </div>
    </footer>
  );
}
