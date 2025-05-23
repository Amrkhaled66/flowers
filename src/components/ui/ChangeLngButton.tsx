import { useTranslation } from "react-i18next";

const ChangeLngButton = () => {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();

  return (
    <button
      onClick={() => changeLanguage(language === "ar" ? "en" : "ar")}
      className="font-ar text-white w-fit   ms-auto  rounded-xl border border-white px-2"
    >
      {language === "ar" ? "English" : "العربية"}
    </button>
  );
};

export default ChangeLngButton;
