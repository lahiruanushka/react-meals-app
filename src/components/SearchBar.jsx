import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ setSearchQuery }) => {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="flex items-center mx-auto max-w-md">
      <input
        type="text"
        placeholder="Search meals..."
        onChange={handleInputChange}
        className="border rounded-lg px-4 py-2 w-full sm:w-80"
      />
      <button
        type="submit"
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center"
      >
        <AiOutlineSearch className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchBar;
