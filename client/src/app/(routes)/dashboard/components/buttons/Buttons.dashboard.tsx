import { ArrowLeft } from "@/app/icons/arrowLeft";
import { ExpandLeft } from "@/app/icons/expandLeft";
import { ExpandRight } from "@/app/icons/expandRight";
import { Plus } from "@/app/icons/plus";

interface ButtonsProps {
  isExpanded: boolean;
  toggleExpand: () => void;
  logOut: () => void;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export function Buttons({
  isExpanded,
  toggleExpand,
  logOut,
  open,
  setOpen,
}: ButtonsProps) {
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={`w-full h-[150px] rounded-xl mb-[280px] flex items-center justify-center flex-col gap-1 ${
          isExpanded ? "" : "dark:bg-zinc-700/40 bg-zinc-300"
        }`}
      >
        <button
          onClick={handleOpen}
          className="bg-blue-600 px-2 py-2 rounded-full hover:scale-105 duration-200 transition-all cursor-pointer"
        >
          <Plus />
        </button>
        <p
          className={`font-semibold dark:text-white text-black ${
            isExpanded ? "hidden" : ""
          }`}
        >
          Add new task
        </p>
      </div>

      <div className="flex flex-col">
        <button
          onClick={toggleExpand}
          className="flex items-center mb-2 gap-4 px-2 py-2 rounded-xl duration-200 dark:hover:bg-zinc-700/40 hover:bg-zinc-300 text-black dark:text-white font-semibold"
        >
          {isExpanded ? (
            <>
              <span className={`${isExpanded ? "text-blue-600" : ""}`}>
                <ExpandRight />
              </span>
            </>
          ) : (
            <>
              <ExpandLeft />
              <p className={`font-semibol ${isExpanded ? "hidden" : ""}`}>
                Close
              </p>
            </>
          )}
        </button>
        <button
          onClick={logOut}
          className="flex items-center mb-2 gap-4 px-2 py-2 rounded-xl duration-200 dark:hover:bg-zinc-700/40 hover:bg-zinc-300 text-black dark:text-white font-semibold"
        >
          <ArrowLeft />
          <p className={`font-semibold ${isExpanded ? "hidden" : ""}`}>
            Log out
          </p>
        </button>
      </div>
    </>
  );
}
