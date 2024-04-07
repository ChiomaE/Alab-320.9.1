import React, { useState } from "react";
import { actions } from "../App";
import './todo.css'

export default function TodoButtons({todo, dispatch}) {
    const [isBtnDisabled, setBtnDisable] = useState(true);

    //Enables button when checkbox is checked
    function enableBtn() {
        setBtnDisable(false)
        console.log("Button enabled!")
    }
  /*   const disableBtn = () => {
        setBtnDisable = true;
    } */

    return (
        <ul>
            <li>
                <input type="checkbox" 
                onClick={enableBtn}/>
                {todo.name}
                </li>

            <button className="edit" onClick={() => dispatch(
                {type: actions.TOGGLE_TODO, payload: {id: todo.id}})}>
                    Edit
            </button>

            <button className="delete" disabled={isBtnDisabled} onClick={() => dispatch(
                {type: actions.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
        </ul>
    )
}