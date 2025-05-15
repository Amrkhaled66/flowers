import Button from "src/components/ui/Button";

import { useTranslation } from "react-i18next";
const Content = () => {
  const { t } = useTranslation("home");

  return (
    <div className="z-40 flex h-full w-[50%] flex-col items-center justify-center gap-y-4 text-center sm:w-[55%] lg:w-[50%]">
      <h1 className="text-text-main text-xl font-bold sm:w-[80%] sm:text-[26px] lg:text-[40px] lg:leading-[51px]">
        {t("hero.title")}
      </h1>
      <div className="space-y-6">
        <p className="text-subTitle mx-auto hidden w-[78%] text-center leading-[20px] lg:block">
          {t("hero.description")}
        </p>
        <Button
          className="animate hover:bg-main-fade mx-auto text-white lg:h-[60px] lg:w-[200px]"
          text={t("hero.cta")}
        />
      </div>
    </div>
  );
};

export default Content;
