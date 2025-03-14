interface AuthLayoutProps {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  description: string;
  image: string;
}

export const AuthLayout = ({
  children,
  description,
  image,
  title,
}: AuthLayoutProps) => {
  return (
    <div className="container mx-auto p-2 rounded-lg flex flex-col justify-center items-center md:grid md:grid-cols-2 md:gap-x-4 md:min-h-dvh">
      <div className="border border-primary rounded-lg p-2 w-full max-w-2xl lg:p-8">
        <figure className="flex justify-center">
          <img
            className="size-full rounded-lg md:size-72"
            src="/logo.webp"
            alt=""
          />
        </figure>

        <div>
          <h1 className="text-4xl text-secondary font-semibold mt-4">
            {title}
          </h1>

          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {children}
      </div>

      <figure className="hidden size-full md:flex justify-center items-center">
        <img className="w-full" src={image} alt={`${title} game Img`} />
      </figure>
    </div>
  );
};
