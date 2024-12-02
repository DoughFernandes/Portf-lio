import style from "@scss/utils/error.module.scss";
import React from "react";
import { PiWarningCircleDuotone } from "react-icons/pi";

type ErrorSpanProps = {
  message: string;
};

const Error: React.FC<ErrorSpanProps> = ({ message }) => {
  return(
    <div aria-label="Aviso de erro" className={style["container-error"]}>
      <span className={style["error-icone"]}>
        <PiWarningCircleDuotone />
      </span>
      <span className={style["error-text"]}>
        {message}
      </span>
    </div>
  );
};

export default Error;
