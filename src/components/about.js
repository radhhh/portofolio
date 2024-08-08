import Image from "next/image";
import profilePicture from "../../public/static/profile.jpg";

export default function AboutPage() {
  return (
    <section
      className="flex min-h-screen items-center justify-center p-8 md:p-14 lg:p-20"
      id="about"
    >
      <div className="max-w-5xl">
        <h1 className="mb-4 text-center text-5xl font-bold text-neutral-300 md:text-left">
          About
        </h1>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex-auto text-center text-xl md:text-left lg:text-2xl">
            <p className="mb-2">
              I&apos;m a <strong>freshman</strong> student in{" "}
              <strong>Computer Science</strong> program in{" "}
              <strong>Universitas Indonesia (UI)</strong> with a great interest
              in everything related to computers.
            </p>
            <p className="mb-2">
              Coming from a <strong>competitive programming</strong> background,
              I started learning
              <strong> web development</strong> in 2023. Over the past two
              years, I&apos;ve been developing websites for{" "}
              <strong>various projects</strong>, both personal and professional
              ones.
            </p>
            <p>
              My goal is to continue <strong>expanding my skills</strong>{" "}
              through building projects and volunteering in events.
            </p>
          </div>
          <div className="">
            <Image
              src={profilePicture}
              alt="Profile Picture"
              className="max-h-96 max-w-96 md:max-h-64 md:max-w-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
