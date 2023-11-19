// import React,{useState} from 'react'
// import './Style.css'

// const Hold = () => {

// const [data, setdata] = useState([
//     {
//         id: 1,
//         username: "Ben Daniel",
//         usermsg : "hello i'm writing react code",
//         userdate : new Date().toDateString()
//     },
//     {
//         id: 2,
//         username: "Ben Daniel",
//         usermsg : "hello i'm writing react code",
//         userdate : new Date().toDateString()
//     },
//     {
//         id: 3,
//         username: "Ben Daniel",
//         usermsg : "hello i'm writing react code",
//         userdate : new Date().toDateString()
//     },
//     {
//         id: 4,
//         username: "Ben Daniel",
//         usermsg : "hello i'm writing react code",
//         userdate : new Date().toDateString()
//     },
//     {
//         id: 5,
//         username: "Ben Daniel",
//         usermsg : "hello i'm writing react code",
//         userdate : new Date().toDateString()
//     },
//     {
//         id: 6,
//         username: "Ben Daniel",
//         usermsg : "hello i'm writing react code",
//         userdate : new Date().toDateString()
//     },
//     {
//         id: 7,
//         username: "Ben Daniel",
//         usermsg : "hello i'm writing react code",
//         userdate : new Date().toDateString()
//     },
//     {
//         id: 8,
//         username: "Ben Daniel",
//         usermsg : "hello i'm writing react code",
//         userdate : new Date().toDateString()
//     },
// ])



// const [UserName, setUserName] = useState()
// const [UserMsg, setUserMsg] = useState()

// const HandleChange = (e)=>{
//     const NewChange = e.target.value

//     setUserName(NewChange)
   
// }
// const HandleChangeTex = (e)=>{
//     const NewChange = e.target.value

//     setUserMsg(NewChange)
   
// }

// const HandleAddBtn = ()=>{
//     const Message = {
//         id : data.length,
//         username : UserName,
//         usermsg : UserMsg,
        
//     }
//     setdata([...data,Message])
// }


// console.log(UserName,UserMsg)



// const DeleteBtn = (id)=>{
//     const removeitem = data.filter((el)=> el.id !== id)
//     setdata(removeitem)
// }





//   return (
//     <div className='Hold'>
//         <div className="HoldHeader">
//             <input type="text" placeholder='Enter UserName' onChange={HandleChange} />
//             <textarea name="" id="" cols="30" rows="10" placeholder='EnterText'onChange={HandleChangeTex}></textarea>
//             <button onClick={HandleAddBtn}>Add</button>
//         </div>
//         <div className="HoldContainer">
//             <div className="HoldWrapper">
//                {
//                 data.map((props)=>(
//                     <div className="Card"key={props.id}>
//                     <div className="cardHeader">
//                         <h3>{props.username}</h3>
//                         <span onClick={()=> DeleteBtn(props.id)}>X</span>
//                     </div>
//                     <div className="content">
//                         {props.usermsg}
//                     </div>
//                     <div className="datehold">
//                         {props.userdate}
//                     </div>
//                 </div>
//                 ))
//                }
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hold

import React,{useReducer} from 'react'

const reducer = (state,action)=>{
    if(action.type === 'incremented'){
        return{
            age : state.age + 1
        }
    }
    throw Error ('unknown action')
}

 const Hold = () => {
    const [state,dispatch] = useReducer(reducer,{age: 23})


  return (
    <div>
        <button onClick={()=>{
            dispatch({type: 'incremented'})
        }}>Increment</button>
        <p>your total age is {state.age} </p>
    </div>
  )
}

export default Hold
