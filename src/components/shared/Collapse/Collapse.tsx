import { motion, Variants } from "framer-motion";
import React from "react";
import style from "./Collapse.module.scss";

interface CollapseProps {
  isExpanded: boolean; // Indica se o colapso está expandido
  children: React.ReactNode; // Conteúdo que será colapsado/expandido
  className?: string; // Classes adicionais para estilização personalizada
}

const Collapse: React.FC<CollapseProps> = ({ isExpanded, children, className }) => {
  // Variants para animação do Framer Motion
  const variants: Variants = {
    collapsed: { x: "100%", opacity: 0, background: "blue" },
    expanded: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      className={`${style.collapse} ${className || ""}`} // Combina estilos padrões com personalizados
      initial="collapsed" // Estado inicial
      animate={isExpanded ? "expanded" : "collapsed"} // Define o estado baseado em `isExpanded`
      variants={variants} // Mapeia variantes de animação
      transition={{ duration: 0.5, ease: "easeInOut" }} // Transição suave
    >
      {children}
    </motion.div>
  );
};

export default Collapse;
