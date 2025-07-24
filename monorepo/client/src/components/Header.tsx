export function Header() {
  return (
    <header className="font-bold sticky top-0 ">
      <h1 className="pl-3 bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.55)] to-amber-500 bg-clip-text text-transparent backdrop-blur-md z-10">
        Quattro- Blog
      </h1>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-700 to-transparent" />
    </header>
  );
}
