"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext<null>(null);

export default function Provider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [session, setSession] = useState<null>(null);

  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
}
