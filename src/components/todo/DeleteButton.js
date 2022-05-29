import React, { useState } from 'react';


function DeleteButton(props) {
    return (
      <>
        <button onClick={() => {
          let new_list = props.todoList.filter(item => item!== props.todo_item);
          props.setTodoList(new_list)
        }}>Delete</button>
      </>
    )
  }

export default DeleteButton;
