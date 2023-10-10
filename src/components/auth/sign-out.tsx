"use client";

import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/api/auth/login" })}>
      Sign Out
    </button>
  );
};
export default SignOut;
