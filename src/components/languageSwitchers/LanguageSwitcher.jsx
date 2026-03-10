import { useLanguage } from "../../context/LanguageContext";
import "./languageSwitcher.css";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-switch" onClick={toggleLanguage}>
      <div className={`switch-slider ${language}`}>
        <span className="flag">
          {language === "en" ? "🇺🇸" : "🇧🇷"}
        </span>
      </div>
    </div>
  );
}