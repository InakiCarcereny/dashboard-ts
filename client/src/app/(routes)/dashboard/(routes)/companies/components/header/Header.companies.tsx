interface HeaderProps {
  open: boolean;
  handleOpen: () => void;
}

export function Header({ open, handleOpen }: HeaderProps) {
  return (
    <header
      className={`flex items-center justify-between ${open ? "hidden" : ""}`}
    >
      <h3 className="font-semibold text-xl dark:text-white text-dark">
        Companies
      </h3>
      <button
        onClick={handleOpen}
        className="bg-blue-600 px-4 py-2 rounded-xl cursor-pointer font-semibold text-white"
      >
        Add company
      </button>
    </header>
  );
}
