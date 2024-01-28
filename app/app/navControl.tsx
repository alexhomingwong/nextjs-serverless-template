"use client";

import { AuthContext } from "@/providers/authProvider";
import { signOut } from "@aws-amplify/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useContext } from "react";

export const NavControl = () => {
  const { user } = useContext(AuthContext);

  return user?.email ? (
    <>
      <div>Hi {user.email}</div>

      <button
        onClick={() => {
          signOut();
          redirect("/");
        }}
      >
        Sign out
      </button>
    </>
  ) : (
    <Link href="/auth">Sign in</Link>
  );
};
