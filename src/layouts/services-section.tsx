import ServiceCard from "@/components/service-card"

const services = [
  {
    title: "Web Development",
    description: "I build complete web applications — from frontend design to backend logic — Whether it’s a portfolio, a platform, or an internal tool, I deliver clean code and great user experience.",
  },
  {
    title: "Mobile Development",
    description: "I’m expanding into cross-platform mobile development to bring intuitive, performant apps to Mobile. If you have an idea you’d like to prototype or build early, I’d love to hear about it.",
  },
  {
    title: "Automation & Scription",
    description: "From web scraping to workflow automation, I develop custom scripts that save time and reduce repetitive work — perfect for data collection, task automation, or backend utilities.",
  }
]

export default function Services() {
  return (
    <section id="services" className="max-w-5xl px-6 lg:px-0 m-auto py-10 flex flex-col items-center gap-5">
      <h2 className="text-2xl font-semibold">What do I <span className="text-primary">offer</span> ?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
        {services.map((service, index) => 
          <ServiceCard key={index} index={index+1} title={service.title} description={service.description} />
        )}
      </div>
    </section>
  )
}
