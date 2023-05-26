import { Header } from "./components/Header.tsx";
import { CreateTask } from "./components/CreateTask.tsx";
import { Tasks } from "./components/Tasks.tsx";

import styles from './App.module.css';

function App() {


    return (
        <div>
            <Header/>
            <div className={ styles.content }>
                <CreateTask/>
                <Tasks/>
            </div>
        </div>
    )
}

export default App
