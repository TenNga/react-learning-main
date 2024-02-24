import React, { useContext } from 'react';
import InputField from './components/InputFeild';
import { TodoCard, StateContextType } from './models';
import ListToDos from './components/ListTodos';
import useStateContext from './StateContext';

const App:React.FC = () => {

  const {state, setState} = useContext(useStateContext);

  const handleSubmitTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const newCard:TodoCard = { id: todo, name: todo, isDone: false}
    setCards([...cards,newCard])
    setTodo("");
  }
  return (
    <div className="App">
     <h1>Todo App</h1>
     <InputField todo={todo} setTodo={setTodo} handleOnSubmit = {handleSubmitTodo}/>
     <ListToDos cards={cards} handleSetCards = {setCards} />
    </div>
  );
}

export default App;
