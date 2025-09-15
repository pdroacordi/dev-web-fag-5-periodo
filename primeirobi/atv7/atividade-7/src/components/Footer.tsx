import styles from "./Footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer} role="contentinfo">
            <nav aria-label="Rodapé" className={styles.nav}>
                <small className={styles.copy}>
                    © 2025 Blog do Pedrão. Conteúdo sob licença CC BY-SA 4.0.
                </small>
            </nav>
        </footer>
    );
}
