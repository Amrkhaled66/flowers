import { useTranslation } from "react-i18next";

const ChangeLngButton = ({
  borderColor = "border-white",
}: {
  borderColor?: string;
}) => {
  const {
    i18n: { language, changeLanguage: changeLanguageFunc },
  } = useTranslation();

  const changeLanguage = (lang: string) => {
    changeLanguageFunc(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <button
      onClick={() => changeLanguage(language === "ar" ? "en" : "ar")}
      className={`font-ar ms-auto w-fit rounded-xl border ${borderColor} px-2 text-white`}
    >
      {language === "ar" ? "English" : "العربية"}
    </button>
  );
};

export default ChangeLngButton;
