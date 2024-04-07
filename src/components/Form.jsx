import React from 'react'
import "./form.css"
const Form = ({ handleChange, addTask, task }) => {
  return (
    <div>
      <form onSubmit={addTask}>
        <input type="text" value={task} className='field' placeholder='Ingresa la tarea... ' onChange={handleChange} />
        <button type='submit' className='addbutton'>
          <img className='add' src='../src/components/img/add.svg' alt="Añadir" />
        </button>
      </form>
    </div>
  )
}
export default Form;
