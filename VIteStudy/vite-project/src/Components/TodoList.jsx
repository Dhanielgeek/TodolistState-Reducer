import React,{useState,useReducer} from 'react'
import './Style.css'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { MdEdit } from "react-icons/md";


const Action = {
  Completed: "TaskCompleted"
} 

const Reducer = (state,action)=>{
  if(action.type === Action.Completed){
    return{
      ...state, 
      Completeline: "line-through",
      CompleteBg : "lightgreen",
    }
    
  }
  
}








const TodoList = () => {

  const [state, dispatch] = useReducer(Reducer,{Completeline:"none",CompleteBg:"none"})

const [Task, setTask] = useState([])
const [Tasklist, setTasklist] = useState('')
const [Editid, setEditid] = useState(0)

const HandleChange = (e)=>{
  const getValue = e.target.value
  setTasklist(getValue)
}

const AddTask = ()=>{
  const NewTask = {
    id : Math.floor(Math.random()*100),
    task : Tasklist
  }
  setTask([...Task,NewTask])
  setTasklist('')

  
  if(Editid){
    const UpdateEdit = Task.map((tas)=>(
      tas.id === Editid ? {
        ...tas,
        task: Tasklist} : tas
    ))
    setTask(UpdateEdit)
    setTasklist("")
    setEditid(0)
  }

}
const DeleteBtn = (id)=>{
  const remove = Task.filter((el)=> el.id !== id)
  setTask(remove)
}

const EditBtn = (id)=>{
  const edit = Task.find((ed)=> ed.id === id)
  setTasklist(edit.task)
  setEditid(id)
}

console.log(state)




  return (
    <div className='TodoHold'>
        <div className="TodoContainer">
            <div className="TodoHeader">
                <input type="text" placeholder='Add task' onChange={HandleChange} value={Tasklist} />
                <button onClick={AddTask}>Add</button>
            </div>
            <div className="TodoTask">
             {
              Task.map((props)=>(
                <div className="Task" key={props.id}>
                  <div className='check'>
                 <input type="checkbox" name="" id="" onChange={()=>{dispatch({type:Action.Completed})}}/>
  
            </div>
             <div className="Tasklist" key={state.id} style={{background:state.CompleteBg,textDecoration:state.Completeline}}>
             <p>
                 {props.task}
                </p>
             </div>
               <section className='functionBtn'>
                 <div className='deleteBtn' >
                  <RiDeleteBin6Line onClick={()=>DeleteBtn(props.id)}/>
                </div>
                <div className='Edit'>
                  <MdEdit onClick={()=> EditBtn(props.id)} />
                </div>
               </section>
             </div>
              ))
             }
            </div>
        </div>
    </div>
  )
}

export default TodoList




