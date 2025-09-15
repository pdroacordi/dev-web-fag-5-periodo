import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={styles.title}>Blog do Pedrão</h1>

                <ol className={styles.navigation}>
                    <li className={styles.navigationItem}>Início</li>
                    <li className={styles.navigationItem}>Contato</li>
                </ol>
            </nav>
        </header>
    );
}