import { AuthLayout } from "../layouts/AuthLayout";
import imageForgotPassword from "@/assets/images/Forgot password-rafiki.svg";

export const ForgotPassword = () => {
  return (
    <AuthLayout
      title="¿Olvidaste tu contraseña?"
      description="Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña."
      image={imageForgotPassword}
    >
      <div className="mt-5">
        <form>
          <div className="grid gap-y-4">
            <div className="max-w-2xl">
              <label
                htmlFor="input-label"
                className="block text-base font-medium mb-2"
              >
                Correo
              </label>
              <input
                type="email"
                className="py-3.5 sm:py-3 px-4 block w-full border border-primary rounded-lg sm:text-sm disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Correo@producto.com..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 cursor-pointer gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-secondary text-white hover:opacity-80 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
            >
              Restablecer contraseña
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
