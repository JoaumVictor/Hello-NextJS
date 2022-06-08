import Header from "../components/Header";
import S from "../styles/Home.module.scss";

export default function Home({ git }) {
  console.log(git);
  return (
    <div>
      <Header />
      <div className={S.home}>
        <h1>{git.name}</h1>
        <img className={S.foto} src={git.avatar_url} alt="Minha Foto" />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const git = await fetch("https://api.github.com/users/JoaumVictor").then(
    (res) => res.json()
  );
  return {
    props: {
      git,
    },
  };
}
