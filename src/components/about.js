import Image from "next/image";
import profilePicture from "../../public/profile.jpg";

export default function AboutPage() {
  return (
    <section className="flex min-h-screen items-center justify-center p-20">
      <div className="max-w-5xl">
        <h1 className="mb-4 text-5xl text-neutral-300 font-bold">About</h1>
        <div className="flex items-center gap-8">
          <div className="flex-auto text-2xl">
            <p className="mb-2">
              I&apos;m a <strong>freshman</strong> student in{" "}
              <strong>Computer Science</strong> program in{" "}
              <strong>Universitas Indonesia (UI)</strong> with a great interest
              in everything related to computers.
            </p>
            <p className="mb-2">
              Coming from a <strong>Competitive Programming</strong> background,
              I started learning
              <strong> Web Development</strong> in 2023. Over the past two
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
              className="max-h-64 max-w-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
