"use client";

import { useState } from "react";
import { useAuthStore } from "../../hooks";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

type FormDataProps = {
  email: string;
  password: string;
};

const defaultFormData: FormDataProps = {
  email: "",
  password: "",
};

export function AuthModal() {
  const { isAuth, isLoading, login } = useAuthStore();
  const [formData, setFormData] = useState<FormDataProps>(defaultFormData);
  const router = useRouter();

  function redirectToHomeHandlerClick() {
    router.push("/");
  }

  const updateFormData = <T extends keyof FormDataProps>(
    formProp: T,
    value: FormDataProps[T]
  ) => {
    setFormData((prevState) => ({ ...prevState, [formProp]: value }));
  };

  async function formHandlerSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await login(formData);
    if (isAuth) {
      setFormData(defaultFormData);
    }
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-all delay-300 ${
        isAuth ? "translate-y-full opacity-0 hidden" : "visible"
      }`}
    >
      <div className="bg-white w-11/12 max-w-96 p-6 rounded-lg shadow-lg relative">
        {/* Título */}
        <h2 className="text-2xl font-semibold text-center mb-4">
          <div
            className="absolute left-0 top-0 p-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={redirectToHomeHandlerClick}
          >
            <FaLongArrowAltLeft color="black" />
          </div>
          Autenticação
        </h2>

        {/* Formulário */}
        <form className="space-y-4" onSubmit={formHandlerSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              className="input"
              onChange={(event) => updateFormData("email", event.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              className="input"
              onChange={(event) =>
                updateFormData("password", event.target.value)
              }
              required
            />
          </div>
          <div className="w-full flex">
            <button type="submit" className="button blue flex-1">
              {isLoading ? "Entrando..." : "Entrar"}
            </button>
          </div>
        </form>

        {/* Link para Registro */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Não tem uma conta?{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              alert("Redirecionar para página de registro!");
            }}
          >
            Registre-se
          </a>
        </p>
      </div>
    </div>
  );
}
