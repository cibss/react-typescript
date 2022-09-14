import { useRef } from "react";

import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void}> = (props) => {
  const textRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent ) => {
    e.preventDefault();

    const enteredText = textRef.current!.value; 

    if (enteredText.trim().length === 0) {
      return;
    };

    props.onAddTodo(enteredText);
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