import ListNavegation from "@/components/shared/RenderList/RenderList";
import { About, Contact, Home } from "@components/shared/Collapse/Collapse";
import React, { useState } from "react";

interface IRender {
  activeSection: string;
  sections: {
    home: React.ReactNode;
    about: React.ReactNode;
    contact: React.ReactNode;
  };
}

const Collapse: React.FC = () => {
  const [activeSection, setActiveSection] = useState<keyof IRender["sections"]>("home");

  const sections: IRender["sections"] = {
    home: <Home />,
    about: <About />,
    contact: <Contact />,
  };

  return (
    <div>
      <section>
        <ListNavegation />
      </section>
      <ul>
        <li>
          <button onClick={() => setActiveSection("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => setActiveSection("about")}>About</button>
        </li>
        <li>
          <button onClick={() => setActiveSection("contact")}>Contact</button>
        </li>
      </ul>

      <div>{sections[activeSection]}</div>
    </div>
  );
};

export default Collapse;

