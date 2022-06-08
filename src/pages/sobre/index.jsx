/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "../../components/Header";
import Imagem from "../../components/Imagem/Imagem";
import S from "./style.module.scss";

export default function sobre() {
  return (
    <>
      <Header />
      <div className={S.sobre}>
        <h1>Anotações</h1>
        <p>
          Opa salve, tô estudando sobre o Next Js, e essa aplicação é meu campo
          minado, vou testar aqui esse lance da API dentro do next, o styled
          components, como funciona a função getStaticProps do Next e tudo mais!
        </p>
        <br />
        <h2>Anotação 1: Que tipo de CSS é esse?</h2>
        <Imagem
          url="https://www.freecodecamp.org/portuguese/news/content/images/2022/03/Article.jpg"
          alt="Imagem dos módulos de css"
        />
        <p>
          Primeiras impressões, o Next Js utiliza módulos de css ou qualquer
          outro compilador de css, isso porque os módulos são mais organizados e
          evitam erros no css, que podem acabar comprometendo componentes e
          páginas da aplicação por engano, o único lugar que é permitido usar
          css padrão é no arquivo "app.js" que é a raíz de todas as páginas e
          componentes! 🧐
        </p>
        <br />
        <h2>Anotação 2: Sendo apresentado ao SSR(Server Side Rendering)</h2>
        <p>
          Todo o código do site é carregado no lado do servidor, então comandos
          normais do react como localStorage.getItem("chave") não funcionam,
          pois na hora de rodar esse comando, a aplicação vai estar no servidor,
          e lá ela ainda não acesso ao localStorage, então vai dar erro, para
          contornar isso, podemos usar uma biblioteca chamada nookies que guarda
          seus dados que iriam pro storage nos cookies do seu site, ou então,
          podemos usar o próprio localStorage, mas acessando ele através do
          "useEffect", que só tenrará acessar o localStorage depois do
          carregamento da página no lado do cliente!
        </p>
        <h2>Anotação 3:</h2>
        <p>...</p>
        <h4>Links</h4>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=iqv5U0oKQX8list=RDCMUCzR2u5RWXWjUh7CwLSvbitAindex=1"
          rel="noreferrer"
        >
          👉 Playlist do Mario Souto sobre Next
        </a>
      </div>
    </>
  );
}
