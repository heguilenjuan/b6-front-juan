import { useTheme } from "@/hooks/useTheme";
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';


import '../../styles/themetoggle.scss'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div onClick={toggleTheme} className="toggleBtn">
        {
          theme === "light" ?
            <ToggleOffIcon sx={{ width: 32, height: 32 }} />
            :
            <ToggleOnIcon sx={{ width: 32, height: 32 }} />
        }
        <span>{theme === "light" ? "Modo claro" : "Modo oscuro"}</span>
      </div>
    </>
  );
};

export default ThemeToggle;
