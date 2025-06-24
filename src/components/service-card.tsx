interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
}

export default function ServiceCard({ index, title, description }: ServiceCardProps) {
  return (
    <div>
      <div className="p-2 border-b-2 border-b-accent">
        <p className="text-muted-foreground">0{index}</p>
      </div>
      <div className="p-2 flex flex-col gap-3">
        <h3 className="text-xl mt-2 font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
