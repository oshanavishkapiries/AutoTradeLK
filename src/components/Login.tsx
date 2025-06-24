import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../services/authService";
import { useAuthStore } from "../store/authStore";

const Login = () => {
  const setAuth = useAuthStore((s) => s.setAuth);
  const navigate = useNavigate();

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        try {
          const idToken = credentialResponse.credential;
          if (!idToken) throw new Error("No ID token returned from Google");
          const result = await loginWithGoogle(idToken);
          setAuth(result.user, result.token);
          navigate("/");
        } catch (err) {
          console.error("Login failed", err);
        }
      }}
      onError={() => {
        console.error("Google Login Failed");
      }}
      width="100%"
    />
  );
};

export default Login;
