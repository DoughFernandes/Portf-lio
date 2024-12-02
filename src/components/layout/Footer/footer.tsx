'use client'

import Loading from "@/components/feedbacks/__tests__/Loading.test";
import Error from "@/components/feedbacks/Errors";
import { useProfile } from "@/hooks/api/useProfile";
import { ERROR_MESSAGES } from "@/hooks/err/ErrorHandling";
import style from "./footer.module.scss";

interface IPerfil {
  nome: string;
}

export default function Footer() {
  const { data, isLoading, isError } = useProfile<IPerfil>();

  const message = isLoading ? <Loading /> : isError ? <Error message={ERROR_MESSAGES.FETCH_FAILED} /> : <span> 2024. Todos os Direitos Reservados. Desenvolvido por <b>{data?.nome}</b></span>;

  return (
    <footer className={style["footer"]}>
      <span className={style["footer-text"]}>
        {message}
      </span>
    </footer>
  );
}
