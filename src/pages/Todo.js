import React, { useState } from 'react';
import DeleteButton from '../components/todo/DeleteButton';
import Create from '../components/todo/CreateButton';
import EditButton from '../components/todo/EditButton';


function Todo() {
    let [ newId, setnewId ] = useState(3);
    let [ todoList, setTodoList ] = useState([
      { id : 0, todo : 'eat' },
      { id : 1, todo : 'sleep' },
      { id : 2, todo : 'study' },
    ]);
  
    return (
    <div>
      {todoList.map((todo_item) =>          
        <li key={todo_item.id}>
          {todo_item.id}: 
          <input type="text" className="todo" defaultValue={todo_item.todo} disabled/>
  
          <DeleteButton todo_item={todo_item} todoList={todoList} setTodoList={setTodoList}/>
          <EditButton todo_item={todo_item} todoList={todoList} setTodoList={setTodoList}/>
        </li>
      )}
          <div style={{paddingTop:'20px'}}>
            <Create 
              setTodoList={setTodoList} todoList={todoList} 
              setnewId={setnewId} newId={newId}
            />
          </div>
    </div>
    )
  }

export default Todo;
