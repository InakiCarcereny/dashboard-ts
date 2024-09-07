"use client";

import { X } from "@/app/icons/x";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCompany } from "@/app/(routes)/dashboard/(routes)/companies/context/company";
import { type Company } from "@/app/(routes)/dashboard/(routes)/companies/context/company";

type FormValues = {
  name: string;
  logo: string;
  revenue: number;
  size: string;
  type: string;
  country: string;
};

export default function Companies() {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState } = useForm<FormValues>();

  const { errors } = formState;

  const { createCompany, companies } = useCompany();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = handleSubmit(async (data) => {
    createCompany(data);
  });
  return (
    <section className="flex flex-col gap-4 w-full h-full">
      <div
        className={`flex items-center justify-between ${open ? "hidden" : ""}`}
      >
        <h3 className="font-semibold text-xl dark:text-white text-dark">
          Companies
        </h3>
        <button
          onClick={handleOpen}
          className="bg-blue-600 px-2 py-2 rounded-xl cursor-pointer font-semibold dark:text-white text-black"
        >
          Add company
        </button>
      </div>

      <div>
        {companies.map((company: Company) => {
          return (
            <div key={company._id}>
              <span>{company.name}</span>
              <span>{company.logo}</span>
              <span>{company.revenue}</span>
              <span>{company.size}</span>
              <span>{company.type}</span>
              <span>{company.country}</span>
            </div>
          );
        })}
      </div>

      {open && (
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
      )}
    </section>
  );
}
