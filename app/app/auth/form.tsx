"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { redirect } from "next/navigation";

export const Form = () => {
  // Should navigate to previous page if came from a protected page redirect
  return <Authenticator>{() => redirect("/")}</Authenticator>;
};
