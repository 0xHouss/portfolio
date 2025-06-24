import ProjectCard from "@/components/project-card"

const projects = [
  {
    title: "Project One",
    tag: "Web Development",
    image: "/project.jpg",
    url: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    tag: "Web Development",
    image: "/project.jpg",
    url: "https://example.com/project-two",
  },
  {
    title: "Project Three",
    tag: "Web Development",
    image: "/project.jpg",
    url: "https://example.com/project-three",
  },
  {
    title: "Project Four",
    tag: "Web Development",
    image: "/project.jpg",
    url: "https://example.com/project-four",
  },
  {
    title: "Project Five",
    tag: "Web Development",
    image: "/project.jpg",
    url: "https://example.com/project-five",
  },
  {
    title: "Project Six",
    tag: "Web Development",
    image: "/project.jpg",
    url: "https://example.com/project-six",
  },
]

export default function Projects() {
  return (
    <div id="projects" className="max-w-5xl m-auto px-6 lg:px-0 py-10 flex flex-col gap-5">
      <h2 className="text-2xl font-semibold">What have I <span className="text-primary">worked</span> on ?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div key={index} className={`overflow-clip rounded-md ${index > 2 ? 'hidden md:block' : ''}`}>
            <ProjectCard
              title={project.title}
              tag={project.tag}
              image={project.image}
              url={project.url}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
