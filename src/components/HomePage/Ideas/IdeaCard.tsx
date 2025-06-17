import { useTranslation } from "react-i18next";
import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";
import { Link } from "react-router-dom";
const IdeaCard = ({
  img,
  title,
  isMenuCard,
}: {
  img: string;
  title: string;
  isMenuCard?: boolean;
}) => {
  const { t } = useTranslation("home");
  const { toggleMenu } = useNavBarToggleBtns();

  return (
    <div
      onClick={toggleMenu}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), url(${img}) lightgray 50% / cover no-repeat`,
      }}
      className={` ${isMenuCard ? "h-[300px]" : "h-[400px] lg:h-[500px]"} flex items-end overflow-hidden rounded-xl p-3 text-white lg:rounded-[35px]`}
    >
      <div className="space-y-3 rounded-sm bg-[#FFFFFF1A] p-4 text-end backdrop-blur-[6px]">
        <p
          className={`text-lg font-bold ${isMenuCard ? "text-sm" : "lg:text-[32px]"} `}
        >
          {title}
        </p>
        <Link to="/filter">
          <button className="rounded-xl border border-white bg-transparent px-3 py-1.5">
            {t("ideas.ideasCta")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IdeaCard;
