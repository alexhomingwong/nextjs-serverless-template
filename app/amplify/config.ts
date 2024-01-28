if (
  !process.env.NEXT_PUBLIC_COGNITO_USERPOOL_ID ||
  !process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID
) {
  throw new Error("Missing Cognito settings");
}

export const config = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USERPOOL_ID,
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
    },
  },
};
