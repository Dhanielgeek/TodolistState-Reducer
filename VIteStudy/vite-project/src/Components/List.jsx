import React, { useReducer } from "react";
import Item from "./Item";

const reducer = (state, action) => {
  if (action.type === "ADD") {
    const newContent = {
      text: action.payload,
      id: state.lists.length,
      check: false,
    };
    return {
      ...state,
      lists: [...state.lists, newContent],
      //return the prev state, go tho the prev state.property
    };
  }
  if (action.type === "REMOVE") {
    const newList = [
      ...state.lists.filter((list) => list.id !== action.payload),
    ];
    return { ...state, lists: newList };
  }
  if (action.type === "EDIT") {
    const selectedItem = {
      ...state.lists.find((list) => list.id === action.payload),
    };
    return {
      ...state,
      inputData: selectedItem.text,
    };
  }

  if (action.type === "CHECKS") {
    const styledItem = state.lists.map((list) =>
      list.id === action.payload ? { ...list, check: !list.check } : list
    );

    return {
      ...state,
      lists: styledItem,
    };
  }
  if (action.type === "ONCHANGE") {
    const inputsval = action.payload.target.value;
    return {
      ...state,
      inputData: inputsval,
    };
  }
  return state;
};

const initialState = {
  lists: [],
  check: false,
  inputData: "",
};

const List = () => {
  // const [inputData, setInputData]  = useState("")
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [lists, setLists] =useState([])
  // const [check, setCheck] = useState(false)

  const addValue = (e) => {
    // const inputValue = e.target.value
    // setInputData(inputValue)
    dispatch({ type: "ONCHANGE", payload: e });
  };

  const addContent = () => {
    dispatch({ type: "ADD", payload: state.inputData });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const editItem = (id) => {
    dispatch({ type: "EDIT", payload: id });
  };

  const handleCheck = (id) => {
    dispatch({ type: "CHECKS", payload: id });
  };

  return (
    <main className="list-main">
      <section className="list-section">
        <nav className="list-nav">
          <input
            type="textarea"
            className="list-nav-input"
            value={state.inputData}
            onChange={addValue}
          />
          <button className="list-nav-btn" onClick={addContent}>
            Add
          </button>
        </nav>
        <article className="list-article">
          {state.lists.map((list) => (
            <Item
              key={list.id}
              list={list}
              handleCheck={handleCheck}
              editItem={editItem}
              removeItem={removeItem}
            />
          ))}
        </article>
      </section>
    </main>
  );
};

export default List;