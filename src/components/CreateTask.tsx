import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, useState } from "react";

import styles from './CreateTask.module.css'

interface CreateTaskProps {
    onHandleCreateTask: (content: string) => void,

}

export function CreateTask({ onHandleCreateTask }: CreateTaskProps) {

    const [newTaskText, setNeWTaskText] = useState('');

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNeWTaskText(event.target.value);
    }

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();
        onHandleCreateTask(newTaskText);
        setNeWTaskText('');
    }


    return (
        <div className={ styles.addTask }>
            <form className={ styles.form } onSubmit={handleCreateTask}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                />
                <button type="submit">
                    Criar
                    <PlusCircle weight="bold"/>
                </button>
            </form>
        </div>
    )
}