export default function NavBar() {
  return (
    <nav className="w-1/4 border-y border-neutral-800    px-2">
      <div>
        A collection of creative components, made for react, using animation library
      </div>
      <div>
        <h3 className="uppercase font-light pb-2 text-neutral-500">Letters</h3>
        <ul className="border-l font-bold text-xs pl-2 flex flex-col gap-2 uppercase">
          <li>Image move and translate</li>
          <li>stagger</li>
        </ul>
      </div>
    </nav>
  );
}
