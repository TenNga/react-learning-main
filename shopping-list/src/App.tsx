import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import { listType } from "./share/types";
import DisplayList from "./components/DisplayList";

function App() {
  const [ List, setList ] = useState<listType[]>([]);
  return (
    <div className="App flex flex-col items-center w-80 mx-auto">
      <header className="App-header text-2xl font-bold p-2">
        My Shopping List
      </header>
      <SearchInput />
      <DisplayList />
    </div>
  );
}

export default App;
