import React, { useContext } from 'react';
import InputField from './components/InputFeild';
import ListToDos from './components/ListTodos';
import useStateContext from './StateContext';

const App:React.FC = () => {

  const {state, setState} = useContext(useStateContext);

  return (
    <div className="App">
     <h1>Todo App</h1>
     <InputField />
     <ListToDos cards={state} handleSetCards = {setState} />
    </div>
  );
}

export default App;
