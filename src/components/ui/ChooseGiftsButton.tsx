import Button from "./Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function ChooseGiftsButton({
  className = "",
}: {
  className?: string;
}) {
  const { t } = useTranslation("shared");
  return (
    <Link to="/filter">
      <Button
        text={t("chooseGiftNow")}
        className={`bg-main-300 mx-auto w-full lg:w-[240px] !py-3 !text-base text-white ${className}`}
      />
    </Link>
  );
}
