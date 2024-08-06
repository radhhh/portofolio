export default function Header() {
  return (
    <div className="fixed left-0 top-0 flex w-[100%] bg-neutral-900 p-4 justify-between align-middle">
      <div>
        <h1 className="text-3xl">Radhya CK</h1>
      </div>
      <nav className="flex align-middle gap-4 text-xl">
        <button>About</button>
        <button>Experience</button>
        <button>Works</button>
        <button>Contact</button>
      </nav>
    </div>
  );
}
