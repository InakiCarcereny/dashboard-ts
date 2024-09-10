import { useForm } from "react-hook-form";
import { useCompany } from "../../context/company";
import { X } from "@/app/icons/x";

type FormValues = {
  name: string;
  logo: string;
  revenue: number;
  size: string;
  type: string;
  country: string;
};

type State = {
  setOpen: (value: boolean) => void;
};

export function FormModal({ setOpen }: State) {
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const { createCompany } = useCompany();

  const { errors } = formState;

  const onSubmit = handleSubmit(async (data) => {
    createCompany(data);
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="z-40 w-full h-[875px] bg-zinc-700/40 relative rounded-xl px-8 py-4">
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <X />
        </button>
        <h3 className="font-semibold text-xl text-blue-600">Add company</h3>

        <input
          type="file"
          className="rounded-xl bg-white w-[250px] h-[200px]"
          {...register("logo", {
            required: "Logo is required",
          })}
        />

        {errors.logo && (
          <span className="text-red-500 text-base font-semibold">
            {errors.logo.message}
          </span>
        )}

        <div className="flex flex-col gap-1">
          <label className="text-blue-600" htmlFor="name">
            Name
          </label>
          <div className="flex items-center gap-4">
            <input
              className="w-[30%] bg-white rounded-xl px-2 py-1 border border-zinc-400 text-black"
              type="text"
              id="name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <span className="text-red-500 text-base font-semibold">
                {errors.name.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-blue-600" htmlFor="revenue">
            Total Revenue
          </label>
          <div className="flex items-center gap-4">
            <input
              className="w-[30%] bg-white rounded-xl px-2 py-1 border border-zinc-400 text-black"
              type="text"
              id="revenue"
              defaultValue="$"
              {...register("revenue", {
                required: "Revenue is required",
              })}
            />
            {errors.revenue && (
              <span className="text-red-500 text-base font-semibold">
                {errors.revenue.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-blue-600" htmlFor="company">
            Company size
          </label>
          <div className="flex items-center gap-4">
            <select
              className="w-[30%] bg-white rounded-xl px-2 py-1 border border-zinc-400 text-black"
              id="company"
              {...register("size", {
                required: "Company size is required",
              })}
            >
              <option value=""></option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="Big">Big</option>
            </select>
            {errors.size && (
              <span className="text-red-500 text-base font-semibold">
                {errors.size.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-blue-600" htmlFor="type">
            Type
          </label>
          <div className="flex items-center gap-4">
            <select
              className="w-[30%] bg-white rounded-xl px-2 py-1 border border-zinc-400 text-black"
              id="type"
              {...register("type", {
                required: "Type is required",
              })}
            >
              <option value=""></option>
              <option value="local">Local</option>
              <option value="national">National</option>
              <option value="multinational">Multinational</option>
            </select>
            {errors.type && (
              <span className="text-red-500 text-base font-semibold">
                {errors.type.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-blue-600" htmlFor="country">
            Country
          </label>
          <div className="flex items-center gap-4">
            <select
              className="w-[30%] bg-white rounded-xl px-2 py-1 border border-zinc-400 text-black"
              id="country"
              {...register("country", {
                required: "Country is required",
              })}
            >
              <option value=""></option>
              <option value="Japan">Japan</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Argentina">Argentina</option>
            </select>
            {errors.country && (
              <span className="text-red-500 text-base font-semibold">
                {errors.country.message}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 w-[15%] px-4 py-3 rounded-xl text-white font-semibold mt-6"
        >
          Create
        </button>
      </form>
    </div>
  );
}
