const SearchBar = () => {
  return (
    <div className="mb-5 flex items-center justify-center">
      <div className="flex sm:w-[30rem] md:w-[40rem] bg-white">
        <input
          type="search"
          className="font-semibold w-full border-none bg-transparent px-4 py-1 text-gray-900 focus:outline-none"
          placeholder="search"
          x-model="search"
        />
        <button className="m-2 px-4 py-2 font-semibold text-gray-100 bg-gray-500">
          search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
