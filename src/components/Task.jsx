import React, { useState } from 'react';
import "./task.css";
const Task = ({ task, deleteTask, updateTask }) => {
    const [complete, setComplete] = useState(false);
    const [updatedTaskText, setUpdatedTaskText] = useState(task.task);
    const [isEditing, setIsEditing] = useState(false);
    const handleUpdateClick = () => {
        updateTask(task.id, updatedTaskText);
        setIsEditing(false);
    };
    const handleTaskInputChange = (e) => {
        setUpdatedTaskText(e.target.value);
    };
    return (
      
        <div className={complete ? 'containerTask containerTaskCompleted' : 'containerTask'}>
            {isEditing ? (
                <input
                    type="text"
                    value={updatedTaskText}
                    onChange={handleTaskInputChange}
                />
            ) : (
                <h2 className={complete ? 'complete' : 'noComplete'}>{task.task}</h2>
            )}
            
           
            <button className='buy' onClick={() => setComplete(!complete)}>
                {complete ? (
                    <img className='nocheck' src='../src/components/img/nocomprado.svg' alt="No Comprado" />
                ) : (
                    <img className='check' src='../src/components/img/comprado.svg' alt="Comprado" />
                    
                )}
            </button>
            <button className='delete' onClick={() => deleteTask(task.id)} id='delete'>
                <img className='refuse' src='../src/components/img/delete.svg' alt="Eliminar" />
            </button>
            <button className='edit' onClick={() => setIsEditing(!isEditing)}>
                <img className='pencil' src='../src/components/img/edit.svg' alt="Editar" />
            </button>
            {isEditing && (
                <button className='updateclick' onClick={handleUpdateClick}>
                    <img className='update' src='../src/components/img/upload.svg' alt="Actualizar" />
                </button> 
            )}
            
        </div>
    );
};
export default Task;
