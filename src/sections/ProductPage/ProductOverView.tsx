import Info from "src/components/ProductPage/ProductOverView/Info";

import ImageSlider from "src/components/ProductPage/ProductOverView/ImagesSlider";

const ProductOverView = ({
  isOutOfStock,
  images,
  afterDiscount,
  beforeDiscount,
  name,
  loading = false,
  onShowImagesSlider,
  id,
  width,
  height,
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
  width: string | undefined;
  height: string | undefined;
}) => {
  return (
    <div className="flex flex-col gap-x-[50px] gap-y-4 lg:flex-row">
      <ImageSlider
        id={id}
        onShowImagesSlider={onShowImagesSlider}
        images={images || []}
        loading={loading}
      />
      <Info
        isOutOfStock={isOutOfStock}
        id={id}
        loading={loading}
        name={name}
        beforeDiscount={beforeDiscount}
        afterDiscount={afterDiscount}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ProductOverView;
