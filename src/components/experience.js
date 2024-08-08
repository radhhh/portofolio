import styles from "./css/experience.module.css";

const experiences = [
  {
    name: "Padzcode",
    role: "Founder",
    timespan: "2023 - 2024",
    description:
      "Founded Padzcode, an extracurricular for students interested in programming, focusing at web development. Taught web development basics to 30+ students. Co-developed extracurricular website for an exhibition.",
    tag: ["HTML", "CSS", "JS"],
    link: "https://padzcode-website.vercel.app",
  },
  {
    name: "Pustakita",
    role: "Co-Founder",
    timespan: "Aug - Dec 2023",
    description:
      "Co-founded Pustakita as a charity organization concerned in education and literacy. Developed and maintained pustakita.id website, a book-sharing platform similar to a digital library for people in Yogyakarta region.",
    tag: ["WordPress", "WooCommerce"],
    link: "https://pustakita.id",
  },
  {
    name: "BKGN UGM 2023",
    role: "Web Developer",
    timespan: "Aug - Sep 2023",
    description:
      "Developed and maintained event website. Handled the registration of 1000+ participants in 2 batches. Filtered, processed, and verified the data in under two days. Migrated the entire registration system from Forminator to Woocommerce overnight.",
    tag: ["WordPress", "WooCommerce", "Forminator"],
    link: "https://bkgnugm.id",
  },
];

export default function ExperiencePage() {
  const experienceElements = experiences.map((experience) => (
    <li key={experience.name} className={"mb-4 " + styles.content}>
      <a href={experience.link} className={"flex flex-col p-4 md:flex-row"}>
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
    <section
      className="flex min-h-screen items-center justify-center p-8 lg:p-20"
      id="experience"
    >
      <div className="max-w-5xl">
        <h1 className="mb-8 text-5xl font-bold text-neutral-300">Experience</h1>
        <ol className={styles.container}>{experienceElements}</ol>
        <div></div>
      </div>
    </section>
  );
}
