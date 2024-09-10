type HeaderProps = {
  handleOpen: () => void;
};

export function Header({ handleOpen }: HeaderProps) {
  return (
    <header className={`flex items-center justify-between relative`}>
      <h3 className="font-semibold text-xl dark:text-white text-dark">
        Events
      </h3>
      <button
        onClick={handleOpen}
        className="bg-blue-600 px-4 py-2 rounded-xl cursor-pointer font-semibold text-white"
      >
        Add event
      </button>
    </header>
  );
}
