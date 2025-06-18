import ProductCard from "src/components/ui/ProductCard/ProductCard";
import ProductCardSk from "src/components/ui/Skeletons/ProductCardSk";
import Product from "src/types/product";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
export default function FilteredProducts({
  Products,
  openSidebar,
  loading,
}: {
  Products: Product[];
  openSidebar: () => void;
  loading?: boolean;
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
      {Products.length === 0 && !loading ? (
        <div className="bg-main-50 rounded-xl py-9">
          <p className="text-center font-bold">{t("noProducts")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {loading
            ? Array.from({ length: 12 }).map((_, index) => (
                <ProductCardSk key={index} />
              ))
            : Products.map((product: Product) => (
                <ProductCard isFilterCard key={product.id} product={product} />
              ))}
        </div>
      )}
    </div>
  );
}
