import { PlusCircle } from '@phosphor-icons/react';

import styles from './CreateTask.module.css'


export function CreateTask() {
    return (
        <div className={ styles.addTask }>
            <form className={ styles.form }>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                />
                <button type="submit">
                    Criar
                    <PlusCircle weight="bold"/>
                </button>
            </form>
        </div>
    )
}