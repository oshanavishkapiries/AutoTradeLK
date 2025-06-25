
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = useAuthStore((s) => s.token);
  return token ? children : <Navigate to="/login" />;
};
