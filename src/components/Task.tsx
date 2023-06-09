import { Check, Trash } from "@phosphor-icons/react";
import { TaskModel } from "../models/TaskModel.ts";
import { TaskState } from "../models/TaskState.ts";
import { useState } from "react";

import styles from './Task.module.css';


interface TaskProps {
    task: TaskModel,
    onDeleteTask: (task: TaskModel) => void,
    onHandleChangeTask: (task: TaskModel) => void,
    onHandleUpdateTask: () => void
}


export function Task({ task, onDeleteTask, onHandleChangeTask, onHandleUpdateTask}: TaskProps) {
    const [isChecked, setIsChecked] =
        useState(returnCheckedStatus(task.taskState));
    const [isDone, setIsDone] =
        useState(returnClasseTaskDone(isChecked));


    function returnClasseTaskDone(isChecked: boolean) {
        if (isChecked) {
            return `${ styles.task } ${ styles.taskDone }`
        } else {
            return `${ styles.task }`
        }
    }

    function returnCheckedStatus(taskState: TaskState): boolean {
        return taskState === TaskState.Done;
    }

    function handleOnChange() {
        setIsChecked((state: boolean) => {
            const result = !state;
            setIsDone(returnClasseTaskDone(result));
            task.taskState = result ? TaskState.Done : TaskState.Default
            onHandleChangeTask(task);
            onHandleUpdateTask();
            return result;
        });

    }

    function handleDeleteTask() {
        onDeleteTask(task);
        onHandleUpdateTask();
    }


    return (
        <div className={ isDone }>
            <div className={ styles.content }>
                <div className={ styles.checkbox }>
                    <input type="checkbox" id={`statusCheck_${task.id}`} checked={ isChecked } onChange={handleOnChange}/>
                    <label htmlFor={`statusCheck_${task.id}`} className={ styles.checkmark }>
                    <span className={ styles.checkboxIcon }>
                        <Check fontSize={ 13 } weight="bold"/>
                    </span>
                    </label>
                </div>
                <p onClick={handleOnChange}>{ task.content }</p>
            </div>
            <button
                className={ styles.btnIcon }
                onClick={handleDeleteTask}
            >
                <Trash size={ 24 }/>
            </button>
        </div>
    )
}