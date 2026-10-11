import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const KEY = "sab-theme";

export const themeScript = `(function(){try{var t=localStorage.getItem('${KEY}');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`;

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(KEY, next ? "dark" : "light");
  };
  return (
    <button onClick={toggle} aria-label="Toggle theme" className="icon-3d h-9 w-9">
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
