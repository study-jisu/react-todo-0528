import React, { useState } from 'react';


function Create(props) {
    return (
      <>
        <input type="text" placeholder="Add todo" className="add"/>
        <button onClick={() => {
          let new_list = [ ...props.todoList ];
          let new_todo = {
            id : props.newId,
            todo : document.querySelector('.add').value
          }
          new_list.push(new_todo)
          props.setTodoList(new_list)
          props.setnewId(props.newId+=1)
        }
        }>Add</button>
      </>
    )
  }

export default Create;
