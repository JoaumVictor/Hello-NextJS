import S from "./style.module.scss";

export default function Botao({ frase, func }) {
  return (
    <button className={S.button} onClick={func} type="button">
      {frase}
    </button>
  );
}
