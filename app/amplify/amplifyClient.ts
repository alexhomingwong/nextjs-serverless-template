"use client";

import { Amplify } from "aws-amplify";
import { config } from "@/amplify/config";

Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}
