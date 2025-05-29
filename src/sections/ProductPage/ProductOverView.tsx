import Images from "src/components/ProductPage/ProductOverView/Images";
import Info from "src/components/ProductPage/ProductOverView/Info";

const ProductOverView = ({
  images,
  name,
  price,
  loading = false,
  onShowImagesSlider
}: {
  images: string[] | undefined;
  name: string | undefined;
  price: number | undefined;
  description: string | undefined;
  category: string | undefined;
  loading?: boolean;
  onShowImagesSlider: () => void;
}) => {
  return (
    <div className="flex flex-col gap-x-[50px] gap-y-4 lg:flex-row">
      <Images onShowImagesSlider={onShowImagesSlider} loading={loading} images={images} />
      <Info loading={loading} name={name} price={price} />
    </div>
  );
};

export default ProductOverView;
