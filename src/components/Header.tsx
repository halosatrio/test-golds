const Header = () => {
  return (
    <header className="sticky top-0 bg-slate-500">
      <div className="max-w-6xl m-auto flex justify-between items-center h-12 w-full pt-10 pb-8 mb-10 px-4">
        <h1 className="font-semibold text-2xl">Characters</h1>
        <nav>
          <ul className="gap-4 hidden sm:flex">
            <li>
              <button>Characters</button>
            </li>
            <li>
              <button>Locations</button>
            </li>
            <li>
              <button>Episodes</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
