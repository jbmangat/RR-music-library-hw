import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";

export function Searchbar() {
  
  let { ref, handleSubmit } = useContext(SearchContext);

  return (
    <form >
      <input
        type="text"
        placeholder="Enter a search term here"
        
        ref={ref}
      />

      <button type="submit" onClick={(e) => handleSubmit(e, ref.current.value)} >Submit</button>
    </form>
  );
}

// value={search} onChange={(e) => setSearch(e.target.value)}
