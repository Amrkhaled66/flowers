import { useState } from "react";
import { memo } from "react";
import {
  useGetCategories,
  useGetOccasions,
} from "src/hooks/filter/useFilterSectionsMutations";
import { useTranslation } from "react-i18next";
import { useConfig } from "src/context/configCtx";

import { SiteMapSection } from "./SiteMapSection";
import { DynamicSectionLinks } from "./DynamicSectionLinks";

const sectionKeys = {
  categories: "categories",
  occasions: "occasions",
  support: "support",
};

const SiteMap = memo(() => {
  const [activeList, setActiveList] = useState<string | null>(null);
  const { data: categories } = useGetCategories();
  const { data: occasions } = useGetOccasions();
  const { t } = useTranslation("layout");
  const {
    config: { whatsapp, email },
  } = useConfig();

  const onActiveList = (title: string | null) => {
    setActiveList(activeList === title ? null : title);
  };
  return (
    <div className="flex flex-1 flex-col justify-between text-left text-white lg:flex-row">
      <SiteMapSection
        onToggle={() => onActiveList(sectionKeys.occasions)}
        isActive={activeList === sectionKeys.occasions}
        title={t("footer.occasionTitle")}
      >
        <DynamicSectionLinks
          isActive={activeList === sectionKeys.occasions}
          items={occasions || []}
          searchParam="occasion_ids"
        />
      </SiteMapSection>
      <SiteMapSection
        onToggle={() => onActiveList(sectionKeys.categories)}
        isActive={activeList === sectionKeys.categories}
        title={t("footer.categoryTitle")}
      >
        <DynamicSectionLinks
          isActive={activeList === sectionKeys.categories}
          items={categories || []}
          searchParam="category_ids"
        />
      </SiteMapSection>
      <SiteMapSection
        onToggle={() => onActiveList(sectionKeys.support)}
        isActive={activeList === sectionKeys.support}
        title={t("footer.customerSupport")}
      >
        <div
          className={`${
            activeList === sectionKeys.support
              ? "mb-7 max-h-[200px]"
              : "max-h-0"
          } flex flex-col space-y-3 overflow-hidden text-start transition-all duration-300 lg:max-h-[200px]`}
        >
          <a
            target="_blank"
            href={whatsapp || ""}
            className="hover:text-main-100 animate text-sm"
          >
            {t("footer.contactUsWithWhatsApp")}
          </a>
          <a
            href={`mailto:${email || ""}`}
            className="hover:text-main-100 animate text-sm"
          >
            {t("footer.contactUsWithEmail")}
          </a>
          {/* <p className="hover:text-main-100 animate text-sm">
            {t("footer.faq")}
          </p>
          <p className="hover:text-main-100 animate text-sm">
            {t("footer.privacy")}
          </p> */}
        </div>
      </SiteMapSection>
    </div>
  );
});

export default SiteMap;
