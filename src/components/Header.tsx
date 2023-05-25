import styles from './Header.module.css';
import logo from '../assets/logo.svg';

export function Header() {
    return (
        <header className={ styles.header }>
            <img src={ logo } alt="Logo foguete"/>
            <h1>to<strong>do</strong></h1>
        </header>
    )
}