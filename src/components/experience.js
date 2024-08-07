import { promises as fs } from "fs";

export default async function ExperiencePage() {
  const experiences = JSON.parse(
    await fs.readFile(process.cwd() + "/public/experience.json", "utf-8"),
  );
  const experienceElements = experiences.map((experience) => {
    return (<li key={experience.name}>
      <a href={experience.link} className="flex mb-6">
        <div className="flex-1 text-lg">
          {experience.timespan}
        </div>
        <div className="flex-[4] text-lg">
          <h2 className="text-2xl text-neutral-300 mb-1">{experience.role} • {experience.name}</h2>
          <p className="mb-2">{experience.description}</p>
          <ol>
            {experience.tag.map(tag => 
              <li key={tag} className="inline-block mr-4 px-3 py-1 bg-neutral-800 text-base rounded-lg">{tag}</li>
            )}
          </ol>
        </div>
      </a>
    </li>);
  });

  return (
    <section className="flex min-h-screen items-center justify-center p-20">
      <div className="max-w-5xl">
        <h1 className="mb-8 text-5xl text-neutral-300 font-bold">Experience</h1>
        <ol>{experienceElements}</ol>
        <div></div>
      </div>
    </section>
  );
}
