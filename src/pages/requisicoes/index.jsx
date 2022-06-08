import S from "./style.module.scss";
import Header from "../../components/Header";
import Botao from "../../components/Botao";

export default function request() {
  return (
    <>
      <Header />
      <div className={S.requestContainer}>
        <h2>Soma 2 valores</h2>
        <div className={S.box}>
          <h3>Valor 1:</h3>
          <input type="text" />
          <h3>Valor 2:</h3>
          <input type="text" />
          <Botao frase="Teste" func={() => console.log("opa, salve")} />
        </div>
        <div className={S.box}></div>
      </div>
    </>
  );
}
