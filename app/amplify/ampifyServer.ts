import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { config } from "@/amplify/config";

export const { runWithAmplifyServerContext } = createServerRunner({
  config,
});
