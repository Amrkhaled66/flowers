import transformProduct from "./transformProduct";

const transformCategory = (item: any) => {
  return {
    id: item.id,
    nameEn: item.name_en,
    nameAr: item.name_ar,
    slug: item.slug,
    image: item.image,
    products: item?.products?.map(transformProduct),
  };
};

export default transformCategory;
