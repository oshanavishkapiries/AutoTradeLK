// src/pages/Login.tsx
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../services/authService";
import { useAuthStore } from "../store/authStore";

const Login = () => {
  const setAuth = useAuthStore((s) => s.setAuth);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-10">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          try {
            const idToken = credentialResponse.credential;
            if (!idToken) throw new Error("No ID token returned from Google");
            const result = await loginWithGoogle(idToken);

            console.log("Login result:", result.user, result.accessToken);
            setAuth(result.user, result.accessToken);
            
            navigate("/");


            console.log("Login successful", result);
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
    </div>
  );
};

export default Login;
