import React, { useState } from 'react'
// import PropTypes from 'prop-types'
//todo list
const AnotherExample = props => {
    const [todo, setTodo] = useState([])
    const [todoName, setTodoName] = useState('')
    const handelBtn=()=>{
        todo.push({todoName,isCompleted:false})
        setTodo(todo)
    }
    const handelInput=(e)=>{
        console.log(e.currentTarget.value);
        setTodoName(e.currentTarget.value)
    }
    return (
        <div>
            <input onChange={handelInput} />
            <button onClick={handelBtn}>Add</button>
            {
                
                todo.map((item,index)=>{
                    const handelClose=()=>{
                        const filterTodo = todo.filter((item,key)=>  key !== index)
                         setTodo(filterTodo)
                    }
                    const handelCheckBox=(e)=>{
                        const filterTodo = todo.filter((data,key)=> {
                            return key !== index ? {...data} : {...data,isCompleted:true}
                        })
                        console.log(filterTodo,e.currentTarget.value)
                        setTodo(filterTodo)
                        
                    }
                   
                    return (
                            <div key={index} style={{display:'flex'}}>
                                <input onChange={handelCheckBox} value={item.isCompleted} type="checkbox" />
                                <h4>{item.todoName}</h4>
                                <button onClick={handelClose}>Close</button>
                            </div>
                            )
                })
            }
        </div>
    )
}

// AnotherExample.propTypes = {

// }

export default AnotherExample
