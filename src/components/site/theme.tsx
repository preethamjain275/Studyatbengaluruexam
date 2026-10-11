import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const KEY = "study-theme";

export const themeScript = `(function(){try{var t=localStorage.getItem('${KEY}');if(t==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})()`;

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem(KEY, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(KEY, "light");
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="icon-3d h-9 w-9"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

