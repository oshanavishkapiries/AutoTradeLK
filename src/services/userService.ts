import axiosClient from "./axiosClient";

export const fetchUserProfile = async () => {
  const res = await axiosClient.get("/me");
  return res.data;
};
