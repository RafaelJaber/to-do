import styles from './Tasks.module.css';
import clipboardIcon from '../assets/clipboard.svg';
import { TaskModel } from "../models/TaskModel.ts";
import { Task } from "./Task.tsx";
import { TaskState } from "../models/TaskState.ts";
import { useState } from "react";

interface TasksProps {
    tasks: TaskModel[],
    onDeleteTask: (task: TaskModel) => void,
    onHandleChangeTask: (task: TaskModel) => void
}

export function Tasks({ tasks, onDeleteTask, onHandleChangeTask }: TasksProps) {
    const [tasksDone, setTasksDone] = useState(0);

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
                                onHandleChangeTask={onHandleChangeTask}
                                onHandleUpdateTask={handleUpdateTask}
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

    function amountOfTasks(): number {
        return tasks.length;
    }

    function handleUpdateTask(): void {
        setTasksDone(amountOfTasksDones);
    }

    function amountOfTasksDones(): number {
       return tasks.filter(task => {
           return task.taskState === TaskState.Done
       }).length;

    }

    return (
        <div className={ styles.tasks }>
            <header className={ styles.header }>
                <p className={ styles.createdTaskParagraph }>Tarefas criadas <span>{amountOfTasks()}</span></p>
                <p className={ styles.paragraphTasksCompleted }>
                    Concluídas {' '}
                    <span>{`${tasksDone} de ${amountOfTasks()}`}</span>
                </p>
            </header>
            <div className={ styles.tasksList }>
                { haveTasks(tasks) }
            </div>
        </div>
    )
}