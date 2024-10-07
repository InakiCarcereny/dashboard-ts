import { useForm } from "react-hook-form";
import { useEvents } from "../../context/events";
import { toast } from "sonner";

type FormValues = {
  title: string;
  dateInit: string;
  hourInit: string;
  dateEnd: string;
  hourEnd: string;
};

type State = {
  setOpen: (value: boolean) => void;
};

export function FormModal({ setOpen }: State) {
  const { register, handleSubmit, formState, reset } = useForm<FormValues>();
  const { createEvent } = useEvents();

  const { errors } = formState;

  const onSubmit = handleSubmit(async (data) => {
    createEvent(data);
    toast.success("Event created successfully");
    reset();
    setOpen(false);
  });

  return (
    <div className="absolute right-4 top-40 bg-white rounded-[4px] min-h-[500px] w-[300px] z-40 border border-zinc-200">
      <form
        onSubmit={onSubmit}
        className="flex flex-col px-4 py-4 justify-between gap-4 w-full"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="title">
              Title
            </label>
            <input
              className="focus:outline-none rounded-[4px] px-2 py-2 w-full text-sm border border-zinc-200 dark:bg-white dark:text-black"
              type="text"
              id="title"
              {...register("title", {
                required: "Title is required",
              })}
            />

            {errors.title && (
              <span className="text-red-500 text-sm font-semibold">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className=" text-black" htmlFor="title">
              Date init
            </label>
            <input
              className=" focus:outline-none rounded-[4px] px-2 py-2 w-full text-sm border border-zinc-200 dark:bg-white dark:text-black"
              type="text"
              id="date init"
              {...register("dateInit", {
                required: "Date init is required",
              })}
            />

            {errors.dateInit && (
              <span className="text-red-500 text-sm font-semibold">
                {errors.dateInit.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="title">
              Hour init
            </label>
            <input
              className=" focus:outline-none rounded-[4px] px-2 py-2 w-full text-sm border border-zinc-200 dark:bg-white dark:text-black"
              type="text"
              id="hour init"
              {...register("hourInit", {
                required: "Hour init is required",
              })}
            />

            {errors.hourInit && (
              <span className="text-red-500 text-sm font-semibold">
                {errors.hourInit.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="title">
              Date end
            </label>
            <input
              className=" focus:outline-none rounded-[4px] px-2 py-2 w-full text-sm border border-zinc-200 dark:bg-white dark:text-black"
              type="text"
              id="date end"
              {...register("dateEnd", {
                required: "Date end is required",
              })}
            />

            {errors.dateEnd && (
              <span className="text-red-500 text-sm font-semibold">
                {errors.dateEnd.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="title">
              Hour end
            </label>
            <input
              className=" focus:outline-none rounded-[4px] px-2 py-2 w-full text-sm border border-zinc-200 dark:bg-white dark:text-black"
              type="text"
              id="hour end"
              {...register("hourEnd", {
                required: "Hour end is required",
              })}
            />

            {errors.hourEnd && (
              <span className="text-red-500 text-sm font-semibold">
                {errors.hourEnd.message}
              </span>
            )}
          </div>
        </div>

        <button
          className="text-white font-semibold bg-blue-600 hover:rounded-xl duration-200 px-4 py-2"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}
