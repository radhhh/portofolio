export default function Header() {
  return (
    <header className="fixed left-0 top-0 flex w-[100%] items-center justify-between bg-neutral-800 p-6 text-neutral-300">
      <div>
        <h1 className="text-3xl">CK</h1>
      </div>
      <nav className="flex gap-6 align-middle text-xl">
        <button>About</button>
        <button>Experience</button>
        <button>Works</button>
        <button>Contact</button>
      </nav>
    </header>
  );
}
