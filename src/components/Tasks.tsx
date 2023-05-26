import styles from './Tasks.module.css';
import clipboardIcon from '../assets/clipboard.svg';

export function Tasks() {
    return (
        <div className={ styles.tasks }>
            <header className={ styles.header }>
                <p className={ styles.createdTaskParagraph }>Tarefas criadas <span>0</span></p>
                <p className={ styles.paragraphTasksCompleted }>Concluídas <span>0</span></p>
            </header>
            <div className={ styles.tasksList }>
                <div className={ styles.noItem }>
                    <img src={ clipboardIcon } alt="Ícone Clipboard"/>
                    <p className={ styles.paragraphBold }>
                        Você ainda não tem tarefas cadastradas
                    </p>
                    <p>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            </div>
        </div>
    )
}