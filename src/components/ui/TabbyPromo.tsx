import { useEffect } from "react";
import { useTranslation } from "react-i18next";

declare global {
  interface Window {
    TabbyPromo?: new (config: any) => any;
  }
}
const TabbyPromo = ({ price }: { price: number | undefined }) => {
  const {
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://checkout.tabby.ai/tabby-promo.js"]',
    );

    const initializeTabby = () => {
      if (window.TabbyPromo) {
        try {
          new window.TabbyPromo({
            selector: "#TabbyPromo",
            currency: "AED",
            price,
            lang: language,
          });
        } catch (error) {
          console.error("Failed to initialize TabbyPromo:", error);
        }
      }
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://checkout.tabby.ai/tabby-promo.js";
      script.async = true;

      script.onload = () => {
        if (window.TabbyPromo) {
          new window.TabbyPromo({
            selector: "#TabbyPromo",
            currency: "AED",
            price,
            lang: language,
          });
        }
      };

      document.body.appendChild(script);
    } else {
      initializeTabby();
    }
  }, [price, language]);

  return <div key={language} id="TabbyPromo"></div>;
};

export default TabbyPromo;
