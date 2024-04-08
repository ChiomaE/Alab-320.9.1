import React, { useState } from "react";
import { actions } from "../App";
import './todo.css'

export default function TodoButtons({todo, dispatch}) {
    const [isBtnDisabled, setBtnDisable] = useState(true);

    const styles = {
        disabled: {
            color: 'gray',
            cursor: 'not-allowed',
            opacity: 0.5,
        },

        enabled: {
            color: 'rgb(243, 243, 243)',
            backgroundColor: 'rgb(194, 41, 2)',
            borderRadius: '3px',
            
        } 
    }

    //Enables delete button when checkbox is checked
    function enableBtn(e) {
        setBtnDisable(!e.target.checked)
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

            <button className="delete" disabled={isBtnDisabled} style={!isBtnDisabled ? styles.disabled : styles.enabled} onClick={() => dispatch(
                {type: actions.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
        </ul>
    )
}