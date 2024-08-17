import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const { setSearchTerm } = useGlobalContext();
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center mx-auto max-w-md"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a meal..."
        className="border rounded-lg px-4 py-2 w-full sm:w-80"
      />
      <button
        type="submit"
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center"
      >
        <AiOutlineSearch className="h-5 w-5" />
      </button>
    </form>
  );
};

export default SearchBar;
