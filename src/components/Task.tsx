import React, { ChangeEvent, useState } from 'react'
import s from '../styles/Home.module.scss'

export const Task = ():JSX.Element => {

    const [newTask, setNewTask ] = useState('');

    const handleSubmit = ( e:ChangeEvent<HTMLFormElement> ) => {
        e.preventDefault();
        console.log(newTask)
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button>Save</button>
            </form>
            <code className={s.code}>{ newTask }</code>
        </>
    );
}

