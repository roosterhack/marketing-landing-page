export const Navbar = () => {
  return (
    <nav className="navbar py-6 px-28 flex items-center justify-between w-full">
      <h1>Abstractly</h1>
      <ul className="flex gap-8">
        <li>About</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>

      <div>
        <button className="mr-4">Learn more</button>
        <button>See pricing</button>
      </div>
    </nav>
  );
};
