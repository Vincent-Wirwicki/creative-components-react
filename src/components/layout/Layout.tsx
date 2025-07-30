import NavBar from "./nav/NavBar";

export default function Layout() {
  return (
    <main className="absolute top-0 left-0 w-screen h-screen bg-neutral-950 text-neutral-200 flex justify-center items-center py-10">
      <div className="relative z-50 w-3/5 h-full border overflow-y-auto flex ">
        <NavBar />
      </div>
    </main>
  );
}
