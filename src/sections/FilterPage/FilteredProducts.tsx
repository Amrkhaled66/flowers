import ProductCard from "src/components/ui/ProductCard/ProductCard";
import Product from "src/types/product";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
export default function FilteredProducts({
  Products,
  openSidebar,
}: {
  Products: Product[];
  openSidebar: () => void;
}) {
  const { t } = useTranslation("filter");
  return (
    <div className="flex h-fit flex-1 flex-col gap-y-6">
      <button
        onClick={openSidebar}
        className="text-main border-main flex w-full items-center justify-center gap-2 rounded-xl border py-2 font-bold lg:hidden"
      >
        <Icon icon="mingcute:filter-fill" width="24" height="24" />
        {t("filter")}
      </button>
      <div className="grid grid-cols-2 gap-4 sm:gap-5 sm:grid-cols-3 lg:grid-cols-3 lg:gap-6">
        {Products.map((product: Product) => (
          <ProductCard isFilterCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
