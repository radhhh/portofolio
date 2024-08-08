import WorkElements from "./workElements.js";
import { promises as fs } from "fs";

export default async function WorkPage() {
  const works = JSON.parse(
    await fs.readFile(process.cwd() + "/public/work.json", "utf-8"),
  );

  return (
    <section
      className="flex min-h-screen items-center justify-center p-20"
      id="work"
    >
      <div className="max-w-5xl">
        <h1 className="mb-8 text-5xl font-bold text-neutral-300">Work</h1>
        <ul className="grid min-w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
          <WorkElements works={works} />
        </ul>
      </div>
    </section>
  );
}
