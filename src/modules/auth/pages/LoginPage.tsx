import imageLogin from "@/assets/images/Game analytics-bro.svg";
import { AuthLayout } from "../layouts/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout
      title="Ingresar"
      description="Inicia sesión para acceder a la aplicación y poder disfrutar de todos los beneficios que tenemos para ti."
      image={imageLogin}
    >
      <form className="flex flex-col gap-y-4 mt-4">
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

        <div className="max-w-2xl">
          <label
            htmlFor="input-label"
            className="block text-base font-medium mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            className="py-3.5 sm:py-3 px-4 block w-full border border-primary rounded-lg sm:text-sm disabled:opacity-50 disabled:pointer-events-none"
            placeholder="************"
          />
        </div>

        <div className="flex flex-col gap-y-4">
          <a className="text-secondary text-end hover:underline" href="#">
            ¿Olvidaste tu contraseña?
          </a>

          <button
            type="button"
            className="w-full py-3 px-4 gap-x-2 text-sm font-medium rounded-lg cursor-pointer border border-transparent bg-secondary text-white hover:opacity-80 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
          >
            Ingresar
          </button>
        </div>
      </form>

      <div className="mt-4 flex justify-center">
        <p className="text-sm text-gray-600">
          ¿No tienes una cuenta?{" "}
          <a className="text-secondary hover:underline" href="#">
            Regístrate
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};
