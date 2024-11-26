import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {

    if (typeof window !== "undefined") {
      const themeStored = localStorage.getItem("theme");

      if (themeStored) {
        document.body.dataset.theme = themeStored;
        setTheme(themeStored as "light" | "dark");

      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
        const defaultTheme = prefersDark.matches ? "dark" : "light";

        document.body.dataset.theme = defaultTheme;
        setTheme(defaultTheme);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.body.dataset.theme = newTheme;
    }
  };

  return { theme, toggleTheme };
}
