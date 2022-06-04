import Header from "../components/Header/Header";
import S from "../styles/Home.module.scss";

export default function Home({ avatar, git }) {
  console.log(avatar);
  console.log(git);
  return (
    <div>
      <Header />
      <div className={S.home}>
        <h1>Victor</h1>
        <img className={S.foto} src={avatar} alt="Minha Foto" />
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
      avatar: git.avatar_url,
      git,
    },
  };
}
