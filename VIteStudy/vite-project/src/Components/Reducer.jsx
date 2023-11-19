// import React,{useReducer} from 'react'
// import './Style.css'

// const Action = {
//     INCREMENT : "increment",
//     DECREMENT : "decrement"
// }

// const reducer = (state,action)=>{
//     if(action.type === Action.INCREMENT){
//         return{...state, count: state.count + 1}
//     }
//     if(action.type === Action.DECREMENT){
       
//         return{...state, count: state.count !== 0 ? state.count - 1 : state.count}
//     }
// }



// const Reducer = () => {

// const [state, dispatch] = useReducer(reducer,{count: 0})

// console.log(state.count)




//   return (
//     <div className='reduce'>
//         <div className="Container">
//          <div className='count'>Count : {state.count} </div>
//          <section className='section'>
//          <button onClick={()=>{ dispatch({type: Action.INCREMENT}) }} style={{background: state.Bg}}>Increase</button>
//             <button className='de' onClick={()=> {dispatch({type: Action.DECREMENT})}}>Decrease</button>
//          </section>
//         </div>
//     </div>
//   )
// }

// export default Reducer



import React, { useReducer } from 'react';

const initialState = [
  { id: 1, text: 'Task 1', completed: false },
  { id: 2, text: 'Task 2', completed: false },
  // Add more tasks as needed
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETED':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

const TodoItem = ({ todo, dispatch }) => {
  const handleToggleCompleted = () => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id });
  };

  return (
    <div style={{ backgroundColor: todo.completed ? 'lightblue' : 'white' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleCompleted}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
        </span>
    </div>
  );
};

const Reducer = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default Reducer