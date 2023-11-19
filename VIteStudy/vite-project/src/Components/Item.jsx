// import React from "react";
// import {RiDeleteBin6Line} from 'react-icons/ri'
// import { MdEdit } from "react-icons/md";


// const Item = ({ list, handleCheck, editItem, removeItem }) => {
//   return (
//     <div>
//       <div className="first-div" key={list.id}>
//         <div
//           className={
//             list.check
//               ? "list-article-div list-article-div-bod"
//               : "list-article-div "
//           }
//           key={list.id}
//         >
//           <h3>{list.text}</h3>
//           <div>
//             <button className="image-div-btn" onClick={() => editItem(list.id)}>
//                 <MdEdit/>
//             </button>
//             <button
//               className="image-div-btn"
//               onClick={() => removeItem(list.id)} >
//                 <RiDeleteBin6Line/>
//             </button>
//           </div>
//         </div>
//         <input
//           type="checkbox"
//           checked={list.check}
//           onChange={() => handleCheck(list.id)}
//           name="checke"
//         />
//       </div>
//     </div>
//   );
// };

// export default Item;


import React,{useReducer} from 'react'
import './Main.css'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {MdEdit} from 'react-icons/md'




const intialState = {
  list: [],
  check: false,
  inputDAta: ""

}
const Reducer = (state,action) =>{
  if (action.type === "Add"){
    const Addtasks = {
      id: state.list.length,
      check: false,
      text:state.inputDAta
    }
    return{...state, list: [...state.list,Addtasks], inputDAta: ''}
  }

  if(action.type === "SaveEdit"){
      const updatedList = state.list.map((item) =>
        item.id === state.EditId
          ? { ...item, text: state.inputDAta }
          : item
      );
    
      return {
        ...state,
        list: updatedList,
        inputDAta: '',
        EditId: null,
        isEditing: false,
      };
      }

if(action.type === "Delete"){
  const Delete = [... state.list.filter((el) => el.id !== action.payload)]
  return{...state,list:Delete}
}

if (action.type === "Edit") {
  const editedItem = {
    ...state.list.find((el) => el.id === action.payload),
  };
  return{
    ...state,
    inputDAta:editedItem.text,
    EditId: editedItem.id,
    isEditing:true,
  };

}





if(action.type ==="Checks"){
  const styleItem = state.list.map((checkbox) =>
  checkbox.id === action.payload ?{...checkbox,
  check: !checkbox.check,
  complete:checkbox.check ? "none" : "line-through",
  completed:checkbox.check ? "#003566" : "lightblue", }: checkbox
)
return{
  ...state,
  list:styleItem,
}
}
if(action.type ==="ONCHANGE") {
  const inputsval =action.payload.target.value;
  return{
    ...state,
    inputDAta:inputsval,
  };
}
 return state;


}


const Main = () => {

  const [state,dispatch] = useReducer(Reducer,intialState)


const HandleChange = (e)=>{
  dispatch({type: "ONCHANGE", payload: e})
}

const AddTask = ()=>{
  if(state.isEditing){
    dispatch({type : "saveEdit"})
  }else{
    dispatch({type : "Add"})
  }
}
  

const DeleteTasks = (id)=>{
  dispatch({type : "Delete", payload:id})
}

const EditTasks = (id)=>{
  dispatch({type : 'Edit', payload: id})
}

console.log(state)

const HandleCheckBox = (id)=>{
  dispatch({type:"Checks", payload:id})
}




  return (
    <div className='container'>
      <div className="wrapp">
        <div className="holder">
          <input type="text" placeholder='Add task' value={state.inputDAta} onChange={HandleChange} />
          <button onClick={AddTask}>Add</button>
        </div>
        <div className="down">
          {state.list.map((props) => (
            <div className="Task" key={props.id} style={{textDecoration: props.complete,background: props.completed}}>
              <div className="Check">
                <input type="checkbox" checked={props.check}onChange={()=> HandleCheckBox(props.id)} />
              </div>
              {state.isEditing && state.editedItem === props.id ? (<input type = 'text' value={state.inputData} onChange ={HandleChange}/>)
              :
              ( <p>{props.text}</p>)
              }
              <div className='FunctionBtn'>
                <div className='deleteBtn'>
                  <RiDeleteBin6Line onClick={()=> DeleteTasks(props.id)}/>
                </div>
                <div className='EditBtn'>
                   <MdEdit onClick={()=>EditTasks(props.id)}/>
                </div>
              </div>
              
            </div>
          ))}
          
        </div>
      </div>  
    </div>
  )
}

export default Main