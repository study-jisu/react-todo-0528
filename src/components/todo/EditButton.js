import React, { useState } from 'react';


function EditButton(props) {
    return (
      <>
        <input type="button" className='edit' onClick={(e)=> {
            let buttons = document.querySelectorAll('.edit')
            let li = e.currentTarget.parentNode
            if (e.target.value === 'Edit'){
              li.children[0].disabled = false;
              e.target.value="Save"
            }
            else {
              console.log(props.todo_item)
              let edit_todo = li.children[0].value;
              let new_list = [ ...props.todoList ]
              console.log(edit_todo)
              new_list[props.todo_item.id].todo = edit_todo
              props.setTodoList(new_list)
              li.children[0].disabled = true;
              e.target.value="Edit"
            }
        }}
        value="Edit"/>
      </>
    )
  }

export default EditButton;
