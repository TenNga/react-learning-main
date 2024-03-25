import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import { listType } from "./share/types";
import DisplayList from "./components/DisplayList";

function App() {
  const [ List, setList ] = useState<listType[]>([]);
  return (
    <div className="App">
      <header className="App-header">
        My Shopping List
      </header>
      <SearchInput />
      <DisplayList />
    </div>
  );
}

export default App;
