'use client'

import ErrorSpan from "@/components/feedbacks/Errors";
import Loading from "@/components/feedbacks/Loading";
import Button from "@/components/utils/Button/Button";
import { useProfile } from "@/hooks/api/useProfile";
import { ERROR_MESSAGES } from "@/hooks/err/ErrorHandling";
import useTheme from "@/hooks/theme/theme";
import Image from "next/image";
import { FaMoon, FaSun } from "react-icons/fa";
import style from "./Header.module.scss";

const HeaderFigureImage = ({ foto = "", nome = "Usuário Desconhecido" }) => {
  return (
    <figure className={style["header-figure-image"]}>
      {foto ? <Image src={foto} alt="Profile" width={30} height={30} priority/> : <ErrorSpan message={ERROR_MESSAGES.PHOTO}/>}
      <figcaption>{nome}</figcaption>
    </figure>
  );
};

export default function Header() {
  const { data, isLoading, isError } = useProfile();
  const { theme, toggleTheme } = useTheme();

  const selectIcon = theme === "light" ? <FaMoon style={{color: "var(--icon)"}}/> : <FaSun style={{color: "var(--icon)"}}/>;

  if (isLoading) return (
    <header className={style["header"]}>
      <Loading height="20" width="20" fontSize="1"/>
    </header>
  );
  if (isError) return <header className={style["header"]}><ErrorSpan message={ERROR_MESSAGES.PHOTO}/></header>;

  return (
    <header className={style["header"]}>
      <HeaderFigureImage foto={data?.foto} nome={data?.nome} />
      <Button
        classname={style["header-button"]}
        title={"mudar cores do tema"}
        type="button"
        onclick={toggleTheme}
        value={selectIcon}
        arialabel={`Alternar para o tema ${theme === "light" ? "escuro" : "claro"}`}
      />
    </header>
  );
}

