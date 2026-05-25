import CardHome from "../components/CardHome/CardHome";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="Home">
        <CardHome />
        <Skills />
        <Projects />
      </div>
    </Layout>
  );
}
