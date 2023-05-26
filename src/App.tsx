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
                <Tasks tasks={ tasks } onDeleteTask={deleteTask}/>
            </div>
        </div>
    )
}

export default App
