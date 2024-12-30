import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthDataProps = { email: string; password: string };

type AuthState = {
  isAuth: boolean;
  isLoading: boolean;
  userData: AuthDataProps | null;
  login: (authData: AuthDataProps) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      isLoading: false,
      userData: null,
      login: async (authData: AuthDataProps) => {
        const delayTime = 1000;
        const defaultAuth = {
          email: "admin@admin.com",
          password: "admin",
        };
        set({ isLoading: true });
        await new Promise<void>((resolve) =>
          setTimeout(() => {
            const isSameEmail = authData.email === defaultAuth.email;
            const isSamePassword = authData.password === defaultAuth.password;

            if (isSameEmail && isSamePassword) {
              set({ isAuth: true, userData: authData });
            } else {
              set({ isAuth: false, userData: null });
            }

            resolve();
          }, delayTime)
        );
        set({ isLoading: false });
      },
      logout: () => {
        set({ isAuth: false, userData: null });
      },
    }),
    {
      name: "auth-store", // Nome da chave no localStorage
      partialize: (state) => ({
        isAuth: state.isAuth,
        userData: state.userData,
      }), // Salva apenas partes do estado
    }
  )
);
