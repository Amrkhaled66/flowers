import ctaImg from "src/assets/cta.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const CTA = () => {
  const { t } = useTranslation("home");
  return (
    <section className="container lg:!py-[40px]">
      <div
        style={{
          background: `
             linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url(${ctaImg}) lightgray -0.551px -39.016px / 100% 147.509% no-repeat`,
        }}
        className="flex h-[200px] flex-col items-start justify-center gap-y-3 rounded-[32px] object-cover p-5 text-left text-white sm:h-[340px] sm:items-center sm:text-center lg:h-[443px] lg:py-[67px]"
      >
        <p className="text-sm font-bold uppercase sm:text-[22px] lg:text-[24px]">
          {t("ctaSection.title")}
        </p>
        <p className="text-sm sm:text-xl lg:text-[24px]">
          {t("ctaSection.description")}
        </p>
        <div className="flex w-full flex-row justify-between gap-y-3 sm:flex-col">
          <h1 className="text-[24px] font-bold sm:text-[40px] lg:text-[48px]">
            {t("ctaSection.offer")}
          </h1>
          <Link to="/filter">
            <button className="shadow- animate w-fit rounded-xl bg-[#F6D451] px-3 py-2 font-bold text-black shadow-2xl shadow-[#C7A31B]/50 hover:bg-[#C7A31B] sm:mx-auto sm:h-[50px] sm:w-[200px] lg:h-[60px] lg:py-3">
              {t("ctaSection.ctaBtn")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
