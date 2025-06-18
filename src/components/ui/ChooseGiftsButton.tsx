import Button from "./Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function ChooseGiftsButton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  const { t } = useTranslation("shared");
  return (
    <Link to="/filter">
      <Button
        onClick={onClick}
        text={t("chooseGiftNow")}
        className={`bg-main-300 mx-auto w-full !py-3 !text-base text-white lg:w-[240px] ${className}`}
      />
    </Link>
  );
}
