import { promises as fs } from "fs";
import Image from "next/image";

export default async function WorkPage() {
  const works = JSON.parse(
    await fs.readFile(process.cwd() + "/public/work.json", "utf-8"),
  );
  const workElements = works.map((work) => (
    <li
      key={work.name}
      className="max-w-96 rounded-lg border border-solid border-neutral-700 p-6 text-center"
    >
      <Image
        src={`/static/${work.imgName}.png`}
        alt="Image"
        width={1920}
        height={1080}
        className="mb-4 rounded-md"
      />
      <h2 className="mb-1 text-2xl text-neutral-300">{work.name}</h2>
      <p className="text-lg">{work.description}</p>
    </li>
  ));
  return (
    <section className="flex min-h-screen items-center justify-center p-20">
      <div className="max-w-5xl">
        <h1 className="mb-8 text-center text-5xl font-bold text-neutral-300">
          Work
        </h1>
        <ul className="grid min-w-full gap-8 lg:grid-cols-3">{workElements}</ul>
      </div>
    </section>
  );
}
