"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

type Props = {
  className?: string;
  callBackUrl?: string;
};

const LogIn = (props: Props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    setIsLoading(true);

    try {
      await signIn("credentials", {
        username: username,
        password: password,
        redirect: true,
        callbackUrl: props.callBackUrl ?? "http://localhost:3000/dashboard",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={props.className}>
      <div className="card mx-auto flex w-full max-w-sm flex-col gap-6 px-12 py-10 bg-slate-50">
        <div className="flex flex-col items-center">
          <img src="/login-logo.svg" alt="admin" className="h-28 w-28" />
          {/* <h1 className="text-3xl font-bold text-blue-600">Login</h1> */}
          <p className="text-sm  text-slate-800">
            Login to access your account
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <div className="form-field">
              <label
                className="form-label  text-slate-800 font-bold"
                htmlFor="username"
              >
                Username
              </label>

              <input
                placeholder="Type here "
                type="text"
                className="input input-ghost-primary text-slate-800 max-w-full"
                value={username}
                onChange={handleChangeUsername}
              />
              <label className="form-label">
                <span className="form-label-alt text-slate-400">
                  Please enter a valid username.
                </span>
              </label>
            </div>
            <div className="form-field">
              <label
                className="form-label  text-slate-800 font-bold"
                htmlFor="password"
              >
                Password
              </label>
              <div className="form-control">
                <input
                  placeholder="Type here"
                  id="password"
                  type="password"
                  className="input input-ghost-primary text-slate-800 max-w-full"
                  value={password}
                  onChange={handleChangePassword}
                />
              </div>
            </div>

            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button
                  type="submit"
                  className="btn btn-primary hover:bg-sky-500 w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 border-t-2 border-slate-50 rounded-full animate-spin"></div>
                      <span className="ml-2">Logging in...</span>
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
