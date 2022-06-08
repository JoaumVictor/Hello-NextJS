import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/info">
        <a>Perfil</a>
      </Link>
      <Link href="/requisicoes">
        <a>API</a>
      </Link>
      <Link href="/sobre">
        <a>Anotações</a>
      </Link>
    </header>
  );
}
