import { GoogleOAuthProvider } from "@react-oauth/google";

export const withGoogleAuthProvider = (children: React.ReactNode) => (
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
    {children}
  </GoogleOAuthProvider>
);
