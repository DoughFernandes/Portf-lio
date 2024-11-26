import style from "@scss/utils/loading.module.scss";
import classNames from "classnames";
import React from "react";

interface LoadingProps {
  height?: string;
  width?: string;
  fontSize?: string;
}

const Loading: React.FC<LoadingProps> = ({ height = "50px", width = "50px", fontSize = "1rem" }) => {
  return (
    <div aria-label="Aviso de carregando arquivo" className={style["container-loading"]} >
      <div className={classNames(
          style["spinner"],
          style[`spinner-h-${parseInt(height)}`],
          style[`spinner-w-${parseInt(width)}`]
        )}
      ></div>
      <span className={classNames(
          style["loading-arquivo"],
          style[`font-size-${parseInt(fontSize)}`]
        )}
      >
        Carregando...
      </span>
    </div>
  );
};

export default Loading;
