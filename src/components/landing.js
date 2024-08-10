import { NavButton } from "./component";

export default function LandingPage() {
  return (
    <section
      className="flex min-h-screen items-center p-8 lg:p-20"
      id="landing"
    >
      <div>
        <div className="mb-4 text-hero">
          <h1 className="mb-2 font-bold leading-none text-neutral-300">
            Radhya CK.
          </h1>
          <h2 className="font-bold leading-none">Fullstack Web Developer.</h2>
        </div>
        <p className="mb-8 text-2xl">I bring visions to life through code.</p>
        <NavButton
          target="contact"
          className="rounded-lg border border-s border-solid border-neutral-300 p-2 text-2xl text-neutral-300 hover:scale-105 active:scale-105"
        >
          Contact Me!
        </NavButton>
      </div>
    </section>
  );
}
