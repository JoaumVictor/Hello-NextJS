import S from "./Imagem.module.scss";

export default function Imagem({ url, alt }) {
  return <img className={S.img} src={url} alt={alt} />;
}
