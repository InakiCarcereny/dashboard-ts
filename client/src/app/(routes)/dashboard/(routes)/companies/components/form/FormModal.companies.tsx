import { useForm } from "react-hook-form";
import { useCompany } from "../../context/company";
import { X } from "@/app/icons/x";
import { toast } from "sonner";

type FormValues = {
  name: string;
  logo: string;
  revenue: string;
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
    const formData = new FormData();
    formData.append("logo", data.logo[0]);
    formData.append("name", data.name);
    formData.append("revenue", data.revenue);
    formData.append("size", data.size);
    formData.append("type", data.type);
    formData.append("country", data.country);
    createCompany(formData);
    setOpen(false);
    toast.success("Company created successfully");
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="z-40 w-[440px] h-[890px] absolute rounded-[4px] border bg-white border-zinc-200 px-8 py-4">
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 cursor-pointer hover:bg-zinc-100 px-1 py-1 rounded-[4px]"
        >
          <X />
        </button>
        <h3 className="font-semibold text-xl dark:text-black">Add company</h3>

        <div>
          <input
            type="file"
            accept="image/*"
            id="logo"
            className="w-full"
            {...register("logo", {
              required: "File is required",
            })}
          />
        </div>

        {errors.logo && (
          <span className="text-red-500 text-base font-semibold">
            {errors.logo.message}
          </span>
        )}

        <div className="flex flex-col gap-1">
          <label className="text-black" htmlFor="name">
            Name
          </label>
          <div className="flex flex-col gap-4">
            <input
              className="w-full rounded-[4px] px-2 py-1 border dark:bg-white border-zinc-200 text-black"
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
          <label className="text-black" htmlFor="revenue">
            Total Revenue
          </label>
          <div className="flex flex-col gap-4">
            <input
              className="w-full rounded-[4px] px-2 py-1 border dark:bg-white border-zinc-200 text-black"
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
          <label className="text-black" htmlFor="company">
            Company size
          </label>
          <div className="flex flex-col gap-4">
            <select
              className="w-full rounded-[4px] px-2 py-1 border dark:bg-white border-zinc-200 text-black"
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
          <label className="text-black" htmlFor="type">
            Type
          </label>
          <div className="flex flex-col gap-4">
            <select
              className="w-full rounded-[4px] px-2 py-1 border dark:bg-white border-zinc-200 text-black"
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
          <label className="text-black" htmlFor="country">
            Country
          </label>
          <div className="flex flex-col gap-4">
            <select
              className="w-full rounded-[4px] px-2 py-1 border dark:bg-white border-zinc-200 text-black"
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
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
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
          className="bg-blue-600 w-full px-4 py-3 hover:rounded-xl text-white font-semibold mt-6 duration-200"
        >
          Create
        </button>
      </form>
    </div>
  );
}
