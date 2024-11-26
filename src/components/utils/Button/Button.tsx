import { motion } from "framer-motion";

interface ButtonProps {
  classname: string;
  arialabel: string;
  title: string;
  type: "button" | "submit" | "reset";
  onclick: () => void;
  value: string | React.ReactNode;
}

export default function Button ({ arialabel, classname, title, type, onclick, value}: ButtonProps) {
  return (
    <motion.button
      className={classname}
      title={title}
      type={type}
      onClick={onclick}
      aria-label={arialabel}
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {value}
    </motion.button>
  );
}
