import { ArrowUpRightFromSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectsCardProps {
  title: string;
  tag: string;
  image: string;
  url: string;
}

export default function ProjectCard({ title, tag, image, url }: ProjectsCardProps) {
  return (
    <Link href={url} target="_blank" className="group relative bg-accent aspect-square rounded-md overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-full h-full object-cover rounded-t-md group-hover:scale-110 scale-110 lg:scale-100 transition-all duration-300"
      />

      <div className="lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-background/80 to-transparent absolute top-0 left-0 right-0 bottom-0"></div>

      <div className="absolute flex items-end justify-between left-3 bottom-3 right-4 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div>
          <p className="text-xs rounded-full border border-white px-2 py-1">{tag}</p>
          <h3 className="text-lg mt-2 font-medium">{title}</h3>
        </div>

        <ArrowUpRightFromSquareIcon className="text-white h-8 w-8" />
      </div>
    </Link>
  )
}
