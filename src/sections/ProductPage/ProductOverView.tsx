import Images from "src/components/ProductPage/ProductOverView/Images";
import Info from "src/components/ProductPage/ProductOverView/Info";

const ProductOverView = ({
  isOutOfStock,
  images,
  afterDiscount,
  beforeDiscount,
  name,
  loading = false,
  onShowImagesSlider,
  id,
}: {
  isOutOfStock: boolean;
  images: string[] | undefined;
  name: string | undefined;
  afterDiscount: number | undefined;
  beforeDiscount: number | undefined;
  category: string | undefined;
  loading?: boolean;
  id: number;
  onShowImagesSlider: () => void;
}) => {
  return (
    <div className="flex flex-col gap-x-[50px] gap-y-4 lg:flex-row">
      <Images
        id={id}
        onShowImagesSlider={onShowImagesSlider}
        loading={loading}
        images={images}
      />
      <Info
        isOutOfStock={isOutOfStock}
        id={id}
        loading={loading}
        name={name}
        beforeDiscount={beforeDiscount}
        afterDiscount={afterDiscount}
      />
    </div>
  );
};

export default ProductOverView;
