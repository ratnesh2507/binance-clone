import { Link } from "react-router";
type AuthFormProps = {
  mode: "login" | "signup";
};
export default function AuthForm({ mode }: AuthFormProps) {
  const isSignup = mode === "signup";
  return (
    <section className="panel mx-auto max-w-md">
      <h1 className="page-title">
        {isSignup ? "Create an account" : "Log in"}
      </h1>
      <form className="mt-7 grid gap-5" onSubmit={(e) => e.preventDefault()}>
        {isSignup && (
          <label className="field">
            Username
            <input
              name="username"
              autoComplete="username"
              minLength={2}
              maxLength={30}
              required
            />
          </label>
        )}
        <label className="field">
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>

        <label className="field">
          Password
          <input
            name="password"
            type="password"
            autoComplete={isSignup ? "new-password" : "current-password"}
            minLength={8}
            maxLength={72}
            required
          />
        </label>

        <button type="submit" className="btn-primary">
          {isSignup ? "Create account" : "Log in"}
        </button>
      </form>
      <p className="mt-5 text-sm text-zinc-400">
        {isSignup ? "Already have an account? " : "New to Exchange? "}
        <Link
          className="text-zinc-100 underline"
          to={isSignup ? "/login" : "/signup"}
        >
          {isSignup ? "Log in" : "Sign up"}
        </Link>
      </p>
    </section>
  );
}
