"use client";

import { useEffect } from "react";
import { useEvents } from "../context/events";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export interface FormValues {
  title: string;
  dateInit: string;
  hourInit: string;
  dateEnd: string;
  hourEnd: string;
}

export default function Event({ params }: { params: any }) {
  const { getEvent, updateEvent } = useEvents();
  const router = useRouter();

  const { register, handleSubmit, setValue } = useForm<FormValues>();

  const ID = params.id;

  useEffect(() => {
    async function loadEvent() {
      if (ID) {
        const event = await getEvent(ID);
        setValue("title", event.title);
        setValue("dateInit", event.dateInit);
        setValue("hourInit", event.hourInit);
        setValue("dateEnd", event.dateEnd);
        setValue("hourEnd", event.hourEnd);
      }
    }

    loadEvent();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    updateEvent(ID, data);
    router.push("/dashboard/events");
  });

  return (
    <form
      onSubmit={onSubmit}
      className=" bg-zinc-300 rounded-lg px-4 py-2 w-[300px] min-h-auto flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-black font-semibold text-base">
          Title
        </label>
        <input
          className="bg-white focus:outline-none rounded-xl px-2 py-2 w-full text-sm"
          type="text"
          id="title"
          {...register("title", {
            required: "Title is required",
          })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="dateInit"
          className="text-black font-semibold text-base"
        >
          Date init
        </label>
        <input
          className="bg-white focus:outline-none rounded-xl px-2 py-2 w-full text-sm"
          type="text"
          id="dateInit"
          {...register("dateInit", {
            required: "Date init is required",
          })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="hourInit"
          className="text-black font-semibold text-base"
        >
          Hour init
        </label>
        <input
          className="bg-white focus:outline-none rounded-xl px-2 py-2 w-full text-sm"
          type="text"
          id="hourInit"
          {...register("hourInit", {
            required: "Hour init is required",
          })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="dateEnd" className="text-black font-semibold text-base">
          Date end
        </label>
        <input
          className="bg-white focus:outline-none rounded-xl px-2 py-2 w-full text-sm"
          type="text"
          id="dateEnd"
          {...register("dateEnd", {
            required: "Date end is required",
          })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="hourEnd" className="text-black font-semibold text-base">
          Hour end
        </label>
        <input
          className="bg-white focus:outline-none rounded-xl px-2 py-2 w-full text-sm"
          type="text"
          id="hourEnd"
          {...register("hourEnd", {
            required: "Hour end is required",
          })}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 px-4 py-2 hover:rounded-xl duration-200 text-white font-semibold mt-6"
      >
        Save
      </button>
    </form>
  );
}
