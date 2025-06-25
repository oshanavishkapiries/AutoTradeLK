import { create } from 'zustand';

type FormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  userType: 'buyer' | 'seller' | 'both' | 'leasing';
  agreeToTerms: boolean;
  showPassword: boolean;
  showConfirmPassword: boolean;
};

type SignUpStore = {
  formData: FormData;
  updateField: (name: keyof FormData, value: string | boolean) => void;
  togglePasswordVisibility: () => void;
  toggleConfirmPasswordVisibility: () => void;
  resetForm: () => void;
};

export const useSignUpStore = create<SignUpStore>((set) => ({
  formData: {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'buyer',
    agreeToTerms: false,
    showPassword: false,
    showConfirmPassword: false,
  },
  updateField: (name, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
    })),
  togglePasswordVisibility: () =>
    set((state) => ({
      formData: {
        ...state.formData,
        showPassword: !state.formData.showPassword,
      },
    })),
  toggleConfirmPasswordVisibility: () =>
    set((state) => ({
      formData: {
        ...state.formData,
        showConfirmPassword: !state.formData.showConfirmPassword,
      },
    })),
  resetForm: () =>
    set(() => ({
      formData: {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        userType: 'buyer',
        agreeToTerms: false,
        showPassword: false,
        showConfirmPassword: false,
      },
    })),
}));
