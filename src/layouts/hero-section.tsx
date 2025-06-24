import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero" className="h-[calc(100svh-160px)] max-w-5xl m-auto flex flex-col-reverse px-6 lg:px-0 md:flex-row gap-10 lg:justify-between py-10">
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-lg md:text-2xl">Hey, I’m Houssam. 👋</h2>
        <h1 className="text-primary font-semibold text-2xl md:text-5xl mt-2">FULL-STACK DEVELOPER</h1>
        <p className="max-w-md text-sm md:text-base text-muted-foreground mt-4">I help startups and small businesses build fast, scalable, and maintainable web applications. With a focus on clean code, solid architecture, and clear communication, I turn ideas into reliable software.</p>
      </div>
      <Image src={"/hero-image.jpg"} alt="Hero Image" width={400} height={400} className="rounded-md w-full min-h-0 object-cover md:h-full md:w-auto" />
    </div>
  )
}
