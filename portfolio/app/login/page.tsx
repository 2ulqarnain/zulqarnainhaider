import Link from "next/link";

function LoginPage() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 content-end items-center h-screen">
      <h1 className="mx-auto text-orange-400 text-3xl font-dosis font-semibold uppercase">
        Login Form
      </h1>
      <form
        id="login-form"
        className="flex flex-col mx-auto text-zinc-400 gap-y-3 leading-[0.7]"
      >
        <label>Email</label>
        <input
          type="email"
          placeholder="Your Email"
          className="pl-2 py-1 rounded text-purple-400 bg-blackm focus:outline-orange-400 outline-zinc-600 bg-transparent outline"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          className="pl-2 py-1 rounded text-orange-400 bg-blackm focus:outline-purple-400 outline-zinc-600 bg-transparent outline"
        />
        <button type="submit" form="login-form" className="button-primary">
          Login
        </button>
        <p className="w-fit mx-auto">Or</p>
        <Link href="/signup">
          <button className="button-secondary w-full">Signup</button>
        </Link>
      </form>
    </div>
  );
}

export default LoginPage