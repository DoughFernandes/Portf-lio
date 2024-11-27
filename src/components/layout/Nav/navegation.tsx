'use client';

import Collapse from "@/components/shared/Collapse";
import { useState } from "react";
import style from "./navegation.module.scss";

export default function Example() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => setIsExpanded(!isExpanded);

  return (
    <div className={style.container}>
      <button
        className={style.toggleButton}
        onClick={toggleCollapse}
        aria-expanded={isExpanded}
        aria-controls="collapse-content"
      >
        {isExpanded ? "Fechar" : "Abrir"}
      </button>

      <Collapse isExpanded={isExpanded}>
        <div id="collapse-content" className={style.content}>
          <p>Este é o conteúdo dentro do colapso.</p>
        </div>
      </Collapse>
    </div>
  );
}
