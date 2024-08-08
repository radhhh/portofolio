import WorkElements from "./workElements.js";

const works = [
  {
    id: "obrolin",
    name: "Obrolin",
    description:
      "GPT-powered website to assist people with dyslexia. Supports voice input and TTS.",
    link: "https://obrolin-app.netlify.app",
  },
  {
    id: "tic-tac-toe",
    name: "Tic-Tac-Toe",
    description:
      "Tic-tac-toe game written using vanilla JS. With various AI levels.",
    link: "https://radhhh.github.io/tic-tac-toe",
  },
  {
    id: "web-calculator",
    name: "Web Calculator",
    description: "Online Calculator with keyboard support",
    link: "https://radhhh.github.io/web-calculator",
  },
];

export default function WorkPage() {
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
