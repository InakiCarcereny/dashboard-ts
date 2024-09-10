import { useUsers } from "@/app/hooks/useUsers";
import { useEffect } from "react";
import { MappdedUser } from "../../(routes)/contacts/page";
import { userImg } from "@/app/consts/userImg";
import { Phone } from "@/app/icons/phone";
import Link from "next/link";
import { ArrowMinRight } from "@/app/icons/arrowMinRight";

export function PrevContacts() {
  const { users, getUsers } = useUsers();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="h-[275px] w-[292px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 px-4 py-2">
      <span className="flex items-center gap-2 font-semibold dark:text-white text-sm">
        <Phone className="text-blue-600" />
        Contacts
      </span>

      <ul className="flex flex-col gap-4 mt-4">
        {users.slice(0, 4).map((user: MappdedUser) => {
          return (
            <li
              key={user._id}
              className="flex items-center gap-4 dark:text-white text-zinc-800 text-sm font-semibold"
            >
              <div className="flex items-center gap-2">
                <img
                  src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${user._id}`}
                  alt="avatar"
                  className="rounded-full h-8 w-8"
                ></img>
                <span>{user._firstname}</span>
                <span>{user._lastname}</span>
              </div>
            </li>
          );
        })}
        <Link
          href="/dashboard/contacts"
          className="text-sm mt-1 dark:text-white text-black font-semibold hover:text-blue-600 dark:hover:text-blue-600 duration-150 cursor-pointer flex items-center gap-2"
        >
          See more
          <ArrowMinRight />
        </Link>
      </ul>
    </div>
  );
}
