import styles from './Tasks.module.css';
import clipboardIcon from '../assets/clipboard.svg';
import { TaskModel } from "../models/TaskModel.ts";
import { Task } from "./Task.tsx";

interface TasksProps {
    tasks: TaskModel[],
    onDeleteTask: (task: TaskModel) => void
}

export function Tasks({ tasks, onDeleteTask }: TasksProps) {

    function haveTasks(tasks: TaskModel[]) {
        if (tasks.length > 0) {
            return (
                <div>
                    { tasks.map((item: TaskModel) => {
                        return (
                            <Task
                                task={ item }
                                key={ item.id }
                                onDeleteTask={onDeleteTask}
                            />
                        )
                    }) }
                </div>
            )
        } else {
            return (
                <div className={ styles.noItem }>
                    <img src={ clipboardIcon } alt="Ícone Clipboard"/>
                    <p className={ styles.paragraphBold }>
                        Você ainda não tem tarefas cadastradas
                    </p>
                    <p>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            )
        }
    }


    return (
        <div className={ styles.tasks }>
            <header className={ styles.header }>
                <p className={ styles.createdTaskParagraph }>Tarefas criadas <span>0</span></p>
                <p className={ styles.paragraphTasksCompleted }>Concluídas <span>0</span></p>
            </header>
            <div className={ styles.tasksList }>
                { haveTasks(tasks) }
            </div>
        </div>
    )
}