'use client'

import { useProfile } from "@/hooks/api/useProfile";
import style from "./footer.module.scss";

export default function Footer() {

  const { data, isLoading, isError } = useProfile();
  const message = isLoading ? "Loading..." : isError ? "Ocorreu um erro" : <span>© 2024. Todos os Direitos Reservados. Desenvolvido por <b>{data?.nome}</b></span>;

  return (
    <footer className={style["footer"]}>
      <span className={style["footer-text"]}>
        {message}
      </span>
    </footer>
  );
}
