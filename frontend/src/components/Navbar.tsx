import { Link } from "react-router";
export default function Navbar() {
  return (
    <header className="border-b border-zinc-800">
      <nav className="shell flex min-h-16 flex-wrap items-center gap-5 py-3">
        <Link to="/" className="text-xl font-bold tracking-tight">
          Exchange<span className="text-lime-300">.</span>
        </Link>

        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/stocks" className="nav-link">
          Stocks
        </Link>

        <div className="ml-auto flex flex-wrap items-center gap-4">
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/signup" className="btn-primary">
            Signup
          </Link>
        </div>
      </nav>
    </header>
  );
}
