export const config = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USERPOOL_ID,
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
    },
  },
};
