import { useRef, useContext } from "react";

import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const textRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent ) => {
    e.preventDefault();

    const enteredText = textRef.current!.value; 

    if (enteredText.trim().length === 0) {
      return;
    };

    todosCtx.addTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text"></label> 
      <input ref={textRef} type='text ' id='text' />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo;