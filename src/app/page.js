import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import LandingPage from "@/components/landing";
import AboutPage from "@/components/about";
import ExperiencePage from "@/components/experience";
import WorkPage from "@/components/work";
import ContactPage from "@/components/contact";

export default function Page() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="bg-neutral-900 text-neutral-500">
        <LandingPage />
        <AboutPage />
        <ExperiencePage />
        <WorkPage />
        <ContactPage />
      </main>
    </>
  );
}
