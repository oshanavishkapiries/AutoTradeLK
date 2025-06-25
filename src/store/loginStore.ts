import { create } from 'zustand';

interface LoginState {
  email: string;
  password: string;
  rememberMe: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setRememberMe: (remember: boolean) => void;
  resetForm: () => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  email: '',
  password: '',
  rememberMe: false,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setRememberMe: (rememberMe) => set({ rememberMe }),
  resetForm: () =>
    set({
      email: '',
      password: '',
      rememberMe: false,
    }),
}));
