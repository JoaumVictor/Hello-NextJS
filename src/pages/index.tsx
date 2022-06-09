import Header from "../components/Header/index";
import S from "../styles/Home.module.scss";

interface gitProps {
  name: string;
  avatar_url: string;
}

export default function Home({ name, avatar_url }: gitProps) {
  return (
    <div>
      <Header />
      <div className={S.home}>
        <h1>{name}</h1>
        <img className={S.foto} src={avatar_url} alt="Minha Foto" />
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
