import { useTranslation } from "react-i18next";

const Head = () => {
  const { t } = useTranslation("layout");
  return (
    <div className="border-stroke flex justify-between border-b pb-4">
      <p className="font-bold">{t("cart.title")} (1)</p>
      <button className="underline">{t("cart.remove")}</button>
    </div>
  );
};

export default Head;
