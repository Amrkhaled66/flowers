
const transformOccasions = (item: any) => {
  return {
    id: item.id,
    nameEn: item.name_en,
    nameAr: item.name_ar,
    slug: item.slug,
    image: item.image,
  };
};

export default transformOccasions;
