import type { PostType } from "../types/PostType";
import styles from './Post.module.css';

export function Post({ post }: { post: PostType }) {
    return (
        <article className={styles.post}>
            <header>
                <h2><a href={post.url}>{post.title}</a></h2>
                <p className={styles.excerpt}>{post.subtitle}</p>
            </header>
            {post.figure && (
                <figure>
                    <img src={post.figure?.imageUrl} alt={post.figure?.imageAltText} />
                    <figcaption>{post.figure?.figureCaption}</figcaption>
                </figure>
            )}
            <section>
                <p>{post.text}</p>
            </section>
            <footer>
                <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    })}
                </time>
                <a className={styles.leia} href={post.url}>Ler artigo →</a>
            </footer>
        </article>
    );
}