import { Header } from "./components/Header.tsx";
import { CreateTask } from "./components/CreateTask.tsx";
import { Tasks } from "./components/Tasks.tsx";

import styles from './App.module.css';
import { useState } from "react";
import { TaskModel } from "./models/TaskModel.ts";
import { TaskState } from "./models/TaskState.ts";

function App() {
    const [tasks, setTasks] = useState(new Array<TaskModel>());


    function createTask(content: string): TaskModel {
        return {
            taskState: TaskState.Default,
            id: tasks.length + 1,
            content: content
        };
    }

    function handleCreateTask(content: string) {
        setTasks([...tasks, createTask(content)])
    }

    function handleChangeTask(task: TaskModel) {
        const toChangeTask = tasks.findIndex(item => {
            return item.id === task.id;
        });
        tasks[toChangeTask].taskState = task.taskState;
        tasks.sort((a:TaskModel, b:TaskModel): number => a.taskState < b.taskState
            ? -1 : a.taskState > b.taskState ? 1 : 0)
        setTasks(tasks);
    }

    function deleteTask(taskToDelete: TaskModel){
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== taskToDelete.id
        });
        setTasks(tasksWithoutDeletedOne);
    }


    return (
        <div>
            <Header/>
            <div className={ styles.content }>
                <CreateTask
                    onHandleCreateTask={handleCreateTask}
                />
                <Tasks
                    tasks={ tasks }
                    onDeleteTask={deleteTask}
                    onHandleChangeTask={handleChangeTask}
                />
            </div>
        </div>
    )
}

export default App
