import { FormEvent, useRef, useState } from 'react'

interface ITASK {
    name: string,
    done: boolean
}

export const Task = ():JSX.Element => {

    const [newTask, setNewTask ] = useState<string>('');
    const [todoList, setTodoList] = useState<ITASK[]>([]);
    const taskInput = useRef<HTMLInputElement>(null);
    
    const handleSubmit = ( e:FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        addTask(newTask)
        setNewTask('');
        taskInput.current?.focus();
        console.log(todoList)
    }

    const addTask = ( name: string ) => {
        const newTasks: ITASK[] = [ ...todoList, { name, done: false } ];
        setTodoList( newTasks )
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setNewTask(e.target.value)}
                    value={ newTask }
                    ref={ taskInput }
                />
                <button>Save</button>
            </form>
            <ul>
                { todoList.map( (item, i) => (
                    <li key={i+1}>{item.name}</li>
                ) ) }
            </ul>
        </>
    );
}

