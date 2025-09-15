import { Aside } from "../components/Aside";
import { Post } from "../components/Post";
import type { PostType } from "../types/PostType";
import styles from "./Home.module.css";

const posts: PostType[] = [
    {
        title: "Lorem ipsum dolor sit amet.",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ratione?",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde iusto nam distinctio amet delectus fugiat, quia nesciunt dignissimos, saepe voluptates sunt reprehenderit molestias repellat, explicabo sapiente dolores veritatis pariatur minima facere inventore consequatur architecto iure. Explicabo praesentium quasi, eius nesciunt maxime consequatur neque consectetur, expedita ea iure atque ullam.",
        url: "#",
        date: "2025-09-12",
        figure: {
            imageUrl: "https://cdn.pixabay.com/photo/2025/08/13/15/30/elephant-9772462_960_720.jpg",
            imageAltText: "Elefante muito foda",
            figureCaption: "Elefante andando na grama",
        },
    },
    {
        title: "Lorem, ipsum dolor.",
        subtitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio laboriosam eos corrupti sint. Aliquam quasi fugit voluptate iusto pariatur deleniti nostrum, ex molestias rem consequuntur vitae voluptatibus magni dolorum ipsum!",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit culpa obcaecati repellendus excepturi, beatae eligendi cum voluptatibus dolorum optio, tenetur ipsam atque eius harum minus ea accusantium animi placeat ad eum doloremque quod adipisci molestiae repudiandae? Veniam labore, rem quasi obcaecati consequatur odio nisi inventore officiis exercitationem necessitatibus, ut distinctio dolorum illo quam amet ea consequuntur. Ab ipsa quam in excepturi unde tempore accusamus ipsum a, repellat ullam. Quo culpa pariatur veritatis voluptas perferendis? Vitae corrupti ex perferendis quis quos harum, nam quo cum aliquid nulla placeat, officia facilis? Nobis, accusantium necessitatibus nisi, harum praesentium reiciendis dolorum deleniti recusandae expedita, iusto velit animi ipsa quas. Sit similique iure ipsam eum quo aliquam explicabo quae voluptatibus accusamus autem ullam placeat asperiores suscipit aut possimus et quas esse est, a facere tempore! Nihil fugit, quisquam minus et ratione, blanditiis nisi ab voluptatibus ipsa commodi placeat laboriosam eius ullam provident, eos amet exercitationem ad deserunt. Qui, ducimus! Officiis, voluptatibus enim aspernatur sit numquam exercitationem ex nemo, praesentium quas animi in obcaecati voluptatum inventore voluptates aut ad nihil, fuga dignissimos? Facere consectetur recusandae sint est molestiae. Sed dignissimos, ex debitis labore quo, totam reprehenderit, reiciendis officia non in earum pariatur fugit quasi sunt?",
        url: "#",
        date: "2025-09-14",
        figure: {
            imageUrl: "https://pt.quizur.com/_image?href=https://img.quizur.com/f/img64e2a6f57661a0.16805417.png?lastEdited=1692575504&w=1024&h=1024&f=webp",
            imageAltText: "Bob Esponja Mafioso com chapéu verde e terno verde com anéis de ouro contando notas de 100 e mandando um joia",
            figureCaption: "Bob Esponja Agiota",
        },
    }
];

const related = [
    { title: "Como escrever títulos melhores", url: "#", meta: "Tipografia · 10 set 2025" },
    { title: "Hierarchy 101: o que priorizar", url: "#", meta: "Design · 08 set 2025" },
    { title: "Espaçamento que respira", url: "#", meta: "Layout · 02 set 2025" },
];

export default function Home() {
    return (
        <>
            <section aria-label="Postagens" className={styles?.feed}>
                {posts.map((post) => (
                    <Post post={post} />
                ))}
            </section>
            <Aside type="posts" items={related} />
        </>
    );
}