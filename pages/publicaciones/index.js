import React from "react";
import Layout from "../../components/Layout";

const posts = [
  {
    title: "Cómo empecé en el desarrollo móvil",
    date: "15 de enero, 2024",
    excerpt:
      "Mi camino desde el desarrollo web hasta crear aplicaciones móviles con React Native y Flutter. Las diferencias, los retos y lo que aprendí en el proceso.",
    tag: "Mobile",
  },
  {
    title: "Next.js vs React: ¿cuál usar?",
    date: "3 de febrero, 2024",
    excerpt:
      "Una comparativa práctica de ambas tecnologías y cuándo tiene sentido usar cada una en tus proyectos. SSR, SSG y Client-Side rendering explicados.",
    tag: "Web",
  },
  {
    title: "Tips para un mejor CSS con SCSS",
    date: "20 de marzo, 2024",
    excerpt:
      "Variables, mixins y reglas anidadas: todo lo que necesitas para escribir estilos más limpios, mantenibles y escalables en tus proyectos.",
    tag: "CSS",
  },
];

export default function Publicaciones() {
  return (
    <Layout>
      <section className="publicaciones">
        <h1 className="publicaciones_title">Publicaciones</h1>
        <p className="publicaciones_sub">
          Artículos sobre desarrollo web, mobile y tecnología.
        </p>
        <div className="publicaciones_grid">
          {posts.map((post) => (
            <article className="publicaciones_card" key={post.title}>
              <span className="publicaciones_card_tag">{post.tag}</span>
              <h3 className="publicaciones_card_title">{post.title}</h3>
              <p className="publicaciones_card_excerpt">{post.excerpt}</p>
              <div className="publicaciones_card_footer">
                <span className="publicaciones_card_date">{post.date}</span>
                <a href="#" className="publicaciones_card_link">
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
