function PaginationButton({ onClick, direction, children }) {
  return (
    <button
      className={`${direction}-12 cursor-pointer relative inline-flex items-center px-1 py-2 text-sm  font-semibold text-gray-900 ring-1  ring-gray-300 hover:bg-indigo-500 hover:text-white focus:z-20 focus:outline-offset-0 transition-all`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
