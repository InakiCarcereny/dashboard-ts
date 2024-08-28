import { FormValues } from "@/app/models/formValues";
import { useForm } from "react-hook-form";
import { registerRequest } from "@/app/interceptors/auth";

export function Form() {
  const { register, handleSubmit, formState } = useForm<FormValues>();

  const { errors } = formState;

  const onSubmit = handleSubmit(async (data) => {
    registerRequest(data);
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-4 mt-8 w-9/12" onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="block mt-4 text-sm font-semibold text-zinc-600"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="border rounded-xl border-zinc-500 px-2 py-3 focus:outline-none focus:border-blue-600 text-sm"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />

        {errors.email && (
          <span>
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="username"
          className="block mt-4 text-sm font-semibold text-zinc-600"
        >
          Username
        </label>
        <input
          type="username"
          id="username"
          className="border rounded-xl border-zinc-500 px-2 py-3 focus:outline-none focus:border-blue-600 text-sm"
          {...register("username", {
            required: "Username is required",
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "Invalid username",
            },
          })}
        />

        {errors.username && (
          <span>
            <span className="text-red-500 text-sm">
              {errors.username.message}
            </span>
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="lastname"
          className="block mt-4 text-sm font-semibold text-zinc-600"
        >
          Lastname
        </label>
        <input
          type="lastname"
          id="lastname"
          className="border rounded-xl border-zinc-500 px-2 py-3 focus:outline-none focus:border-blue-600 text-sm"
          {...register("lastname", {
            required: "Lastname is required",
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "Invalid lastname",
            },
          })}
        />

        {errors.lastname && (
          <span>
            <span className="text-red-500 text-sm">
              {errors.lastname.message}
            </span>
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className="block mt-4 text-sm font-semibold text-zinc-600"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border rounded-xl border-zinc-500 px-2 py-3 focus:outline-none focus:border-blue-600 text-sm"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "Invalid password",
            },
          })}
        />

        {errors.password && (
          <span>
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          </span>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 px-4 py-2 hover:rounded-xl duration-200 text-white font-semibold mt-6"
      >
        Register
      </button>
    </form>
  );
}
