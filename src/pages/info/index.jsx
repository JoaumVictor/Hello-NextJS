import Header from "../../components/Header";
import S from "./style.module.scss";

export default function index({ git, dataDeCriacao }) {
  return (
    <>
      <Header />
      <div className={S.infoContainer}>
        <div className={S.infoLeftContent}>
          <h1>{git.name}</h1>
          <img src={git.avatar_url} alt={git.name} />
        </div>
        <div className={S.infoRightContent}>
          <h3>{git.bio}</h3>
          <h3>{git.location}</h3>
          <h3>Perfil criado em : {dataDeCriacao}</h3>
          <h3>Seguidores: {git.followers}</h3>
          <h3>Seguindo: {git.following}</h3>
          <h3>Repositórios públicos: {git.public_repos}</h3>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const usuario = "JoaumVictor";
  const URL = `https://api.github.com/users/${usuario}`;
  const git = await fetch(URL).then((res) => res.json());

  const formatDate = () => {
    const data = git.created_at.slice(0, 10);
    const ano = data.slice(0, 4);
    const mes = data.slice(5, 7);
    const dia = data.slice(8, 10);
    return `${dia}-${mes}-${ano}`;
  };

  return {
    props: {
      git,
      dataDeCriacao: formatDate(),
    },
  };
}
