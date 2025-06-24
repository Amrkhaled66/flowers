// src/components/modals/AddToCartModal.tsx
import FreeDeliveryLine from "src/components/Cart/FreeDeliveryLine";
import Model from "src/components/ui/Model";
import Button from "src/components/ui/Button";
import OutLineButton from "src/components/ui/OutLineButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import CategoryTabs from "src/components/layout/AddedToCartModel/CategoryTabs";
import ProductList from "src/components/layout/AddedToCartModel/ProductList";

import { useAddToCartModal } from "src/context/AddedToCartModelCtx";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useMemo, useState } from "react";
import { useGetCategories } from "src/hooks/filter/useFilterSectionsMutations";
import useGetProduct from "src/hooks/products/useGetProduct";
import { useLocation } from "react-router";

const AddToCartModal = () => {
  const { isOpen, closeModal, productId } = useAddToCartModal();
  const { t } = useTranslation("addedToCartModel");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );
  const [selectedRecommended, setSelectedRecommended] = useState<boolean>(true);

  const { data: product, isLoading } = useGetProduct(
    selectedRecommended ? productId : null,
  );
  const { data: categories = [] } = useGetCategories();

  const selectedCategoryProducts = useMemo(() => {
    if (!selectedCategoryId) return [];
    return (
      categories.find((c: any) => c.id === selectedCategoryId)?.products || []
    );
  }, [categories, selectedCategoryId]);

  const handleSelectRecommended = () => {
    setSelectedRecommended(true);
    setSelectedCategoryId(null);
  };

  const handleSelectCategory = (id: number) => {
    setSelectedCategoryId(id);
    setSelectedRecommended(false);
  };

  if (pathname.includes("cart")) return null;

  return (
    <Model isOpen={isOpen} onClose={closeModal}>
      <div className="relative max-h-[80vh] w-auto space-y-6 overflow-x-hidden overflow-y-auto rounded-xl bg-white p-4 lg:w-[800px]">
        <h2 className="font-bold lg:text-xl">{t("title")}</h2>
        <FreeDeliveryLine />

        <div className="space-y-2">
          <div>
            <p className="flex gap-x-2 font-semibold xl:text-lg">
              <Icon icon="mdi:gift" width="24" height="24" /> {t("description")}
            </p>
          </div>
          <CategoryTabs
            onSelectRecommended={handleSelectRecommended}
            categories={categories}
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={handleSelectCategory}
          />
        </div>
        <ProductList
          isLoading={isLoading}
          products={
            selectedRecommended
              ? isLoading
                ? []
                : product?.recommendedProducts
              : selectedCategoryProducts
          }
        />
        <div className="fixed bottom-0 z-[60] flex w-[95%] items-center justify-between bg-white py-2 sm:py-4">
          <div className="w-[47%]">
            <OutLineButton
              className="!text-nowrap"
              text={t("continueshopping")}
              onClick={closeModal}
            />
          </div>
          <Button
            text={t("gotocart")}
            onClick={() => {
              navigate("/cart");
              closeModal();
            }}
            className="!h-fit w-[47%] text-white lg:!py-3"
          />
        </div>
      </div>
    </Model>
  );
};

export default AddToCartModal;
