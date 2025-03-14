import { AuthLayout } from "../layouts/AuthLayout";
import imageRegister from "@/assets/images/Coaches-bro.svg";

export const RegisterPage = () => {
  return (
    <AuthLayout
      title="Registrarse"
      description="Regístrate para acceder a la aplicación y poder disfrutar de todos los beneficios que tenemos para ti."
      image={imageRegister}
    >
      <form className="flex flex-col gap-y-4 mt-4">
        <div className="max-w-2xl">
          <label
            htmlFor="input-label"
            className="block text-base font-medium mb-2"
          >
            Nombre completo
          </label>
          <input
            type="text"
            className="py-3.5 sm:py-3 px-4 block w-full border border-primary rounded-lg sm:text-sm disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Luis Perez..."
          />
        </div>

        <div className="max-w-2xl">
          <label
            htmlFor="input-label"
            className="block text-base font-medium mb-2"
          >
            Telefono
          </label>
          <input
            type="number"
            className="py-3.5 sm:py-3 px-4 block w-full border border-primary rounded-lg sm:text-sm disabled:opacity-50 disabled:pointer-events-none"
            placeholder="300-333-4444..."
          />
        </div>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
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
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="rounded-lg"
            />
            <label htmlFor="terms" className="text-sm font-medium">
              Acepto los{" "}
              <a className="text-secondary hover:underline" href="#">
                términos y condiciones
              </a>
            </label>
          </div>

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
          ¿Ya tienes una cuenta?{" "}
          <a className="text-secondary hover:underline" href="#">
            Ingresa
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};
