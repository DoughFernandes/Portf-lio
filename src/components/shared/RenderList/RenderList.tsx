import { FaEnvelope, FaGamepad, FaHome } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { IoIosGitBranch } from "react-icons/io";

interface IListProps {
  title: string;
  icon: React.ReactNode;
}

{/** Vou criar um componente para renderizar as listas */ }

const list: Record<string, IListProps> = {
  home: {
    title: "Home",
    icon: <FaHome />,
  },
  about: {
    title: "Experience",
    icon: <FaPerson />,
  },
  contact: {
    title: "Contact",
    icon: <FaEnvelope />,
  },
  projetos: {
    title: "Projetos",
    icon: <GrProjects />,
  },
  experience: {
    title: "Experiênce",
    icon: <IoIosGitBranch />,
  },
  hobbys: {
    title: "Hobbies",
    icon: <FaGamepad />,
  },
};
export default function ListNavegation() {

  return (
    <ul>
      {Object.entries(list).map(([key, item]) => (
        <li key={key}>
          {item.icon} {item.title}
        </li>
      ))}
    </ul>
  );
}

