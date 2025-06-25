import axios from "axios";

export const loginWithGoogle = async (idToken: string) => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/google`, {
    idToken,
  });

  return res.data; 
};

