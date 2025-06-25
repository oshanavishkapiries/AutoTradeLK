import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "@tanstack/react-router";
import { loginWithGoogle } from "../../services/authService";
import { useAuthStore } from "../../store/authStore";
import { toast } from "sonner"


const GoogleAuth = () => {
  const setAuth = useAuthStore((s) => s.setAuth);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-2">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          try {
            const idToken = credentialResponse.credential;
            if (!idToken) throw new Error("No ID token returned from Google");
            const result = await loginWithGoogle(idToken);

            console.log("Login result:", result.user, result.accessToken);
            setAuth(result.user, result.accessToken);

            navigate({ to: "/" });

            console.log("Login successful", result);
            toast("Log In Complete");
            
            navigate({to: "/"});
          } catch (err) {
            toast.error("Log In Failed");
            console.error("Login failed", err);
          }
        }}
        onError={() => {
          toast.error("Google Login Failed");
          console.error("Google Login Failed");
        }}
        width="100%"
      />
    </div>
  );
};

export default GoogleAuth;
