import { Link } from "react-router";

export default function Home() {
  return (
    <section className="max-w-2xl py-12 sm:py-20">
      <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
        Exchange<span className="text-lime-300">.</span>
      </h1>

      <p className="mt-5 text-lg text-zinc-400">
        Explore cryptocurrency pairs, price charts, and order books.
      </p>

      <Link to="/stocks" className="btn-primary mt-8">
        Explore markets
      </Link>
    </section>
  );
}
