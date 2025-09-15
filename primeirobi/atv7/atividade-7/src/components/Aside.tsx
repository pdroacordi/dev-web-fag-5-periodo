import type { RelatedItem } from "../types/RelatedItem";
import styles from "./Aside.module.css";



type AsideProps = {
    type: "posts" | "tags" | "links" | "categorias";
    title?: string;
    items: RelatedItem[];
};

export function Aside({ type, title, items }: AsideProps) {
    const heading = title ?? ({
        posts: "Relacionados",
        tags: "Tags relacionadas",
        links: "Links úteis",
        categorias: "Categorias relacionadas",
    }[type] || "Relacionados");

    return (
        <aside aria-label="Conteúdos relacionados" className={styles.aside}>
            <section className={styles.card} aria-labelledby="relacionados">
                <h3 id="relacionados">{heading}</h3>
                <ul role="list" className={styles.list}>
                    {items.map((it) => (
                        <li key={it.url}>
                            <a href={it.url} className={styles.itemLink}>{it.title}</a>
                            {it.meta && <small className={styles.meta}>{it.meta}</small>}
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    );
}
