import './ShinyText.css';
import { useTheme } from "./ThemeContext";
const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;
  const { theme } = useTheme();
  const textColor = theme === "dark" ? "#b5b5b5a4" : "#111111";
  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration, color : textColor }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
