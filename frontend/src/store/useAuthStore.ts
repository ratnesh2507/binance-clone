import { create } from "zustand";

type User = {
  id: string;
  username: string;
  email: string;
};

type AuthStore = {
  user: User | null;
  checking: boolean;
  sessionError: string;
  setUser: (user: User | null) => void;
  setChecking: (checking: boolean) => void;
  setSessionError: (message: string) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  checking: true,
  sessionError: "",
  setUser: (user) => set({ user, sessionError: "" }),
  setChecking: (checking) => set({ checking }),
  setSessionError: (message) => set({ sessionError: message }),
}));
