import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  content: string;
  role: string;
}

export default function TestimonialCard({ name, content, role }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-3 h-full bg-background border-2 border-accent p-4 rounded-md select-none">
      <Image
        src={"/quote.svg"}
        alt={"Quote Icon"}
        width={48}
        height={48}
      />
      <p className="text-sm lg:text-lg font-medium mb-4">“{content}”</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <span className="text-background font-semibold">{name.split(" ").map(n => n[0]).join("")}</span>
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-foreground/50">{role}</p>
        </div>
      </div>
    </div>
  )
}