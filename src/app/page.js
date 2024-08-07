import Header from "../components/header";
import LandingPage from "../components/landing";
import AboutPage from "../components/about";

export default function Page() {
  return (
    <div className="bg-neutral-900 text-neutral-500">
      <Header />
      <main>
        <LandingPage />
        <AboutPage />
      </main>
    </div>
  );
}
