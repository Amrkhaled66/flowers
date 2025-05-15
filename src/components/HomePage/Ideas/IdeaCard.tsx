import { useTranslation } from "react-i18next";

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
  return (
    <div
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), url(${img}) lightgray 50% / cover no-repeat`,
      }}
      className={` ${isMenuCard ? "h-[300px]" : "h-[400px] lg:h-[500px]"} flex items-end rounded-xl lg:rounded-[35px] overflow-hidden p-3 text-white`}
    >
      <div className="space-y-3 rounded-sm bg-[#FFFFFF1A] p-4 text-end backdrop-blur-[6px]">
        <p
          className={`text-lg font-bold ${isMenuCard ? "text-sm" : "lg:text-[32px]"} `}
        >
          {title}
        </p>
        <button className="rounded-xl border border-white bg-transparent px-3 py-1.5">
          {t("ideas.ideasCta")}
        </button>
      </div>
    </div>
  );
};

export default IdeaCard;
