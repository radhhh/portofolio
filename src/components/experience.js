import { promises as fs } from "fs";

export default async function ExperiencePage() {
  const experiences = JSON.parse(
    await fs.readFile(process.cwd() + "/public/experience.json", "utf-8"),
  );
  const experienceElements = experiences.map((experience) => (
    <li key={experience.name}>
      <a href={experience.link} className="mb-6 flex flex-col lg:flex-row">
        <div className="flex-1 text-lg">{experience.timespan}</div>
        <div className="flex-[4] text-lg">
          <h2 className="mb-1 text-2xl text-neutral-300">
            {experience.role} • {experience.name}
          </h2>
          <p className="mb-2">{experience.description}</p>
          <ol>
            {experience.tag.map((tag) => (
              <li
                key={tag}
                className="mr-4 inline-block rounded-lg bg-neutral-800 px-3 py-1 text-base"
              >
                {tag}
              </li>
            ))}
          </ol>
        </div>
      </a>
    </li>
  ));

  return (
    <section className="flex min-h-screen items-center justify-center p-8 lg:p-20">
      <div className="max-w-5xl">
        <h1 className="mb-8 text-5xl font-bold text-neutral-300">Experience</h1>
        <ol>{experienceElements}</ol>
        <div></div>
      </div>
    </section>
  );
}
