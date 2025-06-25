import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div id="hero" className="h-[calc(100svh-160px)] max-w-5xl m-auto flex flex-col-reverse px-6 lg:px-0 md:flex-row gap-10 lg:justify-between py-10">
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-lg md:text-2xl">Hey, I’m Houssam. 👋</h2>
        <h1 className="text-primary font-semibold text-2xl md:text-5xl mt-2">FULL-STACK DEVELOPER</h1>
        <p className="max-w-md text-sm md:text-base text-muted-foreground mt-4">I help startups and small businesses build fast, scalable, and maintainable web applications. With a focus on clean code, solid architecture, and clear communication, I turn ideas into reliable software.</p>

        <Link href="#contact" className="liquid-button mt-6 p-1 flex items-center rounded-full border-2 border-accent ">
          <div className="relative p-2">
            <div className="w-3 h-3 rounded-full bg-green-500 md:h-4 md:w-4 animate-ping z-10"></div>
            <div className="absolute rounded-full top-1/2 left-1/2 -translate-1/2 bg-green-700 w-3 h-3 md:h-4 md:w-4 flex items-center justify-center z-20"></div>
          </div>
          <p className="p-2 font-medium">Let&apos;s connect</p>
        </Link>
      </div>
      <Image src={"/hero-image.jpg"} alt="Hero Image" width={400} height={400} className="rounded-md w-full min-h-0 object-cover md:h-full md:w-auto" />
    </div>
  )
}
