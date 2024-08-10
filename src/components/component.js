"use client";
export function NavButton({
  target,
  children,
  callback = () => null,
  className = null,
}) {
  return (
    <button
      className={className}
      onMouseDown={(e) => {
        document.getElementById(target).scrollIntoView({ behavior: "smooth" });
        callback();
      }}
    >
      {children}
    </button>
  );
}
